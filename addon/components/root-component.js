import Ember from 'ember';
import assign from '../utils/deep-assign';
import layout from '../templates/components/root-component';
const { A, Component, computed } = Ember;

const get = (object, key) => object.get ? object.get(key) : object[key];

export default Component.extend({
  layout,
  tagName: '',
  optionLimitPath: 'limit',
  optionChildrenPath: 'children',
  optionLabelPath: 'label',
  optionValuePath: 'id',
  limit: 0,

  myTree: computed('input.[]', function() {
    const items = this.get('input');
    const all = this.get('all');
    const optionChildrenPath = this.get('optionChildrenPath');
    const optionValuePath = this.get('optionValuePath');
    const findParent = (item) => all.find((parent) => {
      return get(parent, optionChildrenPath).indexOf(item) !== -1;
    });

    const recBuildPath = (hash, parent) => {
      const nextParent = findParent(parent);

      if (!parent) {
        return hash;
      }

      if (nextParent) {
        return recBuildPath({ [get(parent, optionValuePath)]: hash }, nextParent);
      } else {
        return { [get(parent, optionValuePath)]: hash };
      }

    };

    const paths = items.map(item => recBuildPath({ [get(item, optionValuePath)]: {} }, findParent(item)));

    const tree = assign({}, ...paths);

    const recBuildTree = (hash, parentKey) => {
      const keys = Object.keys(hash);

      const parent = all.findBy('id', +parentKey);
      let limit = 0;
      if(parent){
        limit = get(parent, 'limit') ? get(parent, 'limit') : 0;
      }

      const expandedKeys = keys.filter((key) => get(all.findBy('id', +key), 'expand'));
      const collapsedKeys = keys.filter((key) => !get(all.findBy('id', +key), 'expand'));

      expandedKeys.forEach((key) => recBuildTree(hash[key], key));

      if (limit !== 0 && collapsedKeys.length >= limit) {
        hash.collapsed = {};
        collapsedKeys.forEach((key) => {
          hash.collapsed[key] = hash[key];
          delete hash[key];
        });
      } else {
        collapsedKeys.forEach((key) => recBuildTree(hash[key], key));
      }
    };

    recBuildTree(tree);

    return tree;
  }),

  actions: {

    addSelection(hash) {
      const all = this.get('all');
      const addSelection = this.get('addSelection');
      const optionValuePath = this.get('optionValuePath');
      let rec = (hash, key) => {
        const newHash = hash[key];
        const newKey = Object.keys(newHash)[0];
        return newKey ? rec(newHash, +newKey) : key;
      };
      const id = rec(hash, +Object.keys(hash)[0]);
      const item = all.find((item) => get(item, optionValuePath) === id);

      addSelection(item);
    },

    removeSelection(array) {
      const all = this.get('all');
      const input = this.get('input');
      const removeSelection = this.get('removeSelection');
      const addSelection = this.get('addSelection');
      const optionChildrenPath = this.get('optionChildrenPath');
      const optionValuePath = this.get('optionValuePath');
      const id = array.pop();
      const item = all.find((item) => get(item, optionValuePath) === id);

      const parentId = array.pop();
      const parent = all.find((item) => get(item, optionValuePath) === parentId);
      if (parent) {

        const siblings = A(get(parent, optionChildrenPath)).filter((child) => {
          return input.indexOf(child) !== -1;
        });

        if (siblings.length === 1) {
          addSelection(parent);
        }
      }

      removeSelection(item);
    }
  }

});

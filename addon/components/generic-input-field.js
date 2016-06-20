import Ember from 'ember';
import assign from '../utils/deep-assign';
import layout from '../templates/components/generic-input-field';
const { A, Component, computed, get } = Ember;

export default Component.extend({
  layout,
  tagName: '',

  // the below props are passed to recur-input
  // and not used in generic-input at all
  // so they just act as defaults
  optionSelectionLimitPath: 'selectionLimit',
  selectionLimit: 0,

  optionChildrenPath: 'children',
  optionLabelPath: 'label',
  optionValuePath: 'id',


  myTree: computed('input.[]', function() {
    const items = this.get('input');
    const all = this.get('all');
    const optionChildrenPath = this.get('optionChildrenPath');
    const optionValuePath = this.get('optionValuePath');
    const findParent = (item) => all.find((parent) => {
      const children = get(parent, optionChildrenPath);
      if(typeof children === 'undefined'){
        return false;
      }else{
        return children.indexOf(item) !== -1;
      }
    });

    const rec = (hash, parent) => {
      const nextParent = findParent(parent);

      if (!parent) {
        return hash;
      }

      if (nextParent) {
        return rec({ [get(parent, optionValuePath)]: hash }, nextParent);
      } else {
        return { [get(parent, optionValuePath)]: hash };
      }

    };

    const paths = items.map(item => rec({ [get(item, optionValuePath)]: {} }, findParent(item)));

    const tree = assign({}, ...paths);

    const rec2 = (hash) => {
      const keys = Object.keys(hash);

      const expandedKeys = keys.filter((key) => {
        const item = all.findBy(optionValuePath, key);
        return get(item, 'expand');
      });
      const collapsedKeys = keys.filter((key) => !get(all.findBy(optionValuePath, key), 'expand'));

      expandedKeys.forEach((key) => rec2(hash[key]));

      if (collapsedKeys.length >= 3) {
        hash.collapsed = {};
        collapsedKeys.forEach((key) => {
          hash.collapsed[key] = hash[key];
          delete hash[key];
        });
      } else {
        collapsedKeys.forEach((key) => rec2(hash[key]));
      }
    };

    rec2(tree);
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
        return newKey ? rec(newHash, newKey) : key;
      };
      const id = rec(hash, Object.keys(hash)[0]);
      const item = all.find((item) => get(item, optionValuePath) == id);

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
      const item = all.find((item) => get(item, optionValuePath) == id);

      const parentId = array.pop();
      const parent = all.find((item) => get(item, optionValuePath) == parentId);
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

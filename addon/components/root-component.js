import Ember from 'ember';
import assign from '../utils/deep-assign';
import layout from '../templates/components/root-component';
const { A } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  all: Ember.computed('callback', function() {
    const callback = this.get('callback');
    return callback();
  }),

  myTree: Ember.computed('input.[]', 'callback', function() {
    const items = this.get('input');
    const all = this.get('all');
    const findParent = (item) => all.find(parent => parent.children.indexOf(item) !== -1);

    const rec = (hash, parent) => {
      const nextParent = findParent(parent);

      if (!parent) {
        return hash;
      }

      if (nextParent) {
        return rec({ [parent.id]: hash }, nextParent);
      } else {
        return { [parent.id]: hash };
      }

    };

    const paths = items.map(item => rec({ [item.id]: {} }, findParent(item)));

    return assign({}, ...paths);
  }),

  actions: {

    addSelection(hash) {
      const all = this.get('all');
      const addSelection = this.get('addSelection');
      let rec = (hash, key) => {
        const newHash = hash[key];
        const newKey = Object.keys(newHash)[0];
        return newKey ? rec(newHash, +newKey) : key;
      };
      const id = rec(hash, +Object.keys(hash)[0]);
      const item = all.find((item) => item.id === id);

      addSelection(item);
    },

    removeSelection(array) {
      const all = this.get('all');
      const input = this.get('input');
      const removeSelection = this.get('removeSelection');
      const addSelection = this.get('addSelection');
      const id = array.pop();
      const item = all.find((item) => item.id === id);

      const parentId = array.pop();
      const parent = all.find((item) => item.id === parentId);
      if (parent) {

        const siblings = A(parent.children).filter((child) => {
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

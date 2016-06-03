import Ember from 'ember';
import assign from '../utils/deep-assign';
import layout from '../templates/components/root-component';

export default Ember.Component.extend({
  layout,
  tagName: '',

  all: Ember.computed('callback', function() {
    const callback = this.get('callback');
    return callback();
  }),

  myTree: Ember.computed('input', 'callback', function() {
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
      const myTree = this.get('myTree');
      const all = this.get('all');
      this.set('myTree', assign({}, myTree, hash));
      let rec = (hash, key) => {
        const newHash = hash[key];
        const newKey = Object.keys(newHash)[0];
        return newKey ? rec(newHash, +newKey) : key;
      };
      const id = rec(hash, +Object.keys(hash)[0]);
      const item = all.find((item) => item.id === id);

      console.log(item); //bubble out later
    },

    removeSelection(array) {
      const myTree = this.get('myTree');
      const all = this.get('all');

      let object = myTree;
      while (array.length) {
        const id = array.shift();
        if (array.length) {
          object = object[id];
        } else {
          delete object[id];
          const item = all.find((item) => item.id === id);
          console.log(item);
        }
      }

      this.set('myTree', assign({}, myTree));

    }
  }

});

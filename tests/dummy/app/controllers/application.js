import Ember from 'ember';
import assign from 'npm:deep-assign';
const { A, Controller } = Ember;

const c2 = { id: 2, label: 'a1', children: [] };
const c3 = { id: 3, label: 'a2', children: [] };
const c5 = { id: 5, label: 'b1', children: [] };

const c1 = { id: 1, label: 'A',  children: [c2, c3] };
const c4 = { id: 4, label: 'B',  children: [c5] };
const c6 = { id: 6, label: 'C',  children: [] };
const c7 = { id: 7, label: 'D',  children: [] };

export default Controller.extend({

  myContent: A([c1, c4, c6, c7]),

  myTree: {
    1: { 2: {}, 3: {} },
    4: {},
  },

  actions: {

    addSelection(hash) {
      const myTree = this.get('myTree');
      this.set('myTree', assign({}, myTree, hash));
    },

    removeSelection(array) {
      const myTree = this.get('myTree');

      let object = myTree;
      while (array.length) {
        const id = array.shift();
        if (array.length) {
          object = object[id];
        } else {
          delete object[id];
        }
      }

      this.set('myTree', assign({}, myTree));
    }
  }

});

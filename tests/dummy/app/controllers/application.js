import Ember from 'ember';
const { A, Controller } = Ember;

const c2 = { id: 2, label: 'a1', children: [] };
const c3 = { id: 3, label: 'a2', children: [] };
const c5 = { id: 5, label: 'b1', children: [] };

const c1 = { id: 1, label: 'A',  children: [c2, c3] };
const c4 = { id: 4, label: 'B',  children: [c5] };
const c6 = { id: 6, label: 'C',  children: [] };
const c7 = { id: 7, label: 'D',  children: [] };

c2.parent = c1; c3.parent = c1; c5.parent = c1;


export default Controller.extend({

  myContent: A([c1, c4, c6, c7]),
  //myInput: A([c2, c3, c5, c7]),
  myInput: A([]),
  myCallback: () => A([c1,c2,c3,c4,c5,c6,c7]),

  actions: {
    addMySelection(item) {
      this.get('myInput').addObject(item);
    },
    removeMySelection(item) {
      this.get('myInput').removeObject(item);
    },
  }

});

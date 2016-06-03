import Ember from 'ember';
const { A, Controller, RSVP: { Promise } } = Ember;

import { catA,catB,catC,subA,subB,subC } from './data_v1';
import { selections, realCategorySelection, categories, categoriesAsSet } from './data_v2';

export default Controller.extend({

  selections,

  realCategorySelection,

  loadParents(setOfIds){
    return new Promise((resolve)=>{
      console.log('idsAsSet:',setOfIds);
      const intersection = new Set([...categoriesAsSet].filter(x => setOfIds.has(x.id)));
      console.log('intersection:',intersection);
      resolve(intersection);
    });
  },

  leafRenderOptions: {
    parentPath: 'category_id',
    renderFrom: 'set', // or promise that resolves it
    set: categoriesAsSet,
    promise: this.loadParents
  },

  rootRenderOptions: {
    childrenPath: 'children'
  },

  items: [
    new Promise((res) => {
      setTimeout(() => {
        res([catA])
      } ,1000);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res([catA,catB,catC])
      } ,1500);
    })
  ],

  actions: {
    loadParent(graphData){
    },
    loadChildren(graphData){
    }
  }

});

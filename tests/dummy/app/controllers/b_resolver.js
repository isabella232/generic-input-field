import Ember from 'ember';
const { A, Controller, RSVP: { Promise } } = Ember;

import { catA,catB,catC,subA,subB,subC } from './data';

export default Controller.extend({

  leafsOnly: [subA,subB,subC],

  leafsWithParent: [subA,subB,catA],

  categories: [],

  subCategories: [],

  graph: {
    'category': { children: 'subcategory' },
    'subcategory': { parent: 'category', children: 'subsubcategory' },
    'subsubcategory': { parent: 'subcategory' }
  },

  resolver: function(){
    // resolve here, not in component ?
    // pass a resolver to component ?
  },

  subSubsAsPromises: [
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'aaa', label: 'SSCategory A' });
      } ,100);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'bbb', label: 'SSCategory B' });
      } ,1000);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'ccc', label: 'SSCategory C' });
      } ,2000);
    }),
  ],

  subSubCategories: [],

  subcategoryData: [
    { id: 'aa', label: 'SCategory A' },
    { id: 'bb', label: 'SCategory B' },
    { id: 'cc', label: 'SCategory C' },
  ],

  categoryData:[
    { id: 'a', label: 'Category A' },
    { id: 'b', label: 'Category B' },
    { id: 'c', label: 'Category C' },
  ],

  actions: {
    //todo query graph here rather ?
    loadDependantData(graphData){
      console.log('loadDependantData:',graphData)
      //return this.store.findQuery(graphData.get('parent'),ids?)
      return new Promise ((resolve,reject)=>{
        resolve(this.get(graphData.parent + 'Data'))
      });
    },
    loadChildren(graphData){
      console.log('loadChildren:',graphData)
      return new Promise ((resolve,reject)=>{
        resolve([
          { id: 'aaaa', label: 'SSSCategory A' },
          { id: 'bbaa', label: 'SSSCategory B' }
        ]);
      });
    }
  }

});


// const c2 = { id: 2, label: 'a1', children: [] };
// const c3 = { id: 3, label: 'a2', children: [] };
// const c5 = { id: 5, label: 'b1', children: [] };
// const c1 = { id: 1, label: 'A',  children: [c2, c3] };
// const c4 = { id: 4, label: 'B',  children: [c5] };
// const c6 = { id: 6, label: 'C',  children: [] };

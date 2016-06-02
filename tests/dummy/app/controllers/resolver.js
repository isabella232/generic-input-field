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
    }
  }

});

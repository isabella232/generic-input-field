import Ember from 'ember';
const { Controller, RSVP: { Promise } } = Ember;

export default Controller.extend({

  promiseRecordArray: Ember.computed('', function() {
    return this.store.findAll('category');
  }),

  array: [
    {
      id: 'A',
      label: 'Category A',
      multi: false
    },
    {
      id: 'B',
      label: 'Category B',
      multi: false
    },
    {
      id: 'C',
      label: 'Category C',
      multi: false
    },
  ],

  arrayOfPromises: [
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'A', label: 'Category A', multi: false });
      } ,100);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'B', label: 'Category B', multi: false });
      } ,1000);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'C', label: 'Category C', multi: false });
      } ,2000);
    }),
  ],

  promise: new Promise((resolve) => {
    const array = [
      {
        id: 'A',
        label: 'Category A',
        multi: false
      },
      {
        id: 'B',
        label: 'Category B',
        multi: false
      },
      {
        id: 'C',
        label: 'Category C',
        multi: false
      },
    ];

    setTimeout(() => resolve(array), 1000);
  })

});

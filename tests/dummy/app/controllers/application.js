import Ember from 'ember';
const { A, Controller, RSVP: { Promise } } = Ember;

const catB = {
  id: 'B',
  label: 'Category B',
  multi: false
};

const catA = {
  id: 'A',
  label: 'Category A',
  children: [
    {
      id: 'sA1',
      label: 'SubCategory from A 1',
    },
    {
      id: 'sA2',
      label: 'SubCategory from A 2',
    },
  ]
};

const catC = {
  id: 'C',
  label: 'Category C',
  multi: false
};

export default Controller.extend({

  selectionsForModel: A(),

  selectionsForPromiseRecordArray: A(),
  promiseRecordArray: Ember.computed('', function() {
    return this.store.findAll('category');
  }),

  selectionsForArray: A([catA, catB]),

  array: [ catA, catB, catC ],

  selectionsForArrayOfPromises: A(),
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

  selectionsForPromise: A(),
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
  }),

  actions: {
    addToArray(item) {
      this.get('selectionsForArray').pushObject(item);
    },
    removeFromArray(item) {
      this.get('selectionsForArray').removeObject(item);
    },

    addToPromise(item) {
      this.get('selectionsForPromise').pushObject(item);
    },
    removeFromPromise(item) {
      this.get('selectionsForPromise').removeObject(item);
    },

    addToArrayOfPromises(item) {
      this.get('selectionsForArrayOfPromises').pushObject(item);
    },
    removeFromArrayOfPromises(item) {
      this.get('selectionsForArrayOfPromises').removeObject(item);
    },

    addToModel(item) {
      this.get('selectionsForModel').pushObject(item);
    },
    removeFromModel(item) {
      this.get('selectionsForModel').removeObject(item);
    },

    addToPromiseRecordArray(item) {
      this.get('selectionsForPromiseRecordArray').pushObject(item);
    },
    removeFromPromiseRecordArray(item) {
      this.get('selectionsForPromiseRecordArray').removeObject(item);
    },
  }

});

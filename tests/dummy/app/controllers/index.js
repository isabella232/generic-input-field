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

/*
 * [0, A, A1, A2, B, B1, B2, ..., ]
 *
 * categories: [A1, B1, B2]
 *
 * {{component
 *   content=allRootCategoriesFromStore
 *   selections = model.categories
 *   }}
 *
 *   findParent(s) {
 *     go through content, and find x where
 *     x.children contains s
 *   }
 *
 *   init() {
 *     for selections as |s| do
 *      findParent(s) // := [A, B]
 *      tmpArray.push s
 *
 *     end
 *   }
 *
 */

const categories = [
  { id: 'A', label: 'category a' },
  { id: 'B', label: 'category a' },
  { id: 'C', label: 'category a' },
];

const catAA = { id: 'AA', label: 'category a a' };
const catAB = { id: 'AB', label: 'category a b' };
const catAC = { id: 'AC', label: 'category a c' };
const catBA = { id: 'BA', label: 'category b a' };
const catBB = { id: 'BB', label: 'category b b' };

categories[0].children = [ catAA, catAB, catAC ];
categories[1].children = [ catBA, catBB ];
categories[2].children = [];

catAA.parent = categories[0];
catAB.parent = categories[0];
catAC.parent = categories[0];

catBA.parent = categories[1];
catBB.parent = categories[1];

export default Controller.extend({

  selections: A(),
  selected: A([catAA, catAB, catBB]),
  allCategories: categories,




  // ---------------------------------
  selectionsForModel: A(),

  selectionsForPromiseRecordArray: A(),
  promiseRecordArray: Ember.computed('', function() {
    return this.store.findAll('category');
  }),

  selectionsForArray: A([catA, catB]),

  selectionsB: A([catA, catB]),

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


    //--------------------------------------------------























    addSelection(item) {
    },
    removeSelection(item) {
    },
  }

});

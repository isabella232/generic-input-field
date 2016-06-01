import Ember from 'ember';
const { Controller, RSVP: { Promise } } = Ember;

export default Controller.extend({

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

  promise: Promise.resolve([
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
  ])

});

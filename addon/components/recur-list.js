import Ember from 'ember';
import layout from '../templates/components/recur-list';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  optionValuePath: 'id',
  optionLabelPath: 'label',
  optionChildrenPath: 'children',
});

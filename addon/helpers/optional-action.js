import Ember from 'ember';

export function optionalAction([action]) {
  return action || function() { };
}

export default Ember.Helper.helper(optionalAction);

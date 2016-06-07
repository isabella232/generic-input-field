import Ember from 'ember';

export function getParents([array]) {
  const children = [].concat.apply([], array.mapBy('children'));
  const clone = Array.from(array);
  return Ember.A(clone).removeObjects(children);
}

export default Ember.Helper.helper(getParents);

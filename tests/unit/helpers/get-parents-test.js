import Ember from 'ember';

const { A } = Ember;

import { getParents } from 'dummy/helpers/get-parents';
import { module, test } from 'qunit';

module('Unit | Helper | get parents');

test('gets parents correctly', function(assert) {
  const emptyArray = A([]);
  const result = getParents([emptyArray]);
  assert.ok(result);
});

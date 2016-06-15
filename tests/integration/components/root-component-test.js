import Ember from 'ember';
const { A, $ } = Ember;
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('root-component', 'Integration | Component | root component', {
  integration: true
});

test('it renders with no selections', function(assert) {

  this.set('all', A([
    { id: '1', label: 'A' },
    { id: '2', label: 'B' },
    { id: '3', label: 'C' }
  ]));

  this.set('input', A([]));

  this.render(hbs`{{root-component all=all input=input}}`);

  const genericFields = this.$('div.generic-field');
  const parentLevel = genericFields[0];
  const childLevel = genericFields[1];

  const labels = this.$('div.content label');

  assert.equal(labels.length, 3, 'Rendered 3 labels');

});

test('it renders with one selection', function(assert) {

  this.set('all', A([
    { id: '1', label: 'A' },
    { id: '2', label: 'B' },
    { id: '3', label: 'C' }
  ]));

  this.set('input', A([
    { id: '1', label: 'A' },
  ]));

  this.render(hbs`{{root-component all=all input=input}}`);

  const genericFields = this.$('div.generic-field');
  const parentLevel = $(genericFields[0]);
  const childLevel = $(genericFields[1]);

  const labels = parentLevel.find('div.content > label');
  const notSelected = labels.filter((x, label) => {
    return label.innerText !== '[]';
  });
  const selected = childLevel.find('label.collapsed');

  assert.equal(notSelected.length, 2, 'Rendered 2 un-selected labels');

  assert.equal(selected.length, 1, 'Rendered 1 selected label');

});

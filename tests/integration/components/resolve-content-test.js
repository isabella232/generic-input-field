import Ember from 'ember';
const { A, run, RSVP: { Promise } } = Ember;
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
const ESPromise = window.Promise;

moduleForComponent('resolve-content', 'Integration | Component | resolve content', {
  integration: true
});

test('it resolves with ember promises', function(assert) {

  assert.expect(3);

  const doneAfter105ms = assert.async();
  const doneAfter505ms = assert.async();
  const doneAfter1005ms = assert.async();

  this.set('promises', [
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'aaa', label: 'SSCategory A' });
      } ,100);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'bbb', label: 'SSCategory B' });
      } ,500);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'ccc', label: 'SSCategory C' });
      } ,1000);
    }),
  ]);

  this.render(hbs`
    {{#resolve-content content=promises as |resolvedContent|}}
      <ul class='list'>
        {{#each resolvedContent as |resolved|}}
          <li>{{resolved.label}}</li>
        {{/each}}
      </ul>
    {{/resolve-content}}
  `);

  setTimeout(function() {
    assert.ok( true, "after 105 ms 1 item would have loaded, but not be shown" );
    doneAfter105ms();
  }, 105 );
  setTimeout(function() {
    assert.ok( true, "after 505 ms 1 item would have loaded, but not be shown" );
    doneAfter505ms();
  }, 505 );
  setTimeout(function() {
    assert.ok( true, "after 1005 ms 3 items would have loaded and be shown" );
    doneAfter1005ms();
  }, 1005);
});

test('it resolves with es6 promises', function(assert) {

  this.set('promises', [
    new ESPromise((res) => {
      setTimeout(() => {
        res({ id: 'aaa', label: 'SSCategory A' });
      } ,100);
    }),
    new ESPromise((res) => {
      setTimeout(() => {
        res({ id: 'bbb', label: 'SSCategory B' });
      } ,1000);
    }),
    new ESPromise((res) => {
      setTimeout(() => {
        res({ id: 'ccc', label: 'SSCategory C' });
      } ,2000);
    }),
  ]);

  this.render(hbs`
    {{#resolve-content content=promises as |resolvedContent|}}
      <ul class='list'>
        {{#each resolvedContent as |resolved|}}
          <li>{{resolved.label}}</li>
        {{/each}}
      </ul>
    {{/resolve-content}}
  `);

  assert.equal(this.$('ul.list li').length, 3, 'All promises resolved');
});

test('it resolves with plain arrays', function(assert) {

  this.set('plainArray', [
    { id: 'aa', label: 'SCategory A' },
    { id: 'bb', label: 'SCategory B' },
    { id: 'cc', label: 'SCategory C' },
  ]);

  this.render(hbs`
    {{#resolve-content content=plainArray as |resolvedContent|}}
      <ul class='list'>
        {{#each resolvedContent as |resolved|}}
          <li>{{resolved.label}}</li>
        {{/each}}
      </ul>
    {{/resolve-content}}
  `);

  assert.equal(this.$('ul.list li').length, 3, 'All plain items resolved');
});

test('it resolves with promise that contains an array', function(assert) {
    this.set('promise', new Promise((resolve) => {
        const array = A([
          {
            id: 'A',
            label: 'Category A',
          },
          {
            id: 'B',
            label: 'Category B',
          },
          {
            id: 'C',
            label: 'Category C',
          },
        ]);
        run(null,resolve,array);
    }));

  this.render(hbs`
    {{#resolve-content content=promise as |resolvedContent|}}
      <ul class='list'>
        {{#each resolvedContent as |resolved|}}
          <li>{{resolved.label}}</li>
        {{/each}}
      </ul>
    {{/resolve-content}}
  `);

  assert.equal(this.$('ul.list li').length, 3, 'All items in one promise resolved');
});

test('it resolves with array proxies', function(assert) {

  const items = ['item', 'item', 'item'];
  const mapped = items.map((item,index)=>{
    return {id:index,label:item};
  });
  const arrayProxy = Ember.ArrayProxy.create({ content: mapped });
  this.set('arrayProxy', arrayProxy);
  this.render(hbs`
    {{#resolve-content content=arrayProxy as |resolvedContent|}}
      <ul class='list'>
        {{#each resolvedContent as |resolved|}}
          <li>{{resolved.label}}</li>
        {{/each}}
      </ul>
    {{/resolve-content}}
  `);
  assert.equal(this.$('ul.list li').length, 3, 'All promises resolved');
});

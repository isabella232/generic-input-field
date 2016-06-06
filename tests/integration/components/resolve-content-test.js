import Ember from 'ember';
const { A } = Ember;
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
const Promise = window.Promise;

moduleForComponent('resolve-content', 'Integration | Component | resolve content', {
  integration: true
});

test('it resolves with promises', function(assert) {

  this.set('promises', [
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'aaa', label: 'SSCategory A' });
      } ,100);
    }),
    new Promise((res) => {
      setTimeout(() => {
        res({ id: 'bbb', label: 'SSCategory B' });
      } ,1000);
    }),
    new Promise((res) => {
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

  //const promise = ;

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
      setTimeout(() => {
        console.log('resolving',array);
        resolve(array);
      }, 1000);
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

// TODO check test case in dummy app
// We try to resolve array proxies, but the classes we do try to resolve
// are subclasses of arrayProxy, so they have properties we check against
// that we don't simulate correctly below
test('it resolves with array proxies', function(assert) {

  const items = ['item', 'item', 'item'];
  const mapped = items.map((item,index)=>{
    return {id:index,label:item};
  });
  const arrayProxy = Ember.ArrayProxy.create({ content: mapped });
  console.log(arrayProxy);

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

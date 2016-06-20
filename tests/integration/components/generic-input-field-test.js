import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('generic-input-field', 'Integration | Component | generic input field', {
  integration: true
});

//TODO remove this test after successfully setting up remaining test cases
test('content is set successfully', function(assert) {
  const content = [
    { id: 'aa', label: 'SCategory A' },
    { id: 'bb', label: 'SCategory B' },
    { id: 'cc', label: 'SCategory C' },
  ];
  this.set('myContent', content);
  assert.equal(this.get('myContent.length'), content.length, 'content set and retrieved successfully');
});

//TODO test it fails to render with no content set
// test('it produces an error when no content set', function(assert) {
//   assert.throws(
//     this.render(hbs`{{generic-input-field}}`),
//     'content must be set for generic-input-field',
//     'Raised error message regarding content not being set'
//   );
// });

//TODO fix failing test below
// test('it renders correctly with content', function(assert) {
//   this.set('myContent', [
//     { id: 'aa', label: 'SCategory A' },
//     { id: 'bb', label: 'SCategory B' },
//     { id: 'cc', label: 'SCategory C' },
//   ]);
//   console.log(this.get('myContent'));
//   this.render(hbs`
//     {{generic-input-field content=myContent test=myContent}}
//   `);
//   console.log(this.$());
//   assert.equal(1, 1);
// });

//TODO test it fails to render with no content set
// test('it produces an error when no content set', function(assert) {
//   this.render(hbs`{{generic-input-field}}`);
//   assert.equal(this.$().text().trim(), '');
//   this.render(hbs`
//     {{#generic-input-field}}
//       template block text
//     {{/generic-input-field}}
//   `);
//   assert.equal(this.$().text().trim(), 'template block text');
// });

//TODO test selectionLimit top level

//TODO test selectionLimit nested items

//TODO test expand top level

//TODO test expand nested items

//TODO test collapseLimit top level

//TODO test collapseLimit nested items

import Ember from 'ember';
import layout from '../templates/components/generic-field';
const { A, Component, computed } = Ember;

const get = (object, key) => object.get ? object.get(key) : object[key];

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['generic-field'],
  optionChildrenPath: 'children',
  optionLabelPath: 'label',
  optionValuePath: 'id',
  limit: 0,

  filteredContent: computed('selections', 'content', function() {
    const content = this.get('content');
    const optionValuePath = this.get('optionValuePath');
    const selectedIds = this.get('selections').mapBy(`item.${optionValuePath}`);
    const limit = this.get('limit');

    if (limit && selectedIds.length >= limit) {
      return [];
    }

    return content.filter((item) =>{
      return selectedIds.indexOf(get(item, optionValuePath)) === -1;
    });
  }),

  selections: computed('tree', function() {
    const tree = this.get('tree');
    const content = this.get('content');
    const optionChildrenPath = this.get('optionChildrenPath');
    const optionValuePath = this.get('optionValuePath');
    let selections = Object.keys(tree);
    selections = selections.map((id) => content.findBy(optionValuePath, +id));
    selections = selections.map((item) => {
      return {
        item,
        content: A(get(item, optionChildrenPath)),
        tree: tree[get(item, optionValuePath)]
      };
    });

    return A(selections);

  }),

  actions: {
    addToSelection(item) {
      const optionValuePath = this.get('optionValuePath');
      this.get('addSelection')({ [get(item, optionValuePath)]: {} }, this.get(`parent.${optionValuePath}`));
    },
    addSelection(hash, id) {
      const optionValuePath = this.get('optionValuePath');
      this.get('addSelection')({ [id]: hash }, this.get(`parent.${optionValuePath}`));
    },
    removeFromSelection(item) {
      const optionValuePath = this.get('optionValuePath');
      this.get('removeSelection')([get(item, optionValuePath)], this.get(`parent.${optionValuePath}`));
    },
    removeSelection(ids, id) {
      const optionValuePath = this.get('optionValuePath');
      this.get('removeSelection')([id, ...ids], this.get(`parent.${optionValuePath}`));
    }
  }
});

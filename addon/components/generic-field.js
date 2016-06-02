import Ember from 'ember';
import layout from '../templates/components/generic-field';
const { computed, A } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['generic-field'],
  optionChildrenPath: 'children',
  optionLabelPath: 'label',
  optionValuePath: 'id',
  limit: 0,

  filteredContent: computed('selections', 'content', function() {
    const content = this.get('content');
    const selectedIds = this.get('selections').mapBy('item.id');
    const limit = this.get('limit');

    if (limit && selectedIds.length >= limit) {
      return [];
    }

    return content.filter((item) => selectedIds.indexOf(item.id) === -1);
  }),

  selections: computed('tree', function() {
    const tree = this.get('tree');
    const content = this.get('content');
    let selections = Object.keys(tree);
    selections = selections.map((id) => content.findBy('id', +id));
    selections = selections.map((item) => {
      return { item, content: A(item.children), tree: tree[item.id] };
    });

    return A(selections);

  }),

  actions: {
    addToSelection(item) {
      this.get('addSelection')({ [item.id]: {} }, this.get('parent.id'));
    },
    addSelection(hash, id) {
      this.get('addSelection')({ [id]: hash }, this.get('parent.id'));
    },
    removeFromSelection(item) {
      this.get('removeSelection')([item.id], this.get('parent.id'));
    },
    removeSelection(ids, id) {
      this.get('removeSelection')([id, ...ids], this.get('parent.id'));
    }
  }
});

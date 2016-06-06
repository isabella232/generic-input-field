import Ember from 'ember';
import layout from '../templates/components/generic-field';
const { A, Component, computed, set } = Ember;

const get = (object, key) => { // TODO: use Ember.get
  return object.get ? object.get(key) : object[key];
};

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
    const limit = this.get('limit');
    const optionValuePath = this.get('optionValuePath');
    let selectedIds = this.get('selections').map((s) => {
      if (s.collapsed) {
        const rec = (array, hash) => {
          const keys = Object.keys(hash);
          if (keys.length === 0) { return []; }
          return array.concat(keys).concat(...keys.map(key => rec([], hash[key])));
        };
        return rec([], s.tree);
      } else {
        const id = get(s.item, optionValuePath);
        console.log(id);
        return id;
      }
    });

    selectedIds = [].concat.apply([], selectedIds).map(x => +x);

    if (limit && selectedIds.length >= limit) {
      return [];
    }

    console.log(selectedIds);
    return content.filter((item) =>{
      return selectedIds.indexOf(get(item, optionValuePath)) === -1;
    });
  }),

  selections: computed('tree', function() {
    const tree = this.get('tree');
    const content = this.get('content');
    const optionChildrenPath = this.get('optionChildrenPath');
    const optionValuePath = this.get('optionValuePath');
    const optionLimitPath = this.get('optionLimitPath');
    let selections = Object.keys(tree);
    selections = selections.map((id) => content.findBy(optionValuePath, +id));
    selections = selections.map((item) => {

      if (item) {
        return {
          item,
          limit: get(item, optionLimitPath),
          content: A(get(item, optionChildrenPath)),
          tree: tree[get(item, optionValuePath)]
        };
      } else {
        return {
          collapsed: true,
          tree: tree.collapsed,
          count: Object.keys(tree.collapsed).length
        };
      }

    });

    return A(selections);

  }),

  actions: {
    loadMore(item) {
      this.get('loadMore')(item);
    },
    addToSelection(item) {
      set(item, 'expand', true);
      const optionValuePath = this.get('optionValuePath');
      this.get('addSelection')({ [get(item, optionValuePath)]: {} }, this.get(`parent.${optionValuePath}`));
    },
    addSelection(hash, id) {
      const optionValuePath = this.get('optionValuePath');
      this.get('addSelection')({ [id]: hash }, this.get(`parent.${optionValuePath}`));
    },
    removeTreeFromSelection(tree) {
      const rec = (array, hash) => {
        const keys = Object.keys(hash);
        if (keys.length === 0) {
          return [];
        }

        return array.concat(keys).concat(...keys.map(key => rec([], hash[key])));
      };

      const ids = rec([], tree);
      this.get('removeTreeSelection')(ids);
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

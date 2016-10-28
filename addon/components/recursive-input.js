import Ember from 'ember';
import layout from '../templates/components/recursive-input';
const { A, Component, computed, set, get } = Ember;

let oldQueryString;

export default Component.extend({
  layout,
  tagName: '',

  filteredContent: computed('selections', 'content.length', 'queryString', function() {
    const queryString = this.get('queryString');
    const content = this.get('content');
    const selectionLimit = this.get('selectionLimit');
    const optionValuePath = this.get('optionValuePath');
    const optionLabelPath = this.get('optionLabelPath');
    let selectedIds = this.get('selections').map((s) => {
      if (s.collapsed) {
        const buildSelectionRecursively = (array, hash) => {
          const keys = Object.keys(hash);
          if (keys.length === 0) { return []; }
          return array.concat(keys).concat(...keys.map(key => {
            return buildSelectionRecursively([], hash[key]);
          }));
        };
        return buildSelectionRecursively([], s.tree);
      } else {
        return get(s.item, optionValuePath);
      }
    });

    selectedIds = [].concat.apply([], selectedIds);

    if (selectionLimit && selectedIds.length >= selectionLimit) {
      return [];
    }

    const result = content.filter((item) => {
      const notSelected = selectedIds.indexOf(get(item, optionValuePath)) === -1;
      const matchesLabel = !!(get(item, optionLabelPath) || '').match(queryString);
      const matchesId = !!get(item, optionValuePath).toString().match(`^${queryString}`);
      return notSelected && ( matchesLabel || matchesId);
    });

    return result;
  }),

  selections: computed('tree', function() {
    const tree = this.get('tree');
    const content = this.get('content');
    const optionChildrenPath = this.get('optionChildrenPath');
    const optionValuePath = this.get('optionValuePath');
    const optionSelectionLimitPath = this.get('optionSelectionLimitPath');
    const optionCollapseLimitPath = this.get('optionCollapseLimitPath');
    let selections = Object.keys(tree);
    selections = selections.map((id) => content.findBy(optionValuePath, id));
    selections = selections.map((item) => {

      if (item) {
        return Ember.Object.create({
          item,
          selectionLimit: get(item, optionSelectionLimitPath),
          collapseLimit: get(item, optionCollapseLimitPath),
          content: A(get(item, optionChildrenPath)),
          tree: tree[get(item, optionValuePath)]
        });
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
    selectGenericField(item) {
      const optionLabelPath = this.get('optionLabelPath');
      const optionValuePath = this.get('optionValuePath');
      Ember.$(`.generic-field.${get(item, optionValuePath)} > input`).focus()
      return;
    },

    searchMore(parent, queryString) {
      if (queryString !== oldQueryString && queryString !== '') {
        oldQueryString = queryString;
        this.get('loadMore')(parent, queryString);
      }
    },
    loadMore(parent) {
      this.get('loadMore')(parent);
    },
    addToSelection(item) {
      set(item, this.get('optionExpandPath'), true);
      const optionValuePath = this.get('optionValuePath');
      this.get('addSelection')({ [get(item, optionValuePath)]: {} }, this.get(`parent.${optionValuePath}`));
    },
    addSelection(hash, id) {
      const optionValuePath = this.get('optionValuePath');
      this.get('addSelection')({ [id]: hash }, this.get(`parent.${optionValuePath}`));
    },
    removeTreeFromSelection(tree) {
      const parentId = this.get('parent.id');
      const buildSelection = (array, hash) => {
        const keys = Object.keys(hash);
        if (keys.length === 0) {
          return [];
        }
        return array.concat(keys).concat(...keys.map(key => buildSelection([], hash[key])));
      };

      const ids = buildSelection([], tree);
      ids.forEach((id) => this.get('removeSelection')([id], parentId));
    },
    removeFromSelection(item) {
      const optionValuePath = this.get('optionValuePath');
      this.get('removeSelection')([get(item, optionValuePath)], this.get(`parent.${optionValuePath}`));
    },
    removeSelection(ids, id) {
      const optionValuePath = this.get('optionValuePath');
      this.get('removeSelection')([id, ...ids], this.get(`parent.${optionValuePath}`));
    },
    setActive(target, state) {
      this.set(`${target}IsActive`, state);
    }
  }
});

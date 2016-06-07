import Ember from 'ember';
const { A, Controller } = Ember;

const c2 = { id: 2, label: 'a1', children: [] };
const c3 = { id: 3, label: 'a2', children: [] };
const c5 = { id: 5, label: 'b1', children: [] };

const c4 = { id: 4, label: 'B',  children: [c5] };
const c6 = { id: 6, label: 'C',  children: [] };
const c7 = { id: 7, label: 'D',  children: [], expand: true };
const c1 = { id: 1, label: 'A',  children: [c2, c3, c6, c7] };

const c8 = { id: 8, label: 'd1', children: [] };

c2.parent = c1; c3.parent = c1; c5.parent = c1;

c7.loadMore = () => {
  c7.children.push(c8);
  return [c8];
};

export default Controller.extend({

  myInput: A([c2, c3, c6, c7]),
  myAll: A([c1,c2,c3,c6,c7]),

  actions: {
    searchMore(queryString, item) {
      if (!item) {
        this.get('myAll').addObject({
          id: Math.random(),
          label: `some ${queryString} some`,
          children: []
      });
      }
    },

    loadMore(item) {

      if (item) {
        if (item.loadhMore) {
          const more = item.loadMore();
          this.get('myAll').addObjects(more);
        }
      } else {
        this.get('myAll').addObjects([c4, c5]);
      }
    },

    addMySelection(item) {
      this.get('myInput').addObject(item);
    },

    removeMySelection(item) {
      this.get('myInput').removeObject(item);
      this.get('myInput').removeObjects(item.children);
    }
  }

});

import Ember from 'ember';
const { A, Controller } = Ember;

const gc1 = { id: 9, label: 'gc_1', children: [] };
const gc2 = { id: 10, label: 'gc_2', children: [] };
const gc3 = { id: 11, label: 'gc_3', children: [] };
const gc4 = { id: 12, label: 'gc_4', children: [] };

const B_b1_b2 = { id: 13, label: 'bb_1', children: [] };

const c2 = { id: 2, label: 'a1', children: [gc1,gc2,gc3,gc4] }; //TODO - get limits to work on this level
// const c2 = { id: 2, label: 'a1', children: [] };
const c3 = { id: 3, label: 'a2', children: [] };
const c5 = { id: 5, label: 'b1', children: [B_b1_b2] };

const c4 = { id: 4, label: 'B',  children: [c5] };
const c6 = { id: 6, label: 'C',  children: [] };
const c7 = { id: 7, label: 'D',  children: [], expand: true };
const c1 = { id: 1, label: 'A',  limit: 5, children: [c2, c3, c6, c7] };

const c8 = { id: 8, label: 'd1', children: [] };

c2.parent = c1; c3.parent = c1; c5.parent = c1;

c7.loadMore = (queryString) => {
  A(c7.children).addObject(c8);
  const x = { id: Math.random(), label: `foo ${queryString} foo`, children: [] };
  const result = [c8];
  if (queryString && queryString.length) {
    A(c7.children).addObject(x);
    result.push(x);
  }
  return result;
};

export default Controller.extend({

  myInput: A([c2, c3, c6, c7]),
  myAll: A([c1,c2,c3,c6,c7,gc1,gc2,gc3,gc4]),

  actions: {

    loadMore(item, queryString) {
      if (item) {
        if (item.loadMore) {
          const more = item.loadMore(queryString);
          this.get('myAll').addObjects(more);
        }
      } else {
        this.get('myAll').addObjects([c4, c5, B_b1_b2]);
        if (queryString && queryString.length) {
          this.get('myAll').addObject({ id: Math.random(), label: `some ${queryString} some`, children: [] });
        }
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

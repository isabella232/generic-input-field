import Ember from 'ember';
import layout from '../templates/components/v-2';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  optionValuePath: 'id',
  optionLabelPath: 'label',
  optionChildrenPath: 'children',

  sanitizedContent: null,
  content: null, // <- mandatory and array
  selections: null, // <- mandatory and array
  limit: 0,

  init() {

    this.set('sanitizedContent', A());
    this.set('loadedYet',false);

    schedule('afterRender', this, () => {

      const content = this.get('content');
      if (!content) {
        throw 'content must be set for generic-input-field';
      }
      const sanitizedContent = this.get('sanitizedContent');
      const isPlainArray = typeof content.length === 'number';
      const isPlainPromiseArray = content[0] && content[0].constructor === Promise;
      const isPromise = content.constructor === Promise;
      const pushItems = (content) => {
        const isPromise = content.get('firstObject.constructor') === Promise;
        if (isPromise) {
          Promise.all(content).then((rc) => sanitizedContent.addObjects(rc));
        } else {
          sanitizedContent.addObjects(content);
        }
      };

      if (isPlainArray && !isPlainPromiseArray){
        console.log('graph-pos:',this.get('position'),' if (isPlainArray && !isPlainPromiseArray)')
        this.set('loadedYet',content.length !== 0);
        sanitizedContent.addObjects(content);
        return;
      }

      if (isPlainArray && isPlainPromiseArray){
        console.log('graph-pos:',this.get('position'),' if (isPlainArray && isPlainPromiseArray)')
        this.set('loadedYet',true);
        Promise.all(content).then((rc) => {
          console.log('graph-pos:',this.get('position'),rc)
          sanitizedContent.addObjects(rc)
          if(!this.get('parentLoaded')){
            const graphData = this.get('graph')[this.get('position')]
            this.get('loadParent')(graphData)
          }
        });
        return;
      }

      if (isPromise){
        content.then((x) => { sanitizedContent.addObjects(x); });
        return;
      }

      if (!isPromise && content.isLoaded) {
        pushItems(content);
        return;
      }

      if (!isPromise && !content.isLoaded) {
        content.then(pushItems);
        return;
      }
    });

    this._super();
  },

  filteredContent: computed.setDiff('sanitizedContent', 'selections'),

  withinLimit: computed('limit', 'selections.length', function() {
    const limit = this.get('limit');
    const selectionLength = this.get('selections.length');
    return limit === 0 || selectionLength < limit;
  }),

  actions: {
    addToSelection(item) {
      const withinLimit = this.get('withinLimit');
      const valuePath = this.get('optionValuePath');
      if (withinLimit) {
        this.get('addSelection')(item);
      }
    },

    removeFromSelection(item) {
      this.get('removeSelection')(item);
    },

    loadContent(dependencyData){
      console.log('loadContent:',dependencyData);
      const promise = this.get('loadMore')(dependencyData);
      promise.then(r => {
        console.log('loadContent-result:',r);
        this.get('sanitizedContent').addObjects(r);
      })
    }
  }

});

import Ember from 'ember';
import layout from '../templates/components/generic-input-field';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  sanitizedContent: null,
  content: null, // <- mandatory and array
  selections: null, // <- mandatory and array

  init() {

    this.set('sanitizedContent', A());

    schedule('afterRender', this, () => {

      const content = this.get('content');
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
        sanitizedContent.addObjects(content);
        return;
      }

      if (isPlainArray && isPlainPromiseArray){
        Promise.all(content).then((rc) => sanitizedContent.addObjects(rc));
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

  actions: {
    addToSelection(item) {
      this.get('addSelection')(item);
    },

    removeFromSelection(item) {
      this.get('removeSelection')(item);
    }
  }

});

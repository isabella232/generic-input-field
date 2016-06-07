import Ember from 'ember';
import layout from '../templates/components/resolve-content';
const { A, Component, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  content: null, // <- mandatory and array

  init() {
    this.set('sanitizedContent', A());
    this.sanitize();
    this._super();
  },

  contentChanged1: Ember.observer('content.[]', function() {
    this.get('sanitizedContent').clear();
    this.sanitize();
    const content = this.get('content');
    console.log('content len:',content.get('length'));
    console.log('content -:',content);
  }),

  contentChanged2: Ember.observer('sanitizedContent.[]', function() {
    const sanitizedContent = this.get('sanitizedContent');
    console.log('sanitizedContent len:',sanitizedContent.get('length'));
    console.log('sanitizedContent -:',sanitizedContent);
  }),

  sanitize() {
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

  }


});

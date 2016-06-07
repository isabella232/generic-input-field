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

  contentChanged: Ember.observer('content.[]', function() {
    this.sanitize().then(() => {
      let newArray = this.get('sanitizedContent');
      newArray = A(Array.from(newArray));
      this.set('sanitizedContent', newArray);
    });
  }),

  sanitize() {
    return new Promise((resolve) => {
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
          resolve();
        }

        if (isPlainArray && isPlainPromiseArray){
          Promise.all(content).then((rc) => sanitizedContent.addObjects(rc));
          resolve();
        }

        if (isPromise){
          content.then((x) => { sanitizedContent.addObjects(x); });
          resolve();
        }

        if (!isPromise && content.isLoaded) {
          pushItems(content);
          resolve();
        }

        if (!isPromise && !content.isLoaded) {
          //content.then(pushItems);  TODO: investigate which line + add TESTS
          pushItems(content);     //  TODO: investigate which line
          resolve();
        }
      });
    });

  }


});

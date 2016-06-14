import Ember from 'ember';
import layout from '../templates/components/resolve-content';
const { A, Component, run: { schedule }, RSVP: { Promise }, ArrayProxy } = Ember;
const esPromise = window.Promise;

export default Component.extend({
  tagName: '',
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
        const isArrayWithEmberPromises = content[0] && content[0].constructor === Promise;
        const isEmberPromise = content.constructor.toString() === Promise.toString();
        const isES6Promise = content.constructor.toString() === esPromise.toString();
        const isLoadedDefined = typeof content.isLoaded !== 'undefined'
        const isArrayProxy = content.constructor.toString() === 'Ember.ArrayProxy'

        const pushItems = (content) => {
          const isPromise = content.get('firstObject.constructor') === Promise;
          if (isPromise) {
            Promise.all(content).then((rc) => sanitizedContent.addObjects(rc));
          } else {
            sanitizedContent.addObjects(content);
          }
        };

        if (isPlainArray && !isArrayWithEmberPromises){
          sanitizedContent.addObjects(content);
          resolve();
        }

        if (isPlainArray && isArrayWithEmberPromises){
          Promise.all(content).then(rc => {
            sanitizedContent.addObjects(rc)
            resolve();
          });
        }

        if (isEmberPromise){
          content.then((x) => { sanitizedContent.addObjects(x); });
          resolve();
        }

        //check for subclasses of ArrayProxy still untested
        if (!isEmberPromise && isLoadedDefined && content.isLoaded){
          pushItems(content);
          resolve();
        }

        //check for subclasses of ArrayProxy stil untested
        if (!isEmberPromise && isLoadedDefined && !content.isLoaded){
          content.then(pushItems);
          resolve();
        }

        if(isArrayProxy){
          pushItems(content);
          resolve();
        }
      });
    });

  }


});

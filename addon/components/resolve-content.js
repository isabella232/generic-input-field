import Ember from 'ember';
import layout from '../templates/components/resolve-content';
const { A, Component, run: { schedule }, RSVP: { Promise } } = Ember;
// const esPromise = window.Promise;

export default Component.extend({
  tagName: '',
  layout,

  content: null, // <- mandatory and array

  init() {
    // console.log('resolve-content onInit_before:', this.get('content'), this.get('test'));
    this.set('sanitizedContent', A());
    this.sanitize();
    this._super();
    // console.log('resolve-content onInit_after:', this.get('content'), this.get('test'));
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

        // console.log('resolve-content afterRender:', this.get('content'), this.get('test'));

        const content = this.get('content');
        if (!content) {
          throw 'content must be set for generic-input-field';
        }
        const sanitizedContent = this.get('sanitizedContent');
        const isPlainArray = typeof content.length === 'number';
        const isArrayWithEmberPromises = content[0] && content[0].constructor === Promise;
        const isEmberPromise = content.constructor.toString() === Promise.toString();
        // const isES6Promise = content.constructor.toString() === esPromise.toString();
        const isLoadedDefined = typeof content.isLoaded !== 'undefined';
        const isArrayProxy = content.constructor.toString() === 'Ember.ArrayProxy';
        const isDSPromiseArray = content.constructor.toString() === 'DS.PromiseArray';

        const pushItems = (content) => {
          const isPromise = content.get('firstObject.constructor') === Promise;
          if (isPromise) {
            Promise.all(content).then((rc) => sanitizedContent.addObjects(rc));
          } else {
            sanitizedContent.addObjects(content);
          }
        };

        if (isPlainArray && !isArrayWithEmberPromises && !isDSPromiseArray){
          sanitizedContent.addObjects(content);
          resolve();
        }

        if (isPlainArray && isArrayWithEmberPromises && !isDSPromiseArray){
          Promise.all(content).then(rc => {
            sanitizedContent.addObjects(rc);
            resolve();
          });
        }

        if(isDSPromiseArray){
          content.then(rc => {
            sanitizedContent.addObjects(rc);
            resolve();
          });
        }

        if (isEmberPromise){
          content.then((x) => { sanitizedContent.addObjects(x); });
          resolve();
        }

        if (!isEmberPromise && isLoadedDefined && content.isLoaded){
          pushItems(content);
          resolve();
        }

        // check for subclasses of ArrayProxy stil untested
        // we now check for DSPromiseArray, so we could remove comment..
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

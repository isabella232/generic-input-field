import Ember from 'ember';
import layout from '../templates/components/generic-input-field';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  init() {

    this.set('sanitizedContent', A());

    schedule('afterRender', this, () => {

      const content = this.get('content');
      const sanitizedContent = this.get('sanitizedContent');
      const isPlainArray = typeof content.length == 'number'
      const isPlainPromiseArray = content[0].constructor === Promise;

      if(isPlainArray && !isPlainPromiseArray){
        sanitizedContent.addObjects(content);
        return
      }

      if(isPlainArray && isPlainPromiseArray){
        Promise.all(content).then((rc) => {sanitizedContent.addObjects(rc);});
        return
      }

      const isPromise = content.constructor === Promise;
      if(isPromise){
        content.then((x) => { sanitizedContent.addObjects(x); });
        return
      }

      if(!isPromise){
        if (content.get) { // <- this check sucks
          if (content.isLoaded) {
            const isPromise = content.get('firstObject.constructor') === Promise;
            if (isPromise) {
              Promise.all(content).then((rc) => {sanitizedContent.addObjects(rc);});
            } else {
              sanitizedContent.addObjects(content);
            }
          } else {
            content.then((arrayProxy) => {
              const isPromise = arrayProxy.get('firstObject.constructor') === Promise;
              if (isPromise) {
                Promise.all(arrayProxy).then((rc) => {sanitizedContent.addObjects(rc);});
              } else {
                sanitizedContent.addObjects(arrayProxy);
              }
            });
          }
        }
      }

    });

    this._super();
  },

  sanitizedContent: null,

});

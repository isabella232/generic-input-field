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
      const isPromise = content.constructor === Promise;

      if (isPromise) {
        content.then((x) => { sanitizedContent.addObjects(x); });
      } else {

        if (content.get) { // <- this check sucks

          if (content.isLoaded) {

            const isPromise = content.get('firstObject.constructor') === Promise;

            if (isPromise) {
              Promise.all(content).then((resolvedContent) => {
                sanitizedContent.addObjects(resolvedContent);
              });
            } else {
              sanitizedContent.addObjects(content);
            }

          } else {

            content.then((arrayProxy) => {

              const isPromise = arrayProxy.get('firstObject.constructor') === Promise;

              if (isPromise) {
                Promise.all(arrayProxy).then((resolvedContent) => {
                  sanitizedContent.addObjects(resolvedContent);
                });
              } else {
                sanitizedContent.addObjects(arrayProxy);
              }

            });

          }


        } else {

          console.log('not resolving promise');
          const isPromise = content[0].constructor === Promise;

          if (isPromise) {
            Promise.all(content).then((resolvedContent) => {
              sanitizedContent.addObjects(resolvedContent);
            });
          } else {
            sanitizedContent.addObjects(content);
          }

        }

      }

    });

    this._super();
  },

  sanitizedContent: null,

});

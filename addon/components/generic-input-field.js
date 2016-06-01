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
        console.log('resolving promise');
        content.then((x) => { sanitizedContent.addObjects(x) });
      } else {
        const asdf = Ember.ArrayProxy.create({ content });

        console.log('not resolving promise');
        console.log(asdf);
        const isPromise = asdf.get('firstOjbect').constructor === Promise;

        if (isPromise) {
          Promise.all(asdf).then((resolvedContent) => {
            sanitizedContent.addObjects(resolvedContent);
          });
        } else {
          sanitizedContent.addObjects(asdf);
        }
      }

    });

    this._super();
  },

  sanitizedContent: null,

});

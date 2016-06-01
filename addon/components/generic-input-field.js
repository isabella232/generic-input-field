import Ember from 'ember';
import layout from '../templates/components/generic-input-field';
const { Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  init() {
    schedule('afterRender', this, () => {
      const content = this.get('content');
      console.log(content);
    });

    this._super();
  },

  sanitizedContent: computed('content', function() {
    const content = this.get('content');

    const isPromise = content.constructor === Promise;
    console.log(isPromise);

    if (isPromise) {
    }

    return content;
  })

});

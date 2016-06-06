import Ember from 'ember';
import layout from '../templates/components/resolve-content';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  content: null, // <- mandatory and array

  init() {

    this.set('isLoading', true);
    this.set('sanitizedContent', A());
    schedule('afterRender', this, () => {

      debugger;
      const content = this.get('content');
      if (!content) {
        throw 'content must be set for generic-input-field';
      }
      debugger;
      const sanitizedContent = this.get('sanitizedContent');
      const isPlainArray = typeof content.length === 'number';
      const isPlainPromiseArray = content[0] && content[0].constructor === Promise;
      const isPromise = content.constructor === Promise;

      debugger;

      console.log('foo');
      const pushItems = (content) => {
        const isPromise = content.get('firstObject.constructor') === Promise;
        console.log('ASDF',isPromise);
        if (isPromise) {
          Promise.all(content).then((rc) => {
            sanitizedContent.addObjects(rc)
            this.set('isLoading', false);
          });
        } else {
          sanitizedContent.addObjects(content);
          this.set('isLoading', false);
        }
      };

      if (isPlainArray && !isPlainPromiseArray){
        console.log('isPlainArray && !isPlainPromiseArray){',content)
        sanitizedContent.addObjects(content);
        this.set('isLoading', false);
        this._super();
        return;
      }

      console.log(isPlainArray, isPlainPromiseArray);
      if (isPlainArray && isPlainPromiseArray){
        console.log('isPlainArray && isPlainPromiseArray){')
        Promise.all(content).then((rc) => {
          sanitizedContent.addObjects(rc)
          this.set('isLoading', false);
        });
        this._super();
        return;
      }

      if (isPromise){
        console.log('isPromise){')
        content.then((x) => {
          sanitizedContent.addObjects(x);
          this.set('isLoading', false);
        });
        this._super();
        return;
      }

      if (!isPromise && content.isLoaded) {
        console.log('!isPromise && content.isLoaded) {',content)
        pushItems(content);
        this._super();
        return;
      }

      if (!isPromise && !content.isLoaded) {
        console.log('!isPromise && !content.isLoaded) {',content)
        content.then(pushItems);
        this._super();
        return;
      }
    });

    this.set('isLoading', false);
    this._super();
  }

});

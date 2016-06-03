import Ember from 'ember';
import layout from '../templates/components/v-3';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  optionValuePath: 'id',
  optionLabelPath: 'label',
  optionChildrenPath: 'children',

  sanitizedContent: null,
  content: null, // <- mandatory and array
  selections: null, // <- mandatory and array
  limit: 0,

  init() {
    this.set('sanitizedContent', A());
    this.set('selections', A());
    this.set('loadedYet',false);
    this.set('renderedChildren',false);
    schedule('afterRender', this, () => {
      if(this.get('lazyNested')){
        Promise.all(this.get('lazyNested')).then(nest => {
          console.log('lazyNested resolved:',nest);
          const selections = nest[0];
          const content = nest[1];
          console.log('lazyNested resolved:',selections,content);
          this.get('sanitizedContent').addObjects(content);
          this.get('selections').addObjects(selections);
        })
      }
    });
    this._super();
  },

  filteredContent: computed.setDiff('sanitizedContent', 'selections'),

  withinLimit: computed('limit', 'selections.length', function() {
    const limit = this.get('limit');
    const selectionLength = this.get('selections.length');
    return limit === 0 || selectionLength < limit;
  }),

  renderChildren(){
    console.log('graph-pos:',this.get('position'),'reRenderingChildren');
    const graphData = this.get('graph')[this.get('position')];
    this.get('getAll')(graphData).then(r => {
      this.get('selections').addObjects(r);
      console.log('graph-pos:',this.get('position'),'reRenderedChildren');
      this.set('renderedChildren', true)
    })
  },

  renderParent(){

  },

  actions: {
    addToSelection(item) {
      const withinLimit = this.get('withinLimit');
      const valuePath = this.get('optionValuePath');
      if (withinLimit) {
        this.get('addSelection')(item);
      }
    },

    removeFromSelection(item) {
      this.get('removeSelection')(item);
    },

    loadContent(dependencyData){
      console.log('loadContent:',dependencyData);
      const promise = this.get('loadMore')(dependencyData);
      promise.then(r => {
        console.log('graph-pos:',this.get('position'),'loadContent-results:',r);
        this.get('sanitizedContent').addObjects(r);
        this.reRenderChildren()
        if(!this.get('parentLoaded')){
          const graphData = this.get('graph')[this.get('position')];
          if(this.get('loadParent')){
            this.get('loadParent')(graphData);
          }else{
            this.set('rootReached', true);
            console.log('graph-pos:','rootReached');
          }

        }
      })
    }
  }

});

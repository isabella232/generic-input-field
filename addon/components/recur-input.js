import Ember from 'ember';
import layout from '../templates/components/recur-input';
const { A, Component, computed, run: { schedule }, RSVP: { Promise } } = Ember;

export default Component.extend({
  layout,

  optionValuePath: 'id',
  optionLabelPath: 'label',
  optionChildrenPath: 'children',
  renderingFromLeaves: computed.equal('startAt','leaves'),
  renderingFromRoot: computed.equal('startAt','root'),
  loadedItems: A(),
  completeTree: A(),

  items: null,
  sanitizedContent: computed.alias('currentBranch.all'),
  selections: computed.alias('currentBranch.selections'),
  filteredContent: computed.setDiff('sanitizedContent', 'selections'),

  init() {

    if(this.get('branchRef')){
      this.set('currentBranch',this.get('branchRef'));
    }

    schedule('afterRender', this, () => {
      if(this.get('renderingFromRoot')){
      }
      if(this.get('renderingFromLeaves')){
        console.log('renderingFromLeaves:',this.get('branchRef'))
        const leaves = this.get('items');
        this.recurseUp(leaves);
      }
    });
    this._super();
  },

  matchingChildren: computed('loadedItems.[]','item.id',function(){
    const nodePassed = this.get('item')
    if(!nodePassed){
      return A();
    }else{
      const path = this.get('options.parentPath');
      const id = nodePassed.id;
      return this.get('loadedItems').findBy(path,id);
    }
  }),

  //only walks selections
  recurseUp(nodes){
    const parentIds = nodes.map(i => i[this.get('options.parentPath')]);
    const hasParents = parentIds.every(x => x !== null);
    if(hasParents){
      const parentIdsAsSet = new Set(parentIds);
      if(this.get('options.renderFrom') === 'set'){
        const set = this.get('options.set');
        const parentNodes = [...set].filter(x => parentIdsAsSet.has(x.id));
        this.buildTree(parentNodes,nodes)
        //also add the siblings of all parent here
        this.recurseUp(parentNodes)
      }
      // see lazy_load for idea regarding this
      if(this.get('options.renderFrom') === 'promise'){}
    }else{
      this.set('currentBranch',Ember.Object.create({
        selections: this.get('completeTree')
      }));
    }
  },

  // we can do sibling loading here
  // so our selection might have been
  // parent(1) -> children(1,4,5,8,10)
  // so we still need siblings (2,3,6,7,9)
  // we use branchId to identify parent
  // we can use siblings to filter and only return the "OR" set
  buildTree(parents, selectedSiblings){
    // flat array for testing
    this.get('loadedItems').addObjects(parents);
    this.get('loadedItems').addObjects(selectedSiblings);
    //tree building follows
    parents.forEach(parent => {
      if(this.get('options.renderFrom') === 'set'){
        const set = this.get('options.set');
        const path = this.get('options.parentPath');
        const allSiblings = [...set].filter(x => parent.id == x[path]);
        parent.selections = selectedSiblings;
        parent.all = allSiblings;
        this.resolvePlacementUp(parent);
      }
      // see lazy_load for idea regarding this
      if(this.get('options.renderFrom') === 'promise'){}
    })
  },
  resolvePlacementUp(newBranch){
    const tree = this.get('completeTree');
    const matchingBranches = tree.filterBy(this.get('options.parentPath'),newBranch.id);
    if(matchingBranches.length === 0){
      newBranch.branches = [];
      tree.addObject(newBranch);
      return;
    }else{
      tree.forEach(branchInTree => {
        //because we are resolving up
        //the current branches will also be below the newBranches
        if(branchInTree[this.get('options.parentPath')] == newBranch.id){
          //chop off branch
          tree.removeObject(branchInTree)
          //glue back to new branch
          branchInTree.branches.push(branchInTree)
          //glue new branch to tree
          tree.addObject(newBranch)
        }
      });
    }
  },

  //todo adjust recurseUp
  recurseDown(){},
  //todo  adjust resolvePlacementUp
  resolvePlacementDown(newBranch){}
});

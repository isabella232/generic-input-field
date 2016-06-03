this.get('options.promise')(parentIdsAsSet).then(parentNodes => {
  console.log('renderFrom-promise:',parentNodes)
  this.buildTree(parentNodes,nodes)
  this.recurseUp(parentNodes)
  //or w/e
})


//other old stuff
  // init() {

  //   this.set('all',true);
  //   this.set('allLoaded',false);

  //   const currentNode = this.get('item');
  //   const currentSelections = this.get('selections');
  //   const currentSiblings = this.get('items');

  //   schedule('afterRender', this, () => {
  //     if(this.get('renderingFromRoot') && currentNode){
  //       // this.log('loadedItems:',this.get('loadedItems'))
  //       // this.log('currentNode:',currentNode);
  //       // const childrenPassed = this.get('items');
  //       // const children = childrenPassed ? childrenPassed : this.get('matchingChildren');
  //       // this.log('renderingFromRoot:',children)
  //       // const parentId = currentNode[this.get('options.parentPath')];
  //       // const atTopMostRoot = parentId === null
  //       // this.log('atTopMostRoot?:',atTopMostRoot);
  //       // if(atTopMostRoot){
  //       //   //this will render the final component
  //       // }else{
  //       //   //this will keep rendering to load all items
  //       //   // if()
  //       //   // this.set()
  //       // }
  //     }
  //     if(this.get('renderingFromLeaves')){
  //       const leaves = this.get('items');
  //       this.log('renderingFromLeaves',leaves)
  //       this.recurseUp(leaves);
  //     }
  //   });
  //   this._super();
  // }

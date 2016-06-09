/* jshint node: true */
'use strict';

// var stew = require('broccoli-stew');
// var mergeTrees = require('broccoli-merge-trees');
// var Funnel = require('broccoli-funnel');

module.exports = {

  name: 'generic-input-field',

  // treeForStyles: function() {
  //   return stew.mv('../../addon/styles', '.');
  // },
  // treeForStyles: function treeForStyles(tree) {
  //   var styleTrees = [];

  //   console.log()

  //   if (this.app.project.findAddonByName('ember-cli-sass')) {
  //     var sassTree = new Funnel('addon/styles', {
  //       destDir: 'generic-input-field'
  //     });
  //     styleTrees.push(sassTree);
  //   }

  //   if (tree) {
  //     styleTrees.push(tree);
  //   }

  //   return mergeTrees(styleTrees, { overwrite: true });
  // }
};

define([
  'underscore',
  'jquery',
  'backbone',
], function(_, $, Backbone) {

  var AppView = Backbone.View.extend({

    el: 'body',

    initialize: function() {
      console.log('hello world');
    }

  });

  return AppView;

});

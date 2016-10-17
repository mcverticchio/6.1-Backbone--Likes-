var Backbone = require('backbone');
var $ = require('jquery');

var Likes = Backbone.Model.extend({
  defaults: {
    'numlikes' : 0
  },

  initialize: function(){
    console.log('Likes');
    //WHAT DO WE PUT HERE?
  },

  increaseLikesButton: function(){
    this.set('numlikes', (this.get('numlikes') +1));
    $('.number').text(this.get('numlikes'));
    if (this.get('numlikes')=== 1){
      $('.likeDiv').html('Like');
    }else {
      $('.likeDiv').html('Likes');
    }
  }

});

module.exports = {
  'Likes' : Likes
};

// console.log("Hello World!");
var Likes = require('./models/like.js').Likes;
var $ = require('jquery');


var likes = new Likes();
// console.log(likes.get('numlikes'));
// console.log(likes.increaseLikesButton());

$('.likeButton').on('click', function(event){
  event.preventDefault();
  // console.log(likes.increaseLikesButton());
  likes.increaseLikesButton();
});

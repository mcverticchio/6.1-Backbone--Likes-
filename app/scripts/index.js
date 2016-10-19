// console.log("Hello World!");
var Likes = require('./models/like.js').Likes;
var $ = require('jquery');

//DOM Ready
var likes = new Likes();                      //instantiates the "Likes"
// console.log(likes.get('numlikes'));
// console.log(likes.increaseLikesButton());

$('.likeButton').on('click', function(e){
  e.preventDefault();
  // console.log(likes.increaseLikesButton());
  likes.increaseLikesButton();
});


//console.log(likes.toJSON)

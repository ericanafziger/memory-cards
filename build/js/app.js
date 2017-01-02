(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(back, number) {
  this.front;
  this.back = back;
  this.number = number;
}

Card.prototype.randomize = function(images) {
  var index = Math.random() * images.length;
  var random = images[Math.floor(index)];
  this.front = random;
  images.splice(index, 1);
};

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
var Card = require('./../js/card.js').cardModule;

var images = ['<img src="img/bm1.jpg">', '<img src="img/bm1.jpg">', '<img src="img/bm2.jpg">', '<img src="img/bm2.jpg">', '<img src="img/bm3.jpg">', '<img src="img/bm3.jpg">', '<img src="img/bm4.jpg">', '<img src="img/bm4.jpg">', '<img src="img/bm5.jpg">', '<img src="img/bm5.jpg">', '<img src="img/bm6.jpg">', '<img src="img/bm6.jpg">'];

$(document).ready(function(){
  var cards = [];
  for (i = 0; i < 12; i++) {
    var number = i;
    var back = '<img src="img/card-back.jpg">';
    var card = new Card(back, number);
    card.randomize(images);
    cards.push(card);
  }

  cards.forEach(function(card) {
    $('.cards').append("<div class='card-back" + card.number + "'>" + card.back + "</div>");
    $('.cards').append("<div class='card-front" + card.number + "'>" + card.front + "</div>" );
  });
});




$(document).ready(function(){
  var clicked = [];
  var frontClasses = [];
  var backClasses = [];
  $('[class^="card-back"]').click(function(){
    if (clicked.length <= 2) {
      var backClass = $(this).attr('class');
      var frontClass = backClass.replace('back', 'front');
      frontClasses.push(frontClass);
      backClasses.push(backClass);
      $('.' + frontClass).show();
      $('.' + backClass).hide();
      clicked.push($('.' + frontClass).html());
      if (clicked.length === 2) {
        if (clicked[0] === clicked[1]) {
          $('.' + frontClasses[0]).addClass('match');
          $('.' + frontClasses[1]).addClass('match');
          $('.' + backClasses[0]).addClass('match');
          $('.' + backClasses[1]).addClass('match');
          frontClasses = [];
          backClasses = [];
          clicked = [];
        } else {
          setTimeout(function() {
            $('[class^="card-front"]').not('.match').hide();
            $('[class^="card-back"]').not('.match').show();

          }, 800);
          // $('.' + frontClasses[0]).hide();
          // $('.' + frontClasses[1]).hide();
          // $('.' + backClasses[0]).show();
          // $('.' + backClasses[1]).show();
          // console.log(frontClasses);
          // function configureTimeout(frontClasses, backClasses) {
          //   setTimeout(function() {
          //     alert("this does a thing");
          //     console.log(frontClasses);
          //     $('.' + frontClasses[0]).hide();
          //     $('.' + frontClasses[1]).hide();
          //     $('.' + backClasses[0]).show();
          //     $('.' + backClasses[1]).show(); }, 1000);
          // }
          clicked = [];
          frontClasses = [];
          backClasses = [];
        }
      }
    }
  });

});

},{"./../js/card.js":1}]},{},[2]);

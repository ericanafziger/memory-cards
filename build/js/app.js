(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(back) {
  this.front;
  this.back = back;
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
    var back = '<img src="img/card-back.jpg">';
    var card = new Card(back);
    card.randomize(images);
    cards.push(card);
  }
  cards.forEach(function(card) {

    $('.container').append("<div class='card'>" + card.front + "</div>");
  });
});

},{"./../js/card.js":1}]},{},[2]);

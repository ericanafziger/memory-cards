(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(front, back) {
  this.front = front;
  this.back = back;
}

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
var Card = require('./../js/card.js').cardModule;

$(document).ready(function(){
  var cards = [];
  for (i = 0; i < 12; i++) {
    var front = "<img src='img/bm1.jpg'>";
    var back = '<img src="img/card-back.jpg">';
    var card = new Card(front, back);
    cards.push(card);
  }
  cards.forEach(function(card) {
    $('.container').append("<div class='card'>" + card.back + "</div>");
  });
});

},{"./../js/card.js":1}]},{},[2]);

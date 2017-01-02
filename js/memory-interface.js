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

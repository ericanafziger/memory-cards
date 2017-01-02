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

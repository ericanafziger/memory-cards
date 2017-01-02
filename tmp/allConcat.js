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
          frontClasses = [];
          backClasses = [];
          clicked = [];
        } else {
          $('.' + frontClasses[0]).hide();
          $('.' + frontClasses[1]).hide();
          $('.' + backClasses[0]).show();
          $('.' + backClasses[1]).show();
          clicked = [];
          frontClasses = [];
          backClasses = [];
        }
      }
    }
  });

});

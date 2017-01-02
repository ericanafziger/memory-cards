


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
          clicked = [];
          frontClasses = [];
          backClasses = [];
        }
      }
    }
  });

});

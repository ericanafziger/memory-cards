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
      console.log(clicked);
      alert('works');
      if (clicked.length === 2) {
        if (clicked[0] === clicked[1]) {
          clicked = [];
          alert('match');
        } else {
          alert('not a match');
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

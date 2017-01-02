function Card(back) {
  this.front;
  this.back = back;
}

Card.prototype.randomize = function(images) {
  var random = images[Math.floor(Math.random() * images.length)];
  this.front = random;
};

exports.cardModule = Card;

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

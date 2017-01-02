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

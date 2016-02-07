var util = require('util');

var Either = function(value) {
    this.value = value;
};

var Left = function(value) {
    Either.apply(this, arguments);
    this.isLeft = true;
};
util.inherits(Left, Either);
Left.prototype.map = function(f) {
    return new Left(f(this.value));
};
Left.prototype.toString = function() {
    return 'Left(' + this.value + ')';
};

var Right = function(value) {
    Either.apply(this, arguments);
    this.isRight = true;
};
util.inherits(Right, Either);
Right.prototype.map = function(f) {
    return new Right(f(this.value));
};
Right.prototype.toString = function() {
    return 'Right(' + this.value + ')';
};

var f = function(x) {
    return x * 5;
};

var left = new Left(5);
var right = new Right(42);

console.log('left.map(f):', left.map(f).toString()); // Left(25)
console.log('right.map(f):', right.map(f).toString()); // Right(210)

// ignore this
module.exports = {
    Either: Either,
    Left: Left,
    Right: Right
};

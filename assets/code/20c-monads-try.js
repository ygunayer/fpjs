var util = require('util'),
    base = require('./15-monads-either'),
    Either = base.Either,
    Left = base.Left,
    Right = base.Right;

var Success = function(value) {
    Left.apply(this, arguments);
};
util.inherits(Success, Left);
Success.prototype.toString = function() {
    return 'Success(' + this.value + ')';
};

var Failure = function(error) {
    this.error = error;
};
util.inherits(Success, Right);
Failure.prototype.toString = function() {
    return 'Failure(' + this.error.toString() + ')';
};

var Try = function(f) {
    this.fn = f;
};
Try.prototype.map = function(f) {
    try {
        var result = this.fn();
        f(new Success(result));
    } catch (err) {
        f(new Failure(err));
    }
};

var failingFunction = function() {
    x.y = 15; // this will throw an error
};

var succeedingFunction = function() {
    return 42;
};

var attempt1 = new Try(failingFunction);
var attempt2 = new Try(succeedingFunction);

attempt1.map(function(result) {
    console.log('attempt1:', result.toString()); // Failure(ReferenceError: x is not defined)
});
attempt2.map(function(result) {
    console.log('attempt2:', result.toString()); // Right(42)
});

module.exports = {
    Either: Either,
    Left: Left,
    Right: Right,
    Try: Try,
    Success: Success,
    Failure: Failure
};

var util = require('util');

var Maybe = function() { };

var None = function() { };
util.inherits(None, Maybe);
None.prototype.map = function(f) {
    return this;
};
None.prototype.toString = function() {
    return 'None()';
};

var Some = function(value) {
    this.value = value;
};
util.inherits(Some, Maybe);
Some.prototype.map = function(f) {
    return new Some(f(this.value));
};
Some.prototype.toString = function() {
    return 'Some(' + this.value + ')';
};

var f = function(x) {
    return x * 5;
};

var empty = new None();
var full = new Some(5);

console.log('empty.map(f):', empty.map(f).toString()); // None()
console.log('full.map(f):', full.map(f).toString()); // Some(25)

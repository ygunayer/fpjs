var util = require('util');

var List = function() { };

var Empty = function() { };
util.inherits(Empty, List);
Empty.prototype.map = function(f) {
    return this;
};
Empty.prototype.toString = function() {
    return 'Empty()';
};

var Some = function(value, next) {
    this.value = value;
    this.next = next;
};
util.inherits(Some, List);
Some.prototype.map = function(f) {
    return new Some(f(this.value), this.next.map(f));
};
Some.prototype.toString = function() {
    return 'Some(' + this.value + '), ' + this.next.toString();
};

var f = function(x) {
    return x * 5;
};

var last = new Empty();
var second = new Some(5, last);
var first = new Some(42, second);

console.log('last.map(f):', last.map(f).toString()); // Empty()
console.log('second.map(f):', second.map(f).toString()); // Some(25), Empty()
console.log('first.map(f):', first.map(f).toString()); // Some(210), Some(25), Empty()

var util = require('util'),
    fs = require('fs'),
    base = require('./20c-monads-try'),
    Either = base.Either,
    Left = base.Left,
    Right = base.Right,
    Try = base.Try,
    Success = base.Success,
    Failure = base.Failure;

var Promise = function(f) {
    Try.apply(this, arguments);
};
util.inherits(Promise, Try);

Promise.prototype.map = function(f) {
    this.fn(function(err, result) {
        if (err) {
            f(new Failure(err));
        } else {
            f(new Success(result));
        }
    });
};

var failingFunction = function(callback) {
    // no such file will ever exist
    fs.readFile('/;;;;', callback);
};

var succeedingFunction = function(callback) {
    // returns information about the home directory of the user
    fs.stat(process.env.HOME || process.env.USERPROFILE, callback)
};

var attempt1 = new Promise(failingFunction);
var attempt2 = new Promise(succeedingFunction);

attempt1.map(function(result) {
    console.log('attempt1:', result.toString()); // Failure(Error: ENOENT: no such file or directory, open '/;;;;')
});
attempt2.map(function(result) {
    console.log('attempt2:', result.toString()); // Success([object Object])
});
console.log('-- attempt1 and attempt2 will execute after this line (probably)');

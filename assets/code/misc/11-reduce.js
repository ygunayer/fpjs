Array.prototype.reduce = function(f, initial) {
    var accumulator = initial;
    for (var i = 0; i < this.length; i++) {
        var val = this[i];
        accumulator = f(accumulator, val);
    }
    return accumulator;
};

function f(acc, x) { return acc + x; }
function g(acc, x) { return acc + ', ' + x; }

var numbers = [ 1, 2, 3 ];

console.log('numbers.reduce(f, 0):', numbers.reduce(f, 0)); // 6
console.log('numbers.reduce(g, \'A\'):', numbers.reduce(g, 'A')); // 'A, 1, 2, 3'

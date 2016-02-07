Array.prototype.forEach = function(f) {
    for (var i = 0; i < this.length; i++) {
        var val = this[i];
        f(val);
    }
};

function f(x) { console.log(x); }
function g(x) { return x + 3; }

var numbers = [ 1, 2, 3 ];

console.log('numbers.forEach(f):', numbers.forEach(f)); // undefined
console.log('numbers.forEach(g):', numbers.forEach(g)); // undefined

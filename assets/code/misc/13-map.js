Array.prototype.map = function(f) {
    var ret = [];
    for (var i = 0; i < this.length; i++) {
        var val = this[i];
        var newVal = f(val);
        ret.push(newVal);
    }
    return ret;
};

function f(x) { return x * 2; }
function g(x) { return x + 3; }
function h(x) { return f(g(x)); }

var numbers = [ 1, 2, 3 ];

console.log('numbers.map(f):', numbers.map(f)); // [ 2, 4, 6 ]
console.log('numbers.map(g):', numbers.map(g)); // [ 4, 5, 6 ]
console.log('numbers.map(g).map(f):', numbers.map(g).map(f)); // [ 8, 10, 12 ]
console.log('numbers.map(h):', numbers.map(h)); // [ 8, 10, 12 ]

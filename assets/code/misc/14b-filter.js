Array.prototype.filter = function(p) {
    var ret = [];
    for (var i = 0; i < this.length; i++) {
        var val = this[i];
        var isTrue = p(val);
        if (isTrue) {
            ret.push(val);
        }
    }
    return ret;
};

function f(x) { return x % 2 == 0; }
function g(x) { return x < 3; }

var numbers = [ 1, 2, 3, 4 ];

console.log('numbers.filter(f):', numbers.filter(f)); // [ 2, 4 ]
console.log('numbers.filter(g):', numbers.filter(g)); // [ 1, 2 ]
console.log('numbers.filter(f).filter(g):', numbers.filter(f).filter(g)); // [ 2 ]

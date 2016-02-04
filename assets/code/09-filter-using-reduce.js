Array.prototype.filter = function(p) {
    console.log('custom filter called');
    return this.reduce(function(acc, v) {
        if (p(v)) {
            acc.push(v);
        }
        return acc;
    }, []);
}

var numbers = [ 1, 2, 3, 4 ];

var isEven = function(x) { return x % 2 == 0; }

console.log('even numbers:', numbers.filter(isEven));

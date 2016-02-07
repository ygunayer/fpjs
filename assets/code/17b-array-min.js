Array.prototype.min = function() {
    return this.reduce(function(min, x) {
        if (typeof min == 'undefined') {
            return x;
        } else {
            return x < min ? x : min;
        }
    }, undefined);
};

var numbers = [ 42, 30, -11, 348, -3 ];

console.log('numbers.min():', numbers.min()); // -11

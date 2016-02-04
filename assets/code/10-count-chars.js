String.prototype.countCharacters = function() {
    return Array.prototype.slice.call(this).reduce(function(acc, c) {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
    }, {});
};

console.log('Hello, world!'.countCharacters());

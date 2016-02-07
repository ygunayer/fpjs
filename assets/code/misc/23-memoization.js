var cache = {};
var f = function(x) {
    if (x in cache) {
        return cache[x];
    }
    console.log('Calculated for', x);
    var result = x * 2;
    cache[x] = result;
    return result
};

console.log('f(2):', f(2)); // 'Calculated for 2' ... 4
console.log('f(2):', f(2)); // 4

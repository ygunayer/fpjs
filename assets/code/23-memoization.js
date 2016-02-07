
var factorial = function(n) {
    console.log(n + '*');
    if (n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

var mfactorial = (function() {
    var cache = { 0: 1, 1: 1 };
    return function(n) {
        if (cache[n]) {
            return cache[n];
        }
        console.log(n + '*');
        return (cache[n] = n * mfactorial(n - 1));
    };
})();

console.log('factorial(2):', factorial(2)); // '2*1*' ... 2
console.log('factorial(2):', factorial(2)); // '2*1*' ... 2

console.log('mfactorial(2):', mfactorial(2)); // '2*' ... 2
console.log('mfactorial(2):', mfactorial(2)); // 2
console.log('mfactorial(4):', mfactorial(4)); // '4*' .. '3*' ... 24
console.log('mfactorial(5):', mfactorial(5)); // '5*' .. 120

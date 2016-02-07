var x = 5;

function f(x) {
    x = x + 6;
    return x;
}

console.log('f(10):', f(10)); // 16

function g(y) {
    x = x + 5;
    return y * x;
}

console.log('g(10):', g(10)); // 100
console.log('g(10):', g(10)); // 150
console.log('f(10):', f(10)); // 16

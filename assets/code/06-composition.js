function f(x) {
    return 3 * x + 4;
}

function g(x) {
    return 2 * x + 1;
}

function h(x) {
    return g(f(x));
}

var a = f(5);
console.log('f(5):', a); // 19

var b = g(a);
console.log('g(19):', b); // 39

var c = h(5);
console.log('h(5):', c); // 39

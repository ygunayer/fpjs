function f(x) {
    return x + 5;
}
console.log('f(8):', f(8)); // 13

var g = function(x) {
    return x * 2;
};
console.log('g(6):', g(6)); // 12

var h = function(x) {
    return function(y) {
        return x + y;
    }
};
console.log('h(7):', h(7)); // function(y)...
console.log('h(7)(8):', h(7)(8)); // 15
console.log('h(7)(20):', h(7)(20)); // 27

var m = function(n) { // higher-order function
    return n(5);
};
console.log('m(f):', m(f)); // 10

var l = function(k) { // higher-order function
    return function(a) {
        return k(a);
    }
};
console.log('l(g):', l(g)); // function(a)...
console.log('l(g)(4):', l(g)(4)); // 8
console.log('l(g)(15):', l(g)(15)); // 30

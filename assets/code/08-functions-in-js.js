function f(b) {
    return this.a * b;
}

console.log('f(5):', f(5)); // NaN

var foo = {
    a: 15
};

var g = f.bind(foo);

console.log('f(5):', f(5)); // NaN
console.log('g(5):', g(5)); // 75

console.log('f.call(foo, 20):', f.call(foo, 20)); // 300
console.log('f.apply(foo, [ 20 ]):', f.apply(foo, [ 20 ])); // 300

var newFoo = {
    a: 100
};

console.log('f.call(newFoo, 20):', f.call(newFoo, 20)); // 2000
console.log('f.apply(newFoo, [ 20 ]):', f.apply(newFoo, [ 20 ])); // 2000

console.log('g.call(newFoo, 10):', g.call(newFoo, 10)); // 150
console.log('g.apply(newFoo, [ 10 ]):', g.call(newFoo, 10)); // 150
// call and apply has no effect on a bound function

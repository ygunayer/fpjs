var a = 2;
var b = 3;

function f(x) {
    var result = x + a;
    a = a * 4;
    b = b + 1;
    return result;
}

console.log('f(5):', f(5)); // 7

console.log('a:', a); // 8
console.log('b:', b); // 4

console.log('f(5):', f(5)); // 13 (!)

console.log('a:', a); // 32
console.log('b:', b); // 5

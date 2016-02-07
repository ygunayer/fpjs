const a = 2;
const b = 3;

function f(x) {
    var result = x + a;
    a = a * 4;
    b = b + 1;
    return result;
}

console.log('f(5):', f(5)); // 7

console.log('a:', a); // 2
console.log('b:', b); // 3

console.log('f(5):', f(5)); // 7

console.log('a:', a); // 2
console.log('b:', b); // 3

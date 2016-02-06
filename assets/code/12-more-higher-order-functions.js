var _ = require('lodash');

function isOdd(x) { return x % 2 == 1; }
function isNonZero(x) { return x != 0; }
function isNegative(x) { return x < 0; }

var numbers = [ 1, 2, 3, 4, 5, 6 ];

console.log('numbers.every(isOdd):', numbers.every(isOdd)); // false
console.log('numbers.every(isNonZero):', numbers.every(isNonZero)); // true
console.log('numbers.every(isNegative):', numbers.every(isNegative)); // false
console.log('numbers.some(isOdd):', numbers.some(isOdd)); // true
console.log('numbers.some(isNonZero):', numbers.some(isNonZero)); // true
console.log('numbers.some(isNegative):', numbers.some(isNegative)); // false

console.log('_.drop(numbers, 3):', _.drop(numbers, 3)); // [ 4, 5, 6 ]
console.log('_.take(numbers, 2):', _.take(numbers, 2)); // [ 1, 2 ]
// console.log('_.drop(numbers, 5).take(2):', _.drop(numbers, 5).take(2)); // WILL NOT EXECUTE -- lodash functions are not composable by default

console.log('_.take(_.drop(numbers, 5), 2):', _.take(_.drop(numbers, 5), 2)); // [ 6 ]
console.log('_.takeWhile(numbers, isOdd):', _.takeWhile(numbers, isOdd)); // [ 1 ]
console.log('_.dropWhile(numbers, isNonZero):', _.dropWhile(numbers, isNonZero)); // [ ]

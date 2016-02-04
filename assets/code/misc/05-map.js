function f(x) {
    return x * 2;
}

var numbers = [ 1, 2, 3 ];

var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var newNumber = f(number);
    newNumbers.push(newNumber);
}

console.log('newNumbers:', newNumbers); // [ 2, 4, 6 ]

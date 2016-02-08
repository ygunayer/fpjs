function map(f, arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        var number = arr[i];
        var newNumber = f(number);
        ret.push(newNumber);
    }
    return ret;
}

function f(x) {
    return x * 2;
}

function g(x) {
    return x + 3;
}

var numbers = [ 1, 2, 3 ];

console.log('map(f, numbers):', map(f, numbers)); // [ 2, 4, 6 ]
console.log('map(g, numbers):', map(g, numbers)); // [ 4, 5, 6 ]
console.log('map(f, map(g, numbers)):', map(f, map(g, numbers))); // [ 8, 10, 12 ]

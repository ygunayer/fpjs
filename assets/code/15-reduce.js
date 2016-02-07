function prop(k) {
    return function(person) {
        return person[k];
    }
}
function gender(g) {
    return function(person) {
        return prop('gender')(person) == g;
    }
}

function age(person) { return prop('age')(person); }
function female(person) { return gender('F')(person); }
function male(person) { return gender('M')(person); }

function f(acc, person) {
    return acc + person.age;
}

Array.prototype.sum = function() {
    return this.reduce(function(acc, x) {
        return acc + x;
    }, 0);
}

Array.prototype.avg = function() {
    return this.sum() / this.length;
}

var people = [
    {
        name: 'John Doe',
        age: 24,
        gender: 'M'
    },
    {
        name: 'Jane Doe',
        age: 22,
        gender: 'F'
    },
    {
        name: 'Jack Doe',
        age: 27,
        gender: 'M'
    }
];

var numbers = [ 1, 2, 3, 4 ];

console.log('people.reduce(f, 0):', people.reduce(f, 0)); // 73
console.log('people.map(age).sum():', people.map(age).sum(age)); // 73
console.log('people.filter(male).map(age).avg():', people.filter(male).map(age).avg()); // 25.5
console.log('numbers.sum():', numbers.sum()); // 10
console.log('numbers.avg():', numbers.avg()); // 2.5

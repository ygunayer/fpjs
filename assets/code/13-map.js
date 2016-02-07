function f(x) {
    return x * 2;
}

function g(p) {
    return p.age;
}

function h(p) {
    return p.name;
}

function prop(k) {
    return function(p) {
        return p[k];
    }
}

var numbers = [ 1, 2, 3 ];

var people = [
    {
        name: 'John Doe',
        age: 24
    },
    {
        name: 'Jane Doe',
        age: 22
    }
];

console.log('numbers.map(f):', numbers.map(f)); // [ 2, 4, 6 ]
console.log('people.map(g):', people.map(g)); // [ 24, 22 ]
console.log('people.map(h):', people.map(h)); // [ 'John Doe', 'Jane Doe' ]
console.log('people.map(prop(\'name\')):', people.map(prop('name'))); // [ 'John Doe', 'Jane Doe' ]

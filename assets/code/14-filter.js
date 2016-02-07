function r(person) {
    return person.name.indexOf('Ja') == 0;
}

function prop(k) {
    return function(person) {
        return person[k];
    }
}

function age(person) {
    return prop('age')(person);
}

function gender(g) {
    return function(person) {
        return prop('gender')(person) == g;
    }
}

function female(person) {
    return gender('F')(person);
}

function male(person) {
    return gender('M')(person);
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

console.log('people.filter(r):', people.filter(r)); // [ (Jane Doe), (Jack Doe) ]
console.log('people.filter(female).map(age):', people.filter(female).map(age)); // [ 22 ]
console.log('people.filter(male).map(age):', people.filter(male).map(age)); // [ 24, 27 ]

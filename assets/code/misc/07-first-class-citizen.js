function f(x) {
    ...
}

function foo() {
    var g = function(x) {
        ...
    };

    g(5);
}

function bar() {
    return function(x) {
        ...
    };
}

var someObject = {
    foo: 'bar',
    baz: function() {
        ...
    }
};

[1, 2, 3].map(function(x) {
    ...
});

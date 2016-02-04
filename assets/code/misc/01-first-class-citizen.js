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

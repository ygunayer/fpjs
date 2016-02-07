function f(x, y) {
    return x * x + y;
}

function h(x) {
    return function(y) {
        return x * x + y;
    };
}

f(2, 5) == h(2)(5);

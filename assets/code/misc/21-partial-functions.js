Math.abs = function(x) {
    if (x < 0) {
        return -x;
    } else {
        return x;
    }
};

console.log('Math.abs(15):', Math.abs(15)); // 15
console.log('Math.abs(-24):', Math.abs(-24)); // 24

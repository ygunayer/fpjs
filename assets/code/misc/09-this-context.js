function f() {
    console.log(this.toString());
}
f(); // [object global]

var Foo = function() {
    this.x = 15;
    this.g = function() {
        console.log(this);
    };
};
var foo = new Foo();
console.log(foo); // { x: 15, g: [Function] }
foo.g(); // { x: 15, g: [Function] }

var bar = {
    x: 25,
    baz: function() {
        console.log(this);
    }
}
bar.baz(); // { x: 25, baz: [Function] }

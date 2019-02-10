var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        foo;    // function...
    }
    baz();
};

foo();
baz();  //Error!






























//function is only atomic unit of scope its not always true

var foo;

try{
    foo.length;
}
catch (err) {
    console.log(err);  //TypeError
}

console.log(err); //ReferenceError
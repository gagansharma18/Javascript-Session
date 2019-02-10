
//EX 1
a;          // ???
b;          // ???
var a = b;
var b = 2;
b;          // 2
a;          // ???




//think like this
var a;
var b;
a;
b;
a = b;
b = 2;
b;
a;




// exercise2 ###########################

var a = b();
var c = d();
a;
c;

function b() {
    return c;
}

var d = function() {
    return b();
};


//ex3 function always hoisted first then variable
foo(); // "foo"

var foo = 2;

function foo() {
    console.log("bar");
}

function foo() {
    console.log("foo");
}


//ex4 Why hoisting
a(1); // ???

function a(foo) {
    if(foo > 20) return foo;
    return b(foo+2);
}
function b(foo) {
    return c(foo) + 1;
}
function c(foo) {
    return a(foo*2);
}
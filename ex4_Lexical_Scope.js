function foo() {
    var bar = "bar";

    function baz() {
        console.log(bar); //lexical scope
    }
    baz();
}
foo();



//CHEAT Lexical scope

var bar ="bar";

function foo(str) {
    eval(str);  //cheating!
    console.log(bar); //42
}
foo("var bar = 42;");

/////////////////////////////////

//avoid using setTimeout with string
setTimeout("a = a+b;",100);

setTimeout(() => {
   a=a+b; 
}, timeout);



//////////////////////////////////

var obj = {
    a:2,
    b:3,
    c:4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
    a = b + c;
    c = b - a;
    d = 3; //??
}



obj.d; // undefined
d; //3 -- oops!
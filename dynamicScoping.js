//theoretical dynamic scoping

function foo() {
    console.log(bar); //dynamic!
}


function baz() {
    var bar ="bar";
    foo();
}

baz();


// in javascript we see call stack
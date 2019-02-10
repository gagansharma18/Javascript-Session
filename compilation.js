var foo = "bar";

function bar() {
    var foo = "bar";
}

function baz(foo) {
    foo = "bam";
    bam = "yay";
}







































//pass 1 compile

{ // global scope
    var foo;

    {// socpe of bar function
            var foo;
        
    }

    {// scope of baz function
        var foo;

    }
}    




//pass2 compile

{ //Global scope
    foo = "bar";

    {// bar function scope
        foo = "baz";
    }

    bam = "yay"; // because bam decleration is not present in baz scope it go to one level up(which is global scope here)

    {// baz function scope
        foo = "bam";
    }
} 
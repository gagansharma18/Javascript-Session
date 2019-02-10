var foo = "bar";

function bar() {
    var foo = "bar";
}

function baz(foo) {
    foo = "bam";
    bam = "yay";
}







































//pass 1 compilation variable decleration

//---------------------------GLOBAL SCOPE-------------------------------
        // decleration of foo variable in global scope.


        // decleration of bar function in global scope. 
        //-------------------BAR FUNCTION SCOPE-----------------
    
                // decleration of foo variable in global scope.

        //------------------------------------------------------


        // decleration of baz function in global scope.
         //-------------------BAZ FUNCTION SCOPE-----------------
        
                // decleration of foo variable in global scope.

        //------------------------------------------------------

//----------------------------------------------------------------------

































//pass 1 compilation in SCOPE

{ // global scope
    var foo;

    function bar() {// socpe of bar function
            var foo;
    }

    function baz() {// scope of baz function
        var foo;
    }
}    




//pass2 compile in SCOPE

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
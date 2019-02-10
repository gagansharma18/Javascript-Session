/*
- SCOPE 
    > Scope and the JavaScript Compiler
    > Compiling Function Scope
    > Execution of Function Code
    > Scope and execution example
    > Function Declarations, Function Expressions, and Block Scope
    > Lexical Scope
    > Cheating Lexical Scope: eval
    > IIFE Pattern
    > IIFE Pattern Questions
    > Block Scope in ES6
    > Problems with the Let Keyword
    > Dynamic Scope
    > Quiz: Scope
    > Hoisting
    > this keyword
    > Binding confusion
    > Explicit Binding
    > the new Keyword





























• Where to look for things (Variables and functions)
• Who is doing the looking 
• Introduce some compiler terminology (Misconception over interpreted/dynamic or complied) BASH is a interpreted language
• JS compile code in at let 2 PASS Through the code.
• Compiler is going to look for these blocks of scope
• The Smallest atomic unit of scope that we have is function.(Not always true)

- Compiling function scope
- Execution of function code
*/

//DECELERATION IS WHEN YOU SEE "var" or "function"


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




// NOTES
/* so in pass 1 no matter how many times you write var foo it will declare only once

*/




























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
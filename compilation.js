/*
- SCOPE 
    > Scope and the JavaScript Compiler
    > Compiling Function Scope
    > Execution of code
    > Execution of Function Code
    > Scope and execution example
    > Function Declarations, Function Expressions, and Block Scope
    > Lexical Scope
    > Cheating Lexical Scope: eval
    > IIFE Pattern
    > Block Scope in ES6
    > Problems with the Let Keyword
    > Dynamic Scope
    > Hoisting
    > this keyword
    > Binding confusion
    > Explicit Binding
    > the new Keyword






----------------------------------------------------------------------------------------------

> Scope and the JavaScript Compiler
    • Where to look for things (Variables and functions)
    • Who is doing the looking 
    • Introduce some compiler terminology (Misconception over interpreted/dynamic or complied) BASH is a interpreted language
    • JS compile code in at least 2 PASS Through the code.
    • Compiler is going to look for these blocks of scope
    • The Smallest atomic unit of scope that we have is function.(Not always true)



    JS COMPILER
    //ex1.js
    //COMPILER TERMS on pass 1
    /*
    on line 1 there are 2 operations going on 
        1 declaration operation and 
        2 initialiszation operation 
    and there 2 operation operations actually happen at totally different time (in few microseconds)

    //DECLARATION IS WHEN YOU SEE "var" or "function"

    line 1
    Engine - say, ah, I see a variable declaration for an identifier called foo. Which current scope am I in? 
    Scope manager of current scope - And the answer to that question is you're in the global scope

    Engine - Okay, I want to register the foo identifier into my current scope, which happens to be the global scope.

    Now I move and completly ignore eyery thing on line 64 and dont care about the assignment value

    line 3
    Engine - I see a function declaration for an identifier called bar. Which current scope am I in? 
    Scope manager of current scope - And the answer to that question is you're in the global scope
    Engine - I want to register bar identifier into my current scope

    but now in case of function we do care about the assignment value, Now here JS engine is fantastically complex
    so at this point compiler do just in time also known as JIT compilation
    which is function bar here, we don't see it being called. So rather than compiling the contents of the function bar, we'll just skip over it. And we'll come back to it 
    later, we'll compile the function bar whenever we are forced to because it's been asked to be executed. So we'll defer the compilation and we'll compile it just in time. Even more complex than that is



--------------------------------------------------------------------------------

> Compiling Function Scope     

    JUST IN TME EXPLAIN
     conversation of engine and scope manager inside a function
     and done compiling on the purpose of scope resolution

NOTE : so in pass 1 no matter how many times you write var foo it will declare only once

------------------------------------------------------------------------------------


> Execution of code and Function Code

in couple of ms we will execute the code

now there is no var anymore because we handel that in compilation pase


LHS AND RHS of assignment
 = operator


 so foo = "bar"
 foo is LSH refrence and "bar" is immediate value and not the reference  

other ways for assignments to occur, which don't have an equal sign. 
And there's still an LHS and an RHS even though we don't see a visible left hand side 
and a right hand side. So you do need to actually broaden your understanding of LHS and RHS

LHS is target 
RHS is source


also in function argument there is not = sign but still there is LHS and RHS


note RHS reference is when we are using the value of foo varable or bar function

EXECUTION CONVERSATION

Line 1 after compilation there will only left foo = "bar"
    ENGINE - hey global scope, I have an LHS reference for a variable called foo. 
    Have you ever heard of him?

    SCOPE MANAGER(Global) = Yes, I've heard of him. because you declared it just a microseconds ago
    now Scope manager will give the reference of it to allow operation on it so we got imediate value

// note if the RHS is not immediate value we need to o another lookup

Line 3 after compilation
Now we don't see the executions of the declarations of function bar and function baz anymore. 
As a matter of fact, from an execution perspective, lines three through 10 don't exist anymore 
because they've been declared elsewhere. But let's pretend that bar is going to get called. 
So let's execute the function bar. We're inside of the scope of bar now, and we need to 
execute line four. Remember, the var doesn't exist anymore. So how are we going to execute line 4?
Everybody tell me,

    ENGINE - hey scope bar, I have an LHS reference for a variable called foo. 
    Have you ever heard of him?

    SCOPE MANAGER(bar) = Yes, I've heard of him. because you declared it just a microseconds ago
    now Scope manager will give the reference of it to allow operation on it so we got imediate value

    .
    .
    .
    Line 9 
    ENGINE - hey scope baz, I have an LHS reference for a variable called bam. 
    Have you ever heard of him?

    SCOPE MANAGER(bar) = no. but I've just created it for you and here is the reference // if not in strict mode


--------------------------------------------------------------------------------------

 >Function Declarations, Function Expressions, and Block Scope

 if the very first word in the statement is function keyword  = function declarations 
 else its functioin expression


 function expression is good if its not anonymous function
 
 3 bad things about anonymous function
    - you cannot refrence it. like in recursion 
    - helps to detect error in production code 
    - its self descriptive

 
    








 ----------------------------------------------------------------------------------------
> Lexical Scope (compile time)

Compile time scope is called Lexical scope

it means on complile time engine know the scope location already and it will 
not check everytime on its upper level becaused its cached



> Cheating with Lexical scope

using evel function
it will not catch lexical scope and our js will be slow
because it will not optimise our compile time code.



using with keyword
--------------------------------------------------------------------------------------------
>IIFE
is it function expression or declaration?
its function expression because first word in expression is not funcion

use of IIFE is
jQuery $ sign resolution
pass few globals from parameters which is required inside IIFE

--------------------------------------------------------------------------------------------
> Block Scope in ES6
Let keyword does not hoist
---------------------------------------------------
> Dynamic Scoping (runtime time lexical scoping)
not exists is JS
----------------------------------------------------------------------
> HOISTING
function decleration go first to top then var on compilation

-----------------------------------------------------
> this keyword
Every function, while executing, has a reference to its current execution context, called this.


how the function is called when its called



4 rules for "this" keyword bound in function and ordered of precedence. Call site helps to bind the "this" keyword

- Default binding (foo() called all by itself) 4th precedence, this - undefined in strict mode and this - global in non Strict mode. 

- Implicit building (. Reference) 3rd precedence

- explicit binding ( call and apply) 2nd precedence, hard binding(.bind) if you wrap up call within a function so Everytime you call foo it will called to that bind obj only and not with the call and apply. 
foo() //4
foo.call(obj)//4 same result if you do hard binding 

- new keyword, 1st precedence, when we add new in front of any function it will call that function with constructor call. New keyword do 4 things
* Create brand new object
* Link that object to another object called .prototype
* Bind "this" to that function for the purpose of that function call.
* If that function does not return anything it will implicitly add "return this".

*/

























var foo = "bar";

function bar() {
    var foo = "bar";
}

function baz(foo) {
    foo = "bam";
    bam = "yay";
}













//RHS AND LHS reference

//compiler say to scope manager "hey, [SCOPE], I have a declaration for a variable called [VARIABLE NAME], have you hered of it?
//scope manager will reply "Yes, here is the reference for it"
//and ignore the RHS




























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





//QUIZ

var foo = "bar";

function bar() {
    var foo ="baz";

    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

bar();
foo;   //???
bam;   //???
baz(); //???
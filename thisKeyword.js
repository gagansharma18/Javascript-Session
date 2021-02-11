/*
Every function, while executing, has a reference to its current fucution context, called this
it means how the function is called when its called.
there are 4 binding RULES which I'll explain
1. Default binding
2. Implicit binding
3. Explicit binding / Hard binding
4. New Keyword
*/


//1. Default binding and 2. Implicit binding 

function foo(){
    console.log(this.bar);
}
    var bar = "bar1";
    var o2 ={bar:"bar2",foo:foo};
    var o3 ={bar:"bar3",foo:foo};  

foo();      //"bar1" //Default binding 
o2.foo();   //"bar2" //Implicit binding
o3.foo();   //"bar3" //Implicit binding


/*
In Javascript, everything is a reference to an Object, 
Everything is a reference to a function
*/


var o1 ={
    bar: "bar1",
    foo: function(){
        console.log(this.bar);
    }
};
var o2 = { bar:"bar2", foo: o1.foo }; // if there is no bar in o2 it will not refer to global, we have to understand prototype chain fo this

var bar ="bar3"
var foo = o1.foo;

o1.foo();       // "bar1"
o2.foo();       // "bar2"
foo();          // "bar3"


/* BINDING CONFUSION */
function foo() {
    var bar = "bar1";
    baz();
}
function baz() {
    console.log(this.bar);
}
var bar = "bar2";
foo(); //???

//its not possible to crossover Lexical envirnment and this keyword these are two different mechanism 


//Attempt to achieve crossover which is not possible obviously
function foo() {
    var bar = "bar1";
    this.baz = baz;
    this.baz();
}
function baz () {
    console.log(this.bar);
}

var bar = "bar2";
foo(); //???

// 3. Explicit binding (use of call and apply)

function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar2" };

foo();          // "bar1"
foo.call(obj);  // "bar2"
foo.apply(obj);  // "bar2"

// HARD BINDING
/* this keywork is too flexible that it may frustrate us like example at the time of ajax call and click event callback */
// so we can assure our this binding by using hard binding.

function foo() {
    console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

var orig = foo;  //reference to foo
foo = function(){ orig.call(obj); } //if we override foo identifier with new function orig will still reference to original foo only, in this case it will create new scope for foo identifier and reference old foo to new identifier orig, we will better understand this in Prototype chain  

foo();          // "bar1"
foo.call(obj2);  // "???"

// We can make ourself a function called bind
function bind(fn,o) {
    return function() {
        fn.call(o);
    }
}
function foo(){
    console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

foo = bind(foo,obj);
foo();          // "bar"
foo.call(obj2); // ???

//we can directly attach this utility to Function prototype
if (!Function.prototype.bind2) {
    Function.prototype.bind2 =
        function(o) {
            var fn = this; // the function!
            return function(){
                return fn.apply(o,arguments);
            }
        }
}

function foo(baz) {
    console.log(this.bar + " " + baz);
}

var obj = { bar: "bar" };
foo = foo.bind2(obj);
foo("baz"); // "bar baz"
//Its very usefull function so its turned out that ES5 directly added this utility in Function called bind

function Person(name, age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        console.log(this);
         return this.name
         }
    this.getAge = function(){ return this.age}
}



function Person2(name, age){
    this.name = name;
    this.age = age;
    this.getName = () => { return this.name}
    this.getAge = () => { return this.age}
}

 let p1 = new Person("gagan",30);
 let p2 = new Person2("gagan1",301);


console.log(p1.getName.call({name:"abcd"}));


console.log(p2.getName.call({name:"abcd"}));


function person(name,age) {
   this.name = name;
   this.getName = function(){
        return this.name;
    }
    this.age = age;
    function getAge(){
        return this.age;
    }
}

var person1 = new person("gagan",30);

console.log(person1);



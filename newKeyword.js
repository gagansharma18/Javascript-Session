/* New keyword doesn't have to do anything with initiating class  
so put any assumption aside
so when we put new keyword in front of any function 
so it will magicaly turns that function call into a constructor call
still nothing to do anyting with class
*/

function foo() {
    this.baz = "baz";
    console.log(this.bar + "" + baz);
}
var bar = "bar";
var baz = new foo(); // ???
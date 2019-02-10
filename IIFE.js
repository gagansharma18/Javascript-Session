var foo = "foo";

(function(){

    var foo ="foo2";
    console.log(foo);  // "foo2"

})();


console.log(foo);  // "foo"





//we can pass value to it


var foo = "foo";

(function(bar){

    var foo ="foo2";
    console.log(foo);  // "foo"

})(foo);


console.log(foo);  // "foo"
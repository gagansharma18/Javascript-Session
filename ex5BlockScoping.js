function foo() {
    var bar ="bar";
    for (let i=0;i<bar.length;i++){
        console.log(bar.charAt(i));
    }
    console.log(i); //ReferenceError
}

foo();


/////////////////////////////////
function foo(bar) {
    if (bar) {
        let baz = bar;
        if (baz) {
            let bam = baz;
        }
        console.log(bam); //ERROR
    }
    console.log(baz); //ERROR
}

foo("bar");
/////////////////////////////////////
{
	let _a =2;
	{
		console.log(_a); // 2
		let _b =1;
	}
    {
		console.log(_b); //ReferenceError
	}
}

/////////////////////////////////


function foo() {
    var bar ="bar";
    for (var i=0;i<bar.length;i++){
        console.log(bar.charAt(i));
    }
    console.log(i); //ReferenceError
}

foo();
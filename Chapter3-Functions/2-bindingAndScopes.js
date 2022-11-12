/* 
    Each binding has a scope, which is the part of the program
    in which the binding is visible.
    
    global scope - bindings defined outside of any function 
    or block has the global scope

    local scope - bindings created for function parameters and 
    or declared inside a function have local bindings. 
*/

//   Bindings declared with let or const are local to the block 
//   they are declared in.

let x = 10;
if (true) {
    let y = 20;  //local scope
    var z = 30;  //global scope
    console.log(x + y + z); //each scope can look out into the scope around it
}
// console.log(y); error
console.log(z);

console.log("---------------------------------------------------------------");

// how many scopes can a scope look out? 
//       Ans: as much as you can 
const a = 10;
const b = 20;
if (true) {
    const b = 30;
    if(true) {
        console.log("a =", a);
        console.log("b =", b);
    }
}

console.log("---------------------------------------------------------------");

//   In pre-2015 JS, only functions created new scopes, so old-style
//   bindings, created with the var keyword, are visible throughout the 
//   whole functiono that they appear in _ or throughout the global scope, 
//   if they are not in a function. 

var i = 3;
if (true) {
    var i = 4;
}
console.log("i =", i);

const oldFunc = function () {
    if(true) {
        var x = 4;
    }
    console.log('x in oldFunc() =', x);
}

oldFunc();

console.log("------------------------------------------------------");
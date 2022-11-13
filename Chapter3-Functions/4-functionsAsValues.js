/*  A function binding and value are diffenent! 

    A function value can do all the things that other values can do -- using it in an expression
*/
const square = function(x) {
    return x * x;
}

console.log(3 + square(4));

// A function binding is still just a regular binding and can, if not constant, be assigned
// a new value

let double = function(x) {
    console.log("This is original function")
    return x * 2;
}

if (true) {
    double = function(x) {
        console.log("This is updated function");
        return x + x;
    }
}

double();
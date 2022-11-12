/* A function definition is a regular binding where the value of 
the binding is a function */

// first style
const square1 = function(x) {
    return x * x;
}

// second style
function square2(x) {
    return x * x;
}

console.log(square1);
console.log(square1(3));
console.log(square2);
console.log(square2(3));

console.log("--------------------------------------------------------------------");
/* Are there any differences?
        As far as I find out, the second style can be overwritten by other functions with the same name while the first one is not.
*/

function cube(x) {
    console.log("This is the first cube function!");
    return x * x * x;
}

function cube(x) {
    console.log("This is the second cube function!");
    return x **3;
}

console.log(cube(3));

const abs = function(x) {
    console.log("This is the first abs function!");
    return Math.sqrt(x**2);
}
/* the following code will leads to error! 

const abs = function(x) {
    console.log("This is the second abs function!");
    return Math.sqrt(x * x);
}
*/

// I can say that "funtion x() {}" is the same as "var x = function() {}" /

console.log("--------------------------------------------------");

var adder = function (x, y) {
    console.log("first adder function");
    return x + y;
}

var adder = function (x, y) {
    console.log("second adder function");
    return x + y;
}

console.log(adder(3, 4));

console.log("---------------------------------------------------");


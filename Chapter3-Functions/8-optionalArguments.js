// The followinng code is allowed and executed without any problem.

function square(x) {return x * x}
console.log(square(4, true, "hedgehog")); // it ignores the extra arguments and computes the first one

/* JS is extremely broad-minded about number of arguments you pass to a function. 
    if pass two many, the extra ones are ignored.
    if pass too few, the missing parameters get assigned to undefined.
*/

// downside --> you will accidentally pass the wrong number of arguments to functions 

function power(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count ++) {
        result *= base;
    };
    return result;
}

console.log(power(3, 2)); // correct
console.log(power(3));    
console.log(power(3, 4, 5));
console.log(power(3, 'hi')); // unexpected output


// upside --> this behavior can be used to allow a function to be caled with different numbers of
//            arguments

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10, 3));
console.log(minus(10));

console.log("----------------------------------------------------------");

// If you write an = operator after a parameter, followed by an expression, the value 
// of that expression will replace the argument when it is not given

function adder(x, y=1) {
    return x + y;
}

console.log(adder(3, 4));
console.log(adder(3));
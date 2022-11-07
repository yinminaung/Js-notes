// this JS program is intended to run in a terminal using node.JS

// assigning a function to a variable

const adder = (a, b) => {return a + b};
const mul = (a, b) => {return a * b};

process.stdout.write("3 + 4 = " + adder(3, 4) + "\n");
process.stdout.write("3 * 4 = " + mul(3,4) + "\n");

// passing a function as an argument
function runner(fun, arr) {
    let total;
    if (fun == adder) {
        total = 0;
    } else {
        total = 1;
    }
    for (const i of arr) {
        total = fun(total, i);
    }
    return total;
}

const myArray = [1, 2, 3 ,4];
const addResult = runner(adder, myArray);
const mulResult = runner(mul, myArray);
process.stdout.write("The sum of the array is " + addResult + "\n");
process.stdout.write("The product of the array is " + mulResult + "\n");


// Returning a function 

function greeting() {
    function sayHello() {
        process.stdout.write("Hello!\n")
    }
    return sayHello;
}

const func = greeting();
func();

// or you can use annonymous function

function greeting2() {
    return () => {
        process.stdout.write("Hello!\n");
    }
}
greeting2()();
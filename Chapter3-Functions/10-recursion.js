// Recursion

/* A function can call itself as long as it doesn't do it so often that it overflows the stack */

//Direct Recursion

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent-1);
    }
}

console.log(power(2, 10));

//Indirect Recursion

function fun1(x, y) {
    if (x <= 0 || y <= 0) {
        console.log("Stop");
        return 0;
    }
    console.log(`In fun1, x = ${x} and y = ${y}`)
    return fun2(x-2, y-2);
}

function fun2(x, y) {
    console.log(`In fun2, x = ${x} and y = ${y}`)
    return fun1(x + 1, y+1);
}

fun1(10, 8);

// in JS, the recursion version is about 3 times slower than
// the looping version

/* Recursion is not always just an inefficient alternative to looping. 
   Some problems really are easier to solve with recursion than with loops. 
*/

// Recursive problem puzzle: by starting from number 1 and repeatedly either adding 5 
// or multiplying by 3, an infinite set of numbers can be produced. 

function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current * 3, `(${history} * 3)`) || 
            find(current + 5, `(${history} + 5)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(11));
console.log(findSolution(1001));
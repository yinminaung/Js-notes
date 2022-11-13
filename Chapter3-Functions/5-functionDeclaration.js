// function declaration
function square(x) {
    return x * x;
}

// function declarations are not part of the regular top-to-bottom flow of control.
// they are conceptually moved to the top of their scope and can be used by all the 
// code in that scope. 
// it is not allowed in C/C++;
// not allowed in Python
// function hoisting is useful because it offers the freedom to order code 

console.log(cube(3));

function cube(x) {
    return x * x * x;
}
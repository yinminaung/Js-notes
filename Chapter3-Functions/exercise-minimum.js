/*
Write a function min that takes two arguments and returns their minimum.

*/

function min(arg1, arg2) {
    if (arg1 >= arg2) return arg2
    else return arg1;
}

console.log(min(3, 4));
console.log(min(10, 2));
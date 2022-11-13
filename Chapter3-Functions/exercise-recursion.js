/* 
    another way of deciding whether a 
    positive whole number is odd or even

    0 is even
    1 is odd
    for any other number, its eveness is the same is N - 2;
*/

function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number -2);
    }
}

console.log(isEven(3));
console.log(isEven(20));
console.log("-----------------------------------------------------------");

// if you put negative numbers -> stack overflow

// lets fix it

function isEven2(number) {
    function checkEven(num) {
        if (num === 0) {
            return true;
        } else if (num === 1) {
            return false;
        } else {
            return checkEven(num -2)
        }
    };
    return checkEven(Math.sqrt(number **2));
}

console.log(isEven2(3));
console.log(isEven2(32));
console.log(isEven2(-3));
console.log(isEven2(-332));
console.log(isEven2(50));
console.log(isEven2(75));
console.log(isEven2(-1));
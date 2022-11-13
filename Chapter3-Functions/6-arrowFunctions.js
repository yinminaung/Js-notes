// a third notation for functions

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

// when there is only one parameter, you can omit the parentheses.
const square1 = (x) => {return x * x};
const square2 = x => x * x;
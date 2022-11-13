/* 
There are two more or less natural ways for functions to be introduced into 
programs. 

    The first method
        - find the repeated functionality, find a good name for it, and 
        put into a function
    The second method
        - find some functionality that deserves its own function 
*/

// example program
// We want to write a program that prints two numbers: the number of cows
// and chickens on a farm, with the words Cows and Chickens after them and
// zeros padded before both numbers so that they are always there digits long.

function consoleFarm(cow, chicken) {
    if (cow < 10) {
        cow = "00" + cow;
    } else if (cow < 100) {
        cow = "0" + cow;
    }
    console.log(`${cow} Cows`);

    if (chicken < 10) {
        chicken = "00" + chicken;
    } else if (chicken < 100) {
        chicken = "0" + chicken;
    }
    console.log(`${chicken} Chicken`)
}

consoleFarm(8, 2);

// updated functions
function zeroPad(num, length) {
    // num : the number to be formatted
    // length : the length of the digit we want
    let numString = String(num);
    if (length < numString.length || typeof num !== "number") {
        throw new Error("Invalid Arguments")
    } else {
        while (numString.length < length) {
            numString = "0" + numString;
        }
    }
    return numString
}

function consoleFarm2(cow, chicken) {
    console.log(`${zeroPad(cow, 3)} Cows`);
    console.log(`${zeroPad(chicken, 3)} Chicken`);
}

consoleFarm2(8, 2);
consoleFarm2(100, 23);

/* 
    A useful principle is to not add cleverness unless you are absolutely sure
you’re going to need it.
   It can be tempting to write general “frameworks” for
every bit of functionality you come across.
   Resist that urge.
   You won’t get any real work done—you’ll just be writing code that you never use.
*/
/* Write a function countBs that takes a string as its only
argument and returns a number that indicates how many 
uppercase "B" characters tehre are in the string.
*/

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") count += 1;
    }
    return count;
}

console.log(countBs("hithere"));
console.log(countBs("Mrs.Been"));
console.log(countBs("BoBBy is Boring."));
console.log("------------------------------------------------");
/*
    write a function called countChar that behaves like countBs, 
    except it takes a second argument that indicates the character
    that is to be counted. 
    Rewrite the countBs that make use this function.
*/

function countChar(str, char) {
    // str : the string input
    // char : the character to search
    let count = 0;
    for (let i = 0; i < str.length;i++) {
        if (str[i] === char) count++;
    }
    return count;
}

console.log(countChar("hithere", "i"));
console.log(countChar("HAPPYBOBBYISYOUNG", "Y"));
console.log("------------------------------------------------------");

// updated countBs
function countBs2(str) {
    return countChar(str, "B");
}

console.log(countBs2("Mr.Beans"));
console.log(countBs2("HAPPYBOBBYISBORRING"));
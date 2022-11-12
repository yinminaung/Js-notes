/* 
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/
const size = 9;
let myStr = "";

function isOdd(num) {
    return num % 2 != 0;
}

for (let i = 1; i<= size; i++) {
    if (isOdd(i)) {
        myStr += " ";
    }
    for(let j = 1; j<= size /2; j++) {
        myStr += "# ";
    }
    myStr += "\n";
}
console.log(myStr);
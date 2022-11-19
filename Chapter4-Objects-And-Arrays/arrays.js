let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers);
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);   

// the code that returns undefined
console.log(listOfNumbers[-3]);
console.log(listOfNumbers[20]);

// adding new items 
listOfNumbers.push(16);     // at the end of the array
console.log(listOfNumbers); 
listOfNumbers.unshift(0);  // at the start of the array
console.log(listOfNumbers);

// removing new items
listOfNumbers.pop();       // at the end of the array
console.log(listOfNumbers);
listOfNumbers.shift();
console.log(listOfNumbers);

// concatenating
let l1 = [0, 1, 2, 3];
let l2 = [4, 5, 6, 7];
let l3 = l1 + l2; //it leads to a string
let l4 = l1.concat(l2);
console.log(l3);
console.log(typeof l3);
console.log(l4);
console.log(typeof l4);


// Closure

// What happens to local bindings when the function call that created them is no longer active? 

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
// both instances of the binding can still be accessed. It is a good 
// demostration that local bindngs are created anew for every call, and 
// different calls can't trample on one another's local bindnigs. 

function multiplier(factor) {
    return number => number * factor;
}

const twice = multiplier(2);
console.log(twice(3));
const thrice = multiplier(3);
console.log(thrice(3));


function makeHuman(gender) {
    return age => `${age} years old ${gender}`;
}

const makeMan = makeHuman("man");
const makeWoman = makeHuman("woman");
console.log(makeMan(33));
console.log(makeWoman(55));

/* A good mental model is to think of function values as containing both the 
 code in their body and the environment in which they are created. 
 When called, the function body sees the environment in which it was 
 created, not hte environment in which it is called. 

 In the example, multiplier is called and creates an environment in which
 its factor parameter is bound to 2. The function value it returns, which is stored
 in twice, remembers this environment. So when that is called, it multiplies its
 argument by 2.

*/ 

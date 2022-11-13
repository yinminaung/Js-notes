/*
    Blocks and functions can be created inside other blocks and functions, producing 
    multiple degrees of locality
*/

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} of ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(2, "tablespoon", "olive oil");
}

hummus(3);

/* 
    The set of bindings visible inside a block is determined by the place of 
    that block in the program text.
    Each local scope can also see all the local scopes that contain it, and all
    scopes can see the global scope. 
    This approach to binding visibility is called lexical scoping.
*/
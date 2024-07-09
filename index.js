// Function: receivesAFunction
function receivesAFunction(callback) {
    callback(); // Calling the callback function
}

// Function: returnsANamedFunction
function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
        console.log("This is a named function!");
    }
    return namedFunction;
}

// Function: returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
        console.log("This is an anonymous function!");
    };
}

// Example usage:
console.log("Calling receivesAFunction:");
receivesAFunction(function() {
    console.log("Callback function called!");
});
console.log("\nCalling returnsANamedFunction:");
const namedFunction = returnsANamedFunction();
namedFunction();

console.log("\nCalling returnsAnAnonymousFunction:");
const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction();


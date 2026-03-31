// Node JS
// 1) write a function addition  , multiplication 
//                               division , subtraction which accepted 2 parameters   
// 	write result function which accept 3 parameters 
     
//                result (a1 , a2 , callback)

// pass callback parameters while calling 


// Addition
function addition(a, b) {
    return a + b;
}

// Subtraction
function subtraction(a, b) {
    return a - b;
}

// Multiplication
function multiplication(a, b) {
    return a * b;
}

// Division
function division(a, b) {
    return a / b;
}

// Result function with callback
function result(a1, a2, callback) {
    console.log("Result: " + callback(a1, a2));
}

// Calling result function with different callbacks

result(10, 5, addition);
result(10, 5, subtraction);
result(10, 5, multiplication);
result(10, 5, division);

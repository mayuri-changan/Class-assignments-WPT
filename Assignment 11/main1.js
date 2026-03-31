// 3) Write a function calculate to perform addition of numbers  from given string 
//    let d = '12345678as'  in calc.js file 
const calculate = require("./calc");

let d = '12345678as';


let total = calculate(d);

console.log("Sum of digits in string:", total);
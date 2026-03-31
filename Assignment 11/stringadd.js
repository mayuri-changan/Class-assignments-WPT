//  Write a function calculate to perform addition of numbers  from given string 
//    let d = '12345678as'  in calc.js file 


let d = '12345678as';

// Function to calculate sum of digits
function calculate(str) 
{
    let sum = 0;

    for (let i = 0; i < str.length; i++)
     {
        let ch = str[i];

        // Check if character is a digit
        if (ch >= '0' && ch <= '9') 
        {
            sum += parseInt(ch);
        }
    }

    return sum;
}

// Call the function
let total = calculate(d);

console.log("Sum of digits in string:", total);

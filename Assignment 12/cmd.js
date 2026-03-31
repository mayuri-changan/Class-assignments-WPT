// Get command line arguments (skip first 2 default args)
const args = process.argv.slice(2);

let sum = 0;

// Loop through arguments
for (let i = 0; i < args.length; i++) {
    let num = parseInt(args[i]);

    // Check if number is even
    if (num % 2 === 0) {
        sum += num;
    }
}

console.log("Sum of even numbers:", sum);

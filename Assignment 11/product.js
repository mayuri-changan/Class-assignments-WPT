// create file product.txt and write data in that file 
// using sync and async methods .

const fs = require("fs");

// Data to write
const data = "Product List:\n1. Laptop\n2. Mobile\n3. Tablet\n4. Monitor\n5. Keyboard";

// ---Synchronous Write ---
try {
    fs.writeFileSync("product.txt", data, "utf8");
    console.log("File written successfully (Synchronous).");
} catch (err) {
    console.error("Error writing file (Sync):", err);
}

// --- Asynchronous Write ---
const asyncData = "Product List (Async Version):\n1. Laptop\n2. Mobile\n3. Tablet\n4. Monitor\n5. Keyboard";

fs.writeFile("product.txt", asyncData, "utf8", (err) => {
    if (err) {
        console.error("Error writing file (Async):", err);
        return;
    }
    console.log("File written successfully (Asynchronous).");
});




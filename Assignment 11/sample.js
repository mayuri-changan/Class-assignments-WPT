// create file sample.txt add some data in that file 
// and read that file in synchronus way as well as asynchronus way


const fs = require("fs");

// --- Create/write file ---
const data = "This is a sample text file.\nNode.js File System Example.";

try {
    // Synchronous write
    fs.writeFileSync("sample.txt", data, "utf8");
    console.log("File written successfully (Synchronous).");
} catch (err) {
    console.error("Error writing file (Sync):", err);
}

// --- Read file synchronously ---
try {
    const syncData = fs.readFileSync("sample.txt", "utf8");
    console.log("\nSynchronous Read:");
    console.log(syncData);
} catch (err) {
    console.error("Error reading file (Sync):", err);
}

// --- Read file asynchronously ---
fs.readFile("sample.txt", "utf8", (err, asyncData) => {
    if (err) {
        console.error("Error reading file (Async):", err);
        return;
    }
    console.log("\nAsynchronous Read:");
    console.log(asyncData);
});

// try to use other methods from fs module 
// for directories 
const fs = require("fs");
const path = require("path");

// Directory path
const dirPath = path.join(__dirname, "EmployeeData");

//  Create directory if it does not exist
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath); // Synchronous
    console.log("Directory created successfully (Sync).");
}

//  Create a file inside the directory (Asynchronous)
const filePath = path.join(dirPath, "Employee.txt");
const data = "Employee: Mayuri Changan, Email: mayuri@example.com\n";

fs.writeFile(filePath, data, "utf8", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File created successfully (Async).");

    // Append data to the same file
    fs.appendFile(filePath, "Employee: Rahul Patil, Email: rahul@example.com\n", (err) => {
        if (err) console.error(err);
        else console.log("Data appended successfully.");

        // Read directory contents
        fs.readdir(dirPath, (err, files) => {
            if (err) console.error(err);
            else console.log("Files in directory:", files);

            //  Delete the file
            fs.unlink(filePath, (err) => {
                if (err) console.error(err);
                else console.log("File deleted successfully.");

                //  Remove the directory
                fs.rmdir(dirPath, (err) => {
                    if (err) console.error(err);
                    else console.log("Directory removed successfully.");
                });
            });
        });
    });
});

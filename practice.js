const fs = require("fs");
// Create and Write to a File
// Sync
// fs.writeFileSync("./explain.txt", "Hello World!");

// Async
// fs.writeFile("./explain.txt", "Hello World Again!", (err) => {});

// Read File
// Sync
// const result = fs.readFileSync("./unknown.txt", "utf8");
// console.log(result);

// async
// fs.readFile("./unknown.txt", "utf8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     }   else{
//         console.log(result);
//     }
// });

// To be print present date in explain.txt file
// fs.appendFileSync("./explain.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./explain.txt", `${Date.now()} Hey There! \n `);

// copy file
// fs.cpSync("./explain.txt", "./explain_copy.txt");

// delete file
// fs.unlinkSync("./explain_copy.txt");


// Getting File/Directory Statistics
// console.log(fs.statSync("./explain.txt"));
// console.log(fs.statSync("./explain.txt").isFile());

// create directory
// fs.mkdirSync("./NewFolder");

// Removing Directories
// fs.rmdirSync("./NewFolder");


// Reading Directory with File Details
// fs.readdir("./", (err, files) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Files", files);
//     }
// });




// Blocking Operation
// console.log("1");
// const result= fs.readFileSync("./unknown.txt", "utf8");
// console.log(result);

// console.log("2");

// Non-Blocking Operation
// console.log("1");
// fs.readFile("./unknown.txt", "utf8", (err, result) => {
//   console.log(result);
// });
// console.log("2");
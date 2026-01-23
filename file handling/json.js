const fs = require("fs");
const data = fs.readFileSync("data.json", "utf-8");
const jsonData = JSON.parse(data);
console.log(jsonData);
console.log("json object name:", jsonData.name);
console.log("json object age:", jsonData.age);

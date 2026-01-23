const fs = require("fs");

function logMessage(message) {
  const log = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync("logs.txt", log);
}
logMessage("Server started");
logMessage("User logged in");
logMessage("File uploaded successfully");
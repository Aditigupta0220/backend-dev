// Task- 1: Node.js HTTP Server with Logging
// Create a simple Node.js HTTP server using the built-in http and fs modules.
// Requirements:
// 1. The server should listen on port 8000.
// 2. Handle the following routes using a switch case:
// / → Respond with "This is Home Page"
// /about → Respond with "This is About Page"
// /contact → Respond with "This is Contact Page"
// Any other route → Respond with "404 Page Not Found"
// 3. For every request, store a log entry in a file named log.txt.
// 4. Each log entry should include:
// Current timestamp
// Requested URL
// Response message
// (Format example: timestamp | url | response)
// 5. Use fs.appendFile() to write logs without overwriting existing data.
// 6. Send the appropriate response to the client using res.end().

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let responseMessage = "";
  let statusCode = 200;

  switch (req.url) {
    case "/":
      responseMessage = "This is Home Page";
      break;

    case "/about":
      responseMessage = "This is About Page";
      break;

    case "/contact":
      responseMessage = "This is Contact Page";
      break;

    default:
      responseMessage = "404 Page Not Found";
      statusCode = 404;
      break;
  }


  const log = `${new Date().toISOString()} | ${req.url} | ${responseMessage}\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log("Error writing to log file", err);
    }
  });

  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(responseMessage);
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

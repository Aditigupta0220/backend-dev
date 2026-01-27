//  Campus Placement Student API (Most Asked in Interviews)Scenario
// Your college placement cell wants a backend system to manage student data during campus drives.Requirements
// Create a Node.js server that:Uses http module to create serverSupports following APIs:
// GET /students → return all students
// GET /students/:id → return single student
// POST /students → add new student
// DELETE /students/:id → remove student
// Store data in-memory (array)
// Use JSON response
// Handle 404 routes
// Log every request to log.txt using fs module

const http = require("http");
const fs = require("fs");

// In-memory data store
let students = ["aditi, john, rahul"];;
let studentId = 1;

const server = http.createServer((req, res) => {


  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
  fs.appendFile("log.txt", log, () => {});

  
  if (req.url === "/students" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(students));
  }


  if (req.url.startsWith("/students/") && req.method === "GET") {
    const id = req.url.split("/")[2];
    const student = students.find(s => s.id === Number(id));

    if (!student) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Student not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(student));
  }


  if (req.url === "/students" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      const newStudent = { id: studentId++, ...data };
      students.push(newStudent);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newStudent));
    });

    return;
  }


  if (req.url.startsWith("/students/") && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    const index = students.findIndex(s => s.id === Number(id));

    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Student not found" }));
    }

    students.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Student deleted" }));
  }

 
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});

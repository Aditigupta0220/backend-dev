const express = require("express");
const app = express();
app.use(express.json());
let students = [];
app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/students",(req,res)=>
{
    const {id,name,marks}=req.body;
    if(!name)
    {
        console.log("name not found");

    }
    if(marks<0)
    {
        console.log("marks should be greater that 0");
    }
    const student={id ,name,marks};
    students.push(student);
    res.json(student);
});
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, marks } = req.body;

  const student = students.find(s => s.id == id);
  if (!student) {
    return res.json( "Student should not be blank");
  }
  if (name)
  {
     student.name = name;
  }
  if (marks !== undefined && marks >= 0) 
  {
    student.marks = marks;
  }
  res.json(student);
});
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const student=students.find(s=>
    {
        s.id==id
        if(student)
        {
            student.splice
        }
    });
 

});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running");
});

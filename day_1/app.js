// http module is used to create server on node
const http = require("http");
const port = 3000;

const students = ["Phillip", "Katz", "Jodie", "David"]

// create a server

// 1. home page.
// 2. Display student list / student.
// 3. Add a new student.
// 4. Route not found.


const server = http.createServer((req, res) =>
{
    // console.log(req.method);
    // console.log(req.url);
    // res.end("Hello World");

    if((req.method === "GET") && (req.url === "/"))
    {
        console.log("Root Path");
        res.end("HOME PAGE");
    } else if ((req.method === "GET") && (req.url === "/students"))
    {
        console.log("List Students");
        res.end(JSON.stringify(students));
    } else if ((req.method === "POST") && (req.url === "/students"))
    {
        console.log("Add A New Student");
        res.end("NEW STUDENT ADDED");
    } else
    {
        res.end(`Cannot GET ${req.url}`);    
    }
});


// listen on a specific port
server.listen(port, () =>  console.log(`server started on port ${port}`));
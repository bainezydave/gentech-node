const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


// Create app from Express.

const app = express();

// Middleware for Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const port = 3000;

const students = ["Phillip", "Katz", "Jodie", "David"]

app.get('/', (req, res) => res.render("home", {
    name: "David",
    firstLunchBuddy: students[Math.floor(Math.random() * students.length)],
    secondLunchBuddy: students[Math.floor(Math.random() * students.length)]
}));

app.get('/students', (req, res) => res.send(students));

app.post('/students', (req, res) =>
{
    console.log(req.body);
    res.send("Added Students");
});

app.listen(port, () => console.log(`App is running on port ${port}`));

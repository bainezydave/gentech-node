// Requires
const express = require('express'); // npm install express --save
const exphbs = require('express-handlebars'); // npm install express-handlebars --save
const bodyParser = require('body-parser'); // npm install body-parser --save
const mongoose = require('mongoose'); // npm install mongoose --save
const routes = require('./routes');


// Server
const app = express();
const port = process.env.PORT || 3000; // Environment port or 3000.


// Database
mongoose.connect("mongodb://localhost/contact_app", {useNewUrlParser: true});
mongoose.Promise = global.Promise; // Return Promise for db queries.
mongoose.connection.on("error", err => console.log(err)); // Log any errors on db start.


// Middleware
app.engine('handlebars', exphbs()); // Handlebars.
app.set('view engine', 'handlebars'); // Handlebars.
app.use(bodyParser.urlencoded({extended: false})); // Body Parser.
app.use(bodyParser.json()); // Body Parser.


// Router
app.use(routes); // USe routes defined in routes.js.


// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));



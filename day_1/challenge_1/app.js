/*
CHALLENGE 1: Express Guestbook
    1.1: Core App:
        Ever heard of a guest book? It's a record of who & when people have visited a place - common in hotels or bed & breakfast homes.
        Create an app that gets data from the "IP API" and finds out where you are.
        http://ip-api.com/json/

        Every time you visit or refresh the page for this app, it should add your location & timestamp of your visit to an array.
        You might want to store the city & timestamp in an object, and put the object into an array!

    1.2: Benefits of Server-side Processing
        Instead of "IP API", use "IP Stack" instead:
        https://ipstack.com/

        Keep your API key safe & secret! 

        Using IP Stack's response, show these pieces of extra data on the page as well:
            - the country's flag as an image on the page
*/

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const fetch = require('node-fetch');

// Create app from Express.
const app = express();
const port = 3000;

const apikey = "ca25fe609a41c0021a16405347484336";

// Middleware for Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Method 1
let locations = [];

app.get('/', (req, res) => res.render("locations"));

app.get('/locations', (req, res) => res.send(locations));

app.post('/', (req, res) =>
{
    let location = {
        city: req.body.city,
        timestamp: Date.now()
    };

    locations.push(location);
    res.send(locations);
});



// Method 2
app.get('/ipStackLocation', (req, res) =>
{
    (async () =>
    {       
        let data = await fetch(`http://api.ipstack.com/check?access_key=${apikey}`);
        let results = await data.json();

        console.log(results);

        res.render("locations2", {
            country: results.country_name,
            flag: results.location.country_flag
        });        
    })();

});







app.listen(port, () => console.log(`App is running on port ${port}`));

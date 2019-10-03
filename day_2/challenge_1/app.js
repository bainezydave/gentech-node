// server initialization:
const express = require('express');
const port = 3000;
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

// server middleware:
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


async function getRandomPokemon() 
{
    let pokeArray = [];

    for (let i = 0; i < 6; i++)
    {
        let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`;
        let data = await fetch(url);
        let results = await data.json();

        let pokeName = results.forms[0].name;
        let pokePic = results.sprites.front_default;
        let pokeTypes = results.types;
        pokeArray.push({ pokeName, pokePic, pokeTypes });
    }
    return pokeArray;
}

// routing: 
app.get('/', async (req, res) => 
{
    let pokeArray = await getRandomPokemon();
    res.render('index', { pokemonArray: pokeArray });
});

// message for when the server boots up:
app.listen(port, () => console.log(`server started on localhost:${port}!`));
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

global.HttpError = class HttpError extends Error
{
    constructor(code, message)
    {
        super(message);
        this.name = "HttpError";
        this.statusCode = code;
    }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middle ware function
app.use((req, res, next) => 
{
    // middleware functions have access to req and response objects
    console.log("URL", req.url);
    console.log("method", req.method);
    console.log("body", req.body || {});
    console.log("middle ware running");
    // invoke the next function in the request lifecycle
    next();
});

app.use(require("./routes"));

app.use((err, req, res, next) =>
{
    if (err && err.name === "HttpError")
    {
        
    }
    next(); 
});

app.listen(port, () => console.log(`server running on port ${port}`));


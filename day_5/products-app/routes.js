const express = require("express");
const router = express.Router();
const ProductController = require("./controller/product_controller");

router.get("/", (req, res) =>
{
    return next(new HttpError(404, "Page not found"));
    res.send("Welcome");
});

router.get("/products", (req, res) => 
{
    res.send("PRODUCTS");
});

const validate = (req, res, next) => 
{
    if (req.body)
    {
        if (!req.body.name) 
        {
            return next(HttpError(422, "Name is required."));
        }
        if (req.body.price && req.body.price < 0) 
        {
            return next(HttpError(422, "Name is required."));
        }
    }
    next();
};

router.post("/products",validate, ProductController.create);
module.exports = router;
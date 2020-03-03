const express = require("express");
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");


router.use((req, res, next) => 
{
    if (req.query._method == 'DELETE') req.method = 'DELETE';
    req.url = req.path;
    next(); 
});


router.get("/authors", AuthorController.index);

router.post("/authors", AuthorController.create);

router.get("/author/new", AuthorController.make);

router.get("/author/:id", AuthorController.show);

router.get("/author/edit/:id", AuthorController.edit);

router.put("/author/:id", AuthorController.update);

router.delete("/author/:id", AuthorController.remove);


module.exports = router;



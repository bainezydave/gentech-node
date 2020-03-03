const express = require("express");
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");


router.get("/authors", AuthorController.index);

router.post("/authors", AuthorController.create);

router.get("/authors/new", AuthorController.make);

router.get("/authors/:id", AuthorController.show);

router.get("/authors/edit/:id", AuthorController.edit);

router.put("/authors/:id", AuthorController.update);

router.delete("/authors/:id", AuthorController.destroy);

module.exports = router;
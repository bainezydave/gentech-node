const express = require('express');
const router = express.Router();
const BookController = require("./../controllers/book_controller");
const CommentController = require("./../controllers/comment_controller");



router.get("/books/new", BookController.make);

router.post("/books", BookController.create);

router.get("/books/:id", BookController.show);

router.post("/books/:id/comments", CommentController.create);

module.exports = router;
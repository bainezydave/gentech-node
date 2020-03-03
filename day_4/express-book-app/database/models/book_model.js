const mongoose = require('mongoose');
const BookSchema = require('../schemas/book_schema');
const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
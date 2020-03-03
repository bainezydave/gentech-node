const mongoose = require("mongoose");
const AuthorSchema = require("./../schemas/author_schema");

const AuthorModel = mongoose.model("Author", AuthorSchema);

module.exports = AuthorModel;
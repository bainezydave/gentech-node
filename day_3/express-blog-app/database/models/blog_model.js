const mongoose = require("mongoose");
const BlogSchema = require("./../schemas/blog_schema");

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = BlogModel;
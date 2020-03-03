const BlogModel = require("../database/models/blog_model");


const index = async (req, res) =>
{
    let blogs = await BlogModel.find();

    res.render("blog/index", { blogs });
};


const create = async (req, res) =>
{
    let blog = { title, body, timestamp } = req.body;

    console.log(blog.timestamp);
    
    blog.timestamp = new Date();

    await BlogModel.create(blog)
        .catch(err => res.status(500).send(err));
    
    res.redirect("/blogs");
};


const make = (req, res) => res.render("blog/new");


const remove = async (req, res) =>
{
    let id = req.params.id;
    await BlogModel.deleteOne({ _id: id });
    
    res.redirect("/blogs");
};


module.exports = { index, create, make, remove };

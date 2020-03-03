const AuthorModel = require("../database/models/author_model");

const index = async (req, res) =>
{
    let authors = await AuthorModel.find();

    res.render("author/index", { authors });
};


const create = async (req, res) =>
{
    let author = { first_name, last_name, bio, gender } = req.body;

    await AuthorModel.create(author)
        .catch(err => res.status(500).send(err));
    
    res.redirect("/authors");
};


const make = (req, res) => res.render("author/new");


const show = async (req, res) =>
{
    let { id } = req.params;

    let author = await AuthorModel.findById(id)
        .catch(err => res.status(500).send(err));
    
    res.render("author/show", { author });
};


const edit = async (req, res) =>
{
    let { id } = req.params;

    let author = await AuthorModel.findById(id)
        .catch(err => res.status(500).send(err));
    
    res.render("author/edit", { author });
};


const update = async (req, res) =>
{
    let { id } = req.params;

    let { name, bio, gender } = req.body;

    await AuthorModel.findByIdAndUpdate(id, { name, bio, gender })
        .catch(err => res.status(500).send(err));
    
    res.redirect(`/authors/${id}`);
};


const remove = async (req, res) =>
{
    let { id } = req.params;
    
    await AuthorModel.deleteOne(id)
        .catch(err => res.status(500).send(err));
    
    res.redirect("/authors");
};




module.exports = { index, create, make, show, edit, update, remove };
const AuthorModel = require("../database/models/author_model");


const create = async (req, res) =>
{
    let { name, bio, gender } = req.body;

    let author = await AuthorModel.create({ name, bio, gender })
        .catch(err => res.status(500).send(err));
    
    res.redirect("/authors");
};


const index = async (req, res) =>
{
    let authors = await AuthorModel.find();
    res.render("author/index", { authors });
};


const make = (req, res) =>
{
    res.render("author/new");
};


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


const destroy = async (req, res) => 
{
    let { id } = req.params;
    await AuthorModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));
    
    res.redirect('/authors');
};


module.exports = {
    create,
    index,
    make,
    show,
    edit,
    update,
    destroy
}
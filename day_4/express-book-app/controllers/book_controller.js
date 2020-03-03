const AuthorModel = require("../database/models/author_model");
const BookModel = require("../database/models/book_model");

const make = async (req, res) =>
{
    let authors = await AuthorModel.find().select('_id, name')
        .catch(err => res.status(500).send(err));
    
    res.render("book/new", {authors});
};

const create = async (req, res) =>
{
    let { title, published, author } = req.body;
    let book = await BookModel.create({ title, published, author })
        .catch(err => res.status(500).send(err));
    
    res.redirect(`books/${book._id}`);
};

const show = async (req, res) =>
{
    let { id } = req.params;

    let book = await BookModel.findById(id).populate('author')
        .catch(err => res.status(500).send(err));
    
    console.log(book);
    
    res.render("book/show", {book});
};

module.exports = {
    create,
    make,
    show
};
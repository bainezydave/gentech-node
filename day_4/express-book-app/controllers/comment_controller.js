const BookModel = require("../database/models/book_model");


const create = async (req, res) =>
{
    let { id } = req.params;
    let { body } = req.body;
    
    let book = await BookModel.findById(id)
        .catch(err => res.status(500).send(err));

    book.comments.push({ body });
    book.save();
    res.redirect(`/books/${id}`);
};


module.exports = {
    create
};
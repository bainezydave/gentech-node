// Contacts data.
// const contacts = [];
const ContactModel = require("./../database/models/contact_model");

const index = (req, res) =>
{
    ContactModel.find()
        .then(contacts => { res.render("contacts", { allContacts: contacts }); console.log(contacts) })
        .catch(err => res.status(500).send(`Error: ${err}`));
};

const newContact = (req, res) => res.render("contact");


const create = (req, res) =>
{
    let contact = { firstName, lastName, enquiry, email } = req.body;

    ContactModel.create(contact)
        .then(contact => res.render("success"))
        .catch(err => res.status(500).send(`Error: ${err}`));
};


 /*

const newContact = (req, res) => res.render("contact"); // Root Path: Shows contact form.
const index = (req, res) => res.json(contacts); // Get Contacts route.
const create = (req, res) => // Post contacts route.
{
    let contact = { firstName, lastName, email } = req.body;
    contacts.push(contact);
    res.render("success");
}

*/


module.exports = { newContact, index, create };


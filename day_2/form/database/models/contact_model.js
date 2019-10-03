const mongoose = require("mongoose"); // npm install mongoose --save
const ContactSchema = require("./../schemas/contact_schema");

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;
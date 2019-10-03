const mongoose = require('mongoose'); // npm install mongoose --save
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    enquiry: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = ContactSchema;
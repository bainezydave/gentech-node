// Requires
const express = require('express'); // npm install express --save
const contactController = require('./controllers/contact');


// Router
const router = express();


router.get('/', contactController.newContact); // Root Path: Shows contact form.
router.get('/contacts', contactController.index); // Get Contacts route.
router.post('/contacts', contactController.create); // Post contacts route.

module.exports = router;




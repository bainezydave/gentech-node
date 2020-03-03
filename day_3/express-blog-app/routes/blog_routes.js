const express = require("express");
const router = express.Router();
const BlogController = require("./../controllers/blog_controller");


router.use((req, res, next) => 
{
    if (req.query._method == 'DELETE') {
        req.method = 'DELETE';
        req.url = req.path;
    }       
    next(); 
});

router.get("/blogs", BlogController.index);

router.post("/blogs", BlogController.create);

router.delete("/blog/:id", BlogController.remove);

router.get("/blogs/new", BlogController.make);

module.exports = router;
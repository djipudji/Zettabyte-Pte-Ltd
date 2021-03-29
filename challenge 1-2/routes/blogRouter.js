const express = require('express');// Import express
const router = express.Router() // Make router
const blogController = require('../controllers/blogController'); // Import blog Controller
const blogValidator = require('../validators/blogValidator'); // Import blog Validator

// IF ACCESSING localhost:3000/blog/create WE WILL GO TO CREATE BLOG ENDPOINT
router.post('/create', blogValidator.create, blogController.create);

// IF ACCESSING localhost:3000/blog/update WE WILL GO TO UPDATE BLOG ALREADY EXIST ENDPOINT
router.put('/update/:_id', blogValidator.update, blogController.update);

// IF ACCESSING localhost:3000/blog/getAll WE WILL GO TO GET ALL BLOG ENDPOINT
router.get('/getAll',  blogController.getAll);

// IF ACCESSING localhost:3000/blog/getOne WE WILL GO TO GET ONE BLOG ENDPOINT
router.get('/getOne/:_id', blogValidator.getOne, blogController.getOne);

// IF ACCESSING localhost:3000/blog/getPopuler WE WILL GO TO GET POPULER BLOG ENDPOINT
router.get('/getPopuler', blogController.getPopuler)

// IF ACCESSING localhost:3000/blog/getHompage WE WILL GO TO GET HOME PAGE ENDPOINT
router.get('/getHomepage', blogController.getHomepage)

// IF ACCESSING localhost:3000/blog/delete WE WILL GO TO DELETE ONE BLOG ENDPOINT
router.delete('/delete/:_id',blogValidator.delete, blogController.delete);

module.exports = router;
const express = require('express');
const router = express.Router();

//Include all the routes that we're using
const commentCtrl = require('../controllers/comment'); 
const auth = require('../middleware/auth'); 
const multer = require('../middleware/multer-config'); 

router.get('/comments', auth, commentCtrl.getAllComments);
router.post('/comments', auth, multer, commentCtrl.createComment);
router.delete('/comments/:id', auth, commentCtrl.deleteComment);

module.exports = router; 
const express = require('express'); 
const router = express.Router();

//Include all the routes that we're using
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth'); 
const multer = require('../middleware/multer-config'); 

router.get('/', auth, postCtrl.getAllPosts);
router.post('/post', auth, multer, postCtrl.createPost);  
router.delete('/post/:id', auth, postCtrl.deletePost);

module.exports = router; 
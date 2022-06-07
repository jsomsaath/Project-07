const express = require('express'); 
const router = express.Router(); 

//Include all the routes that we're using
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const userCtrl = require('../controllers/users'); 

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users/:id', auth, multer, userCtrl.getOneUsers);
router.get('/users', auth, userCtrl.getAllUsers); 
router.put('/users/:id', auth, multer, userCtrl.updateUser);
router.delete('/users/:id', auth, multer, userCtrl.deleteUser);

module.exports = router; 
const multer = require('multer'); 

//Giving the format of the image we're going to use on the website 
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//Save it on the disk 
const storage = multer.diskStorage({
//Selected the destination of the files 
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
//Naming the file with _ instead of space 
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
//Naming the files and adding the date the user first import it
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('image');
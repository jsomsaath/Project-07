//Calling jsonwebtoken, we're getting a token from it to connect 
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (req, res, next) => {
    try {
//Using the header authorization 
        const token = req.headers.authorization.split(' ')[1];
//Verifying if the token egal it private secret key
        const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID not known';
        }   else{
            next();
        }
    } catch {
        res.status(403).json({error : error | 'Request not authorized !'})
    }
};
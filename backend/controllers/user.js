const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv');
const mailValidator = require('email-validator'); 
const passwordValidator = require('password-validator');
const User = models.users 

dotenv.config(); 

//User sign up and save the user in the database
exports.signup = (req, res, next) => {
    if (!mailValidator.validate(req.body.email) || (!schema.validate(req.body.password))) {
        throw { error: "Request not authorized !"}
    } else if (mailValidator.validate(req.body.email) && (schema.validate(req.body.password)))
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
            email: req.body.email, 
            admin: false, 
            password: hash
        });
        User.save()
        .then(() => res.status(200).json({ message: 'User created !'}))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};

//Login the user if already created
exports.login = (req, res, next) => { 
    User.findOne({ email: req.body.email })
    .then(users => {
        if (!users) {
            return res.status(401).json({ error: 'User not found !'});
        }
    bcrypt.compare(req.body.password, users.password)
    .then(valid => {
        if (!valid) {
            return res.status(401).json({ error: 'Wrong password !' });
        }
    res.status(200).json({
        userId: users._id, 
        admin: users.admin, 
        token: jwt.sign(
             {usersId: users._id}, 
             process.env.JWTPRIVATEKEY,
             {expiresIn: "24h"}
        )
    });
    })
    .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};

//Deleting user
exports.deleteUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id }})  
      .then(() => {
          User.destroy({ where: { id: req.params.id }}) 
                    .then((user) => res.status(200).json(user)
                    ({ message: 'Account deleted !' }))
                    .catch(error => res.status(400).json({ error }));
                })
            .catch (error => res.status(500).json({ error }));
  };
  
//If someone with valid token can access to one user in particular
  exports.getOneUser = (req, res, next) => {
    User.findOne
    ({ where: { id: req.params.id }})
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
  };

//Getting the list of all the user created by all the users
  exports.getAllUsers = (req, res, next) => {
    User.findAll({attributes: ['id', 'email','firstName','lastName']}) 
        .then((users) => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
  };
  
//Modify user 
  exports.updateUser = (req, res, next) => {
  try {
    User.update({
        email: req.body.email
    }, {
        where: {
            id: (req.params.id)
        }
    });
  
    return res.status(200).send({
        message: "Email changed !"
    })
  } catch (err) {
    return res.status(500).json(err);
  }
  }
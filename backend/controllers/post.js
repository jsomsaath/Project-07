const fs = require('fs'); 
const models = require ('../models/index'); 
const Post = models.posts; 
const User = models.users; 

//Creating post
exports.createPost = (req, res, next) => { 
    if (!req.file) {
        return Post.creat({
            userId: userId, 
            content: req.body.content, 
            image:"", 
        })
        .them((post) => res.status(201).json(post))
        .catch((error) => {console.log(error)
        res.status(500).json(error)});
    } else if (req.file) {
        models.posts.create({
            userId: userId, 
            content: req.body.content, 
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        })
        .then((post) => res.status(201).json({post}))
        .catch((error) => res.status(500).json(error));
    }
}; 

//Deleting the post if we're the one who created it
exports.deletePost = (req, res, next) => { 
    Post.findOne ({
        where: {id: req.params.id}
    })
    Post.destroy({where: {id: req.params.id}})
    .then(() => res.status(200).json({ message: 'Post deleted !'}))
    .catch(error => res.status(400).json({error}));
};

//Seeing all the post
exports.getAllPosts = (req, res, next) => {
    Post.findAll({
        order:[[
            'createAt', 'DESC'
        ]], 
        include:{
            model: User, 
        }
    })
    .then(posts => {return res.status(200).json(posts);})
    .catch(error => {
        return res.status(500).json
    });
}
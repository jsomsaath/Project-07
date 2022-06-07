const models = require('../models/index.js'); 
const Post = models.posts; 
const User = models.users; 
const Comment = models.comments; 

//Finding all the comment by post and id 
exports.getAllComments = (req, res, next) => {
    models.comment.findAll({
        include:{
            model:Post,
            model:User
        },
        where: {postId: req.params.postId}
    })
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(500).json(error))
}; 

//Create comment 
exports.createComment = (req, res, next) => { 
    const comment = {
        userId: userId, 
        postId: req.body.postId, 
        comment : req.body.comment
    };
    Comment.create(comment)
    .then(() => res.status(200).json({ message: 'Comment added !'}))
    .catch(error => res.satus(400).json({ error }));
};

//Delete comment
exports.deleteComment = (req, res, next) => { 
    models.comment.findOne ({
        where: {id: req.params.id}
    })
    models.comments.destroy({where:{id: req.params.id}})
    .then(() => res.status(200).json({ message: 'Comment deleted !'}))
    .catch(error => res.satus(400).json({error}));
};
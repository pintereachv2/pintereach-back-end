const articleRouter = require('express').Router();

const authenticate  = require('../auth/authenticate');
const db = require('./articleModel.js');


//CRUD OPERATIONS 

//GET ARTICLES
articleRouter.get('/api/articles', authenticate, (req, res) => {
    db.find()
    .then(article => {
        res.status(200).json(article);
    })
    .catch(err => {
        res.status(err.code).json({ success: false, message: 'The users information could not be retrieved'})
    })
})


module.exports = articleRouter;
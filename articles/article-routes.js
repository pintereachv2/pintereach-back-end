const articleRouter = require('express').Router();

const authenticate  = require('../auth/authenticate');
const db = require('./articleModel.js');
// const dbs = require('../api/user-model.js');


//CRUD OPERATIONS 

//GET ARTICLES
articleRouter.get('/articles', (req, res) => {
    db.find()
    .then(article => {
        res.status(200).json(article);
    })
    .catch(err => {
        res.status(err.code).json({ success: false, message: 'The users information could not be retrieved'})
    })
})

articleRouter.post('/articles', (req, res) => {
    let name = req.body
    db
    .insert(name)
    .then(article => {
        res.status(200).json({message: 'successful', article});
    })
    .catch(err => {
        res.status(err.code).json()
    })
  })





// articleRouter.get('/:id', (req, res) => {
//     const id = req.params.id

    
    
//   });

module.exports = articleRouter;
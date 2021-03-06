const articleRouter = require('express').Router();


const db = require('./articleModel.js');



//CRUD OPERATIONS 

//GET ARTICLES
articleRouter.get('/articles',   (req, res) => {
    db.find()
    .then(article => {
        res.status(200).json(article);
    })
    .catch(err => {
        res.status(500).json({ success: false, message: 'The users information could not be retrieved'})
    })
})

//POST ARTICLES
articleRouter.post('/articles',  (req, res) => {
    let name = req.body
    db
    .insert(name)
    .then(article => {
        res.status(200).json({message: 'successful', article});
    })
    .catch(err => {
        res.status(500).json()
    })
  })

  //DELETE ARTICLES
  articleRouter.delete('/articles/:id', (req, res) => {
    const {id} = req.params;
    db.
    remove(id)
    .then(article => {
        if (article) {
            res.status(204).end();
        } else {
            res.status(404).json({ success: false, message: "The article with the specified ID does not exist." });
        }
    })
        .catch(err => {
            res.status(500).json({ error: "The article could not be removed" })  
    })
})

// PUT 
articleRouter.put('/articles/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.update(id, changes)
    .then(articleUpdate => {
        if( !articleUpdate) {
            res.status(404).json({ success: false, message: 'The article with the specified ID does not exist.' })
        }  else if ( !changes ) {
            return res.status(400).json({  success: false, errorMessage: 'Please provide info for the article.' })

        }
         else {
            return res.status(200).json({ success: true, changes })
        }
    })
    .catch(err => {
        res.status(500).json({  success: false, error: 'The article information could not be modified'})
    })
})


//GET FOR A SPECIFIC USER 
//IN REACT PORTION THE ID WILL BE DYNAMIC 
articleRouter.get('/articles/user', (req, res) => {
    console.log(req.body.user_id)

    const id = req.body.user_id //req.params.id

        db.getArticleList(id)
        .then(userArticle => {
            if(userArticle.length > 0) {
                res.status(200).json(userArticle)
            } else {
                res.status(404).json({message: 'no articles found on user'})
            } 
        
        })
        .catch(err => {
            res.status(500).json({  success: false, error: 'error retrieving id'})
        })
    
  });

module.exports = articleRouter;
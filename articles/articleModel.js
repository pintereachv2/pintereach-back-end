const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    getArticleList,
    insert,
    update,
    remove,
  };
  
  function find() {
    return db('articles');
  }
  
  function findById(id) {
    return db('articles').where({ id: Number(id) });
  }


  function getArticleList(userId) {
    return db('articles')
      .join('users ', 'users.id', 'articles.user_id')
      .select('articles.id', 'articles.title', 'articles.content', 'articles.abstract', 'articles.image', 'articles.category', 'users.username')
      .where('articles.user_id', userId);
  }
  

  function insert(article) {
    return db('articles')
      .insert(article)
    //   .then(ids => ({ id: ids[0] }));
  }
  
  function update(id, article) {
    return db('articles')
      .where('id', Number(id))
      .update(article);
  }
  
  function remove(id) {
    return db('articles')
      .where('id', Number(id))
      .del();
  }
  
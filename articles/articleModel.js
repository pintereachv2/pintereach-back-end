const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
  };
  
  function find() {
    return db('articles');
  }
  
  function findById(id) {
    return db('particles').where({ id: Number(id) });
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
  
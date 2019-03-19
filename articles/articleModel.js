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
    return db('articles').where({ id: Number(id) });
  }
  function getArticleList(id) {
    return db('')
      .join("recipes", "recipe_id", "Ingredients in Recipes.recipe_id")
      .select(
        "Ingredients in Recipes.quantity",
        "Ingredients in Recipes.ingredient"
      )
      .where("Ingredients in Recipes.recipe_id", id);
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
  
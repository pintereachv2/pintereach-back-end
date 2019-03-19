
exports.up = function(knex, Promise) {
 return knex.schema.createTable('articles', articles => {
    articles.increments();
    //both title and content are needed in order to fill out form
    articles
        .string('title', 128)
        .notNullable()
    articles
       .text('content', 255)
       .notNullable();
    //relationship to the board id
    articles
      .integer("board_id")
      .unsigned()
      .references("id")
      .inTable("boards");
    //optional additions
    articles
        .string('abstract', 255); //for extra details on 
    articles
        .text('image', 128); //adding image placement for react portion 
    articles
        .text('category', 255); //for filtering purposes on react portion

      });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('articles');
};



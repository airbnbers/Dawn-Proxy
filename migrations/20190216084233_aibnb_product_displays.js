exports.up = function(knex, Promise) {
  //////////////////////////////////////////////////////////
  ////////////// REVIEWS TABLE /////////////////////////////
  //////////////////////////////////////////////////////////
  return Promise.all([
    knex.schema.createTable("reviews", function(table) {
      table.increments("review_id").primary();
      table.string("username");
      table.timestamp("created_at");
      table.string("description");
      table.string("image_url");
      table.integer("user_rating");
      table.integer("accuracy");
      table.integer("communication");
      table.integer("cleanliness");
      table.integer("location");
      table.integer("check_in");
      table.integer("value");
      table.integer("listing_id");
    })

    //////////////////////////////////////////////////////////
    ////////////// CHECKOUT TABLE ////////////////////////////
    //////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////
    ////////////// PHOTOGALLERY TABLE ////////////////////////
    //////////////////////////////////////////////////////////
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("reviews"),
    knex.schema.dropTable("checkout"),
    knex.schema.dropTable("photo-gallery")
  ]);
};

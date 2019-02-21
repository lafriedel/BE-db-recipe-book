exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", function(table) {
    table
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.float("ingredient_quantity", 5, 2).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};

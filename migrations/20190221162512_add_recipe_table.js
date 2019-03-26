exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(table) {
    table.increments();
    table
      .string("name", 128)
      .notNullable()
      .unique();
    table.text("instructions").notNullable();
    table
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};

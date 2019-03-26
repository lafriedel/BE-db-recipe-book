exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(table) {
    table.increments();
    table
      .string("name", 55)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};

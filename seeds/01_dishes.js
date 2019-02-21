exports.seed = function(knex, Promise) {
  return knex("dishes")
    .truncate()
    .then(function() {
      return knex("dishes").insert([
        { id: 1, name: "Tacos" },
        { id: 2, name: "Soups" },
        { id: 3, name: "Pizza" }
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { id: 1, name: "pound of ground beef" },
        { id: 2, name: "package of corn tortillas" },
        { id: 3, name: "ounce of mushrooms, chopped" },
        { id: 4, name: "cup of yellow rice, uncooked" },
        { id: 5, name: "ounce of shredded cheese" },
        { id: 6, name: "tsp of salt" }
      ]);
    });
};

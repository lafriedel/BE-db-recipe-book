exports.seed = function(knex, Promise) {
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        { id: 1, name: "Classic Tex-Mex Tacos", instructions: "Cook tacos and eat!", dish_id: 1 },
        { id: 2, name: "Granny's Old-Fashioned Tacos", instructions: "Talk to Granny and just let her cook the tacos.", dish_id: 1 },
        { id: 3, name: "Mushroom Barley Soup", instructions: "Chop up mushrooms and add other ingredients, boil, simmer, and enjoy.", dish_id: 2 },
        { id: 4, name: "Veggie Pizza with Homemade Crust", instructions: "Put ingredients on crust, bake, let cool, and eat in front of the TV.", dish_id: 3 }
      ]);
    });
};

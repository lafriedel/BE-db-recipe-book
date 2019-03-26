
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').truncate()
    .then(function () {
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: 1.25},
        {recipe_id: 1, ingredient_id: 2, ingredient_quantity: 1.00},
        {recipe_id: 1, ingredient_id: 4, ingredient_quantity: 1.00},
        {recipe_id: 1, ingredient_id: 5, ingredient_quantity: 4.00},
        {recipe_id: 1, ingredient_id: 6, ingredient_quantity: 2.00},
        {recipe_id: 2, ingredient_id: 1, ingredient_quantity: 2.00},
        {recipe_id: 2, ingredient_id: 2, ingredient_quantity: 1.00},
        {recipe_id: 2, ingredient_id: 5, ingredient_quantity: 3.00},
        {recipe_id: 2, ingredient_id: 6, ingredient_quantity: 1.50},
        {recipe_id: 3, ingredient_id: 3, ingredient_quantity: 8.00},
        {recipe_id: 3, ingredient_id: 6, ingredient_quantity: 1.75},
        {recipe_id: 4, ingredient_id: 3, ingredient_quantity: 4.00},
        {recipe_id: 4, ingredient_id: 5, ingredient_quantity: 8.00},
        {recipe_id: 4, ingredient_id: 6, ingredient_quantity: 0.50},
      ]);
    });
};

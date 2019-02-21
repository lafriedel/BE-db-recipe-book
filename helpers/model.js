const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {

  return db("dishes")
    .orderBy("id", "asc")
    .limit(10);

}

async function addDish(dish) {

  const [id] = await db("dishes").insert(dish);

  return id;

}

function getDish(id) {

  const dish = db("dishes")
    .where("id", id)
    .first();

  const recipes = db("recipes")
    .where("dish_id", id)
    .orderBy("id", "asc");

  return { dish, recipes };

}

function getRecipes() {

  return db("recipes")
    .join("dishes", "dishes.name as dish")
    .where("dishes.id", "recipes.dish_id")
    .orderBy("id", "asc")
    .limit(24);

}

async function addRecipe(recipe) {

  const [id] = await db("recipes").insert(recipe);

  return id;
  
}

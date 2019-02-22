const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getRecipe
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

async function getDish(id) {

  const reqDish = await db("dishes")
    .where("id", id)
    .first();

  const reqRecipes = await db("recipes")
    .select("recipes.id", "recipes.name", "recipes.instructions")
    .where("dish_id", id)
    .orderBy("id", "asc");

    const result = {dish: reqDish, recipes: reqRecipes}

  return result;

}

function getRecipes() {

  return db("recipes")
    .join("dishes", "dishes.id", "recipes.dish_id")
    .select("recipes.id", "recipes.name", "dishes.name as dish_name", "recipes.instructions")
    .orderBy("recipes.id", "asc")
    .limit(5);
}

async function addRecipe(recipe) {

  const [id] = await db("recipes").insert(recipe);

  return id;

}

async function getRecipe(id) {
    
    const recipeInfo = await db("recipes")
        .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
        .join("dishes", "dishes.id", "recipes.dish_id")
        .select("dishes.name as dish", "recipes.name as recipe", "recipe_ingredients.ingredient_quantity as quantity", "ingredients.name as ingredients")
        .where("recipes.id", id);

        return recipeInfo;

}

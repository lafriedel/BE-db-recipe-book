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
    return db('dishes').orderBy('id', 'asc');
};

function addDish(dish) {

};

function getDish(id) {

};

function getRecipes() {

};

function addRecipe(recipe) {

};
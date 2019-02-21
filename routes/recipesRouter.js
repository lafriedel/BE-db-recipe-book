const express = require("express");
const Recipes = require('../helpers/model');

const router = express.Router();

// GET to /api/recipes using getRecipes()
router.get("/", async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST to /api/recipes using addRecipe(recipe)
router.post("/", async (req, res) => {
    try {

    } catch (error) {

    }
});


module.exports = router;
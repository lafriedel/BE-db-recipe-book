const express = require("express");
const Recipes = require('../helpers/model');

const router = express.Router();

// GET to /api/recipes using getRecipes()
router.get("/", async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({error: "There was an error retrieving the data."});
    }
});

// POST to /api/recipes using addRecipe(recipe)
router.post("/", async (req, res) => {
    try {
        const newRecipeId = await Recipes.addRecipe(req.body);
        res.status(201).json(newRecipeId);
    } catch (error) {
        res.status(500).json({error: "There was an error adding the recipe."});
    }
});

// GET to /api/recipes/:id using getRecipe(id)
router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipes.getRecipe(req.params.id);
        res.status(200).json(recipe);
    } catch(error) {
        res.status(500).json({error: "There was an error retrieving the data."});
    }
})


module.exports = router;
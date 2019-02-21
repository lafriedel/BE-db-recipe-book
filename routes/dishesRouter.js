const express = require("express");
const Dishes = require('../helpers/model');

const router = express.Router();

// GET to /api/dishes using getDishes()
router.get("/", async (req, res) => {
    try {
        const dishes = await Dishes.getDishes();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({error: "There was an error retrieving the data."});
    }
});

// GET to /api/dishes/:id using getDish(id)
router.get("/:id", async (req,res) => {
    try {
        const dish = await Dishes.getDish(req.params.id);
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({error: "There was an error retrieving the data."});
    }
});

// POST to /api/dishes using addDish(dish);
router.post("/", async (req, res) => {
    try {
        const newDishId = await Dishes.addDish(req.body);
        res.status(201).json(newDishId);
    } catch (error) {
        res.status(500).json({error: "There was an error adding the dish."});
    }
});

module.exports = router;

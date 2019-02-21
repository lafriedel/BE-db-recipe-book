const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile");
const Dishes = require('../helpers/model');

const router = express.Router();
const db = knex(knexConfig.development);

// GET to /api/dishes using getDishes()
router.get("/", async (req, res) => {
    try {
        const dishes = await Dishes.getDishes();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET to /api/dishes/:id using getDish(id)
router.get("/:id", async (req,res) => {
    try {

    } catch (error) {
        
    }
});

// POST to /api/dishes using addDish(dish);
router.post("/", async (req, res) => {
    try {

    } catch (error) {
        
    }
});

module.exports = router;

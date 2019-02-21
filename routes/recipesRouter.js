const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile");
const Recipes = require('../helpers/model');

const router = express.Router();
const db = knex(knexConfig.development);

module.exports = router;
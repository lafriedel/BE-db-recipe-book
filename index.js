const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).send("You are connected.");
})

server.listen(5000, () => {
    console.log("Server listening on port 5000");
})
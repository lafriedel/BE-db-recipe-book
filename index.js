const express = require('express');
const helmet = require('helmet');
const server = express();

const dishesRouter = require('./routes/dishesRouter');
const recipesRouter = require('./routes/recipesRouter');

server.use(helmet());
server.use(express.json());

server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

server.get('/', (req,res) => {
    res.status(200).send("You are connected.");
})

server.listen(5000, () => {
    console.log("Server listening on port 5000");
})
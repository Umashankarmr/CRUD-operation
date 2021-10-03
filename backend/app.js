const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
require('./DB/connection')
const Drink = require('./model/schema')
const DrinkRouter = require('./routes/api')

app.use(express.json());
app.use(DrinkRouter);

app.listen(PORT, () => {
    console.log(`connection established successfully at ${PORT}`)
})
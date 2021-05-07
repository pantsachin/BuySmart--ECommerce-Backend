const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const {initializeDBConnection} = require("./database/database.connection.js")

const app = express();
app.use(bodyParser.json());
app.use(cors());

const populateProductsCollection = require("./utils/utils.js");



const products = require("./routes/products.router.js");

//called before any route handler for connection 
initializeDBConnection();

// Only run once to populate the Mongo Atlas Database
// populateProductsCollection();


//APIs

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/products", products);
// app.use("/user", user);




//404 Error handler
//Do not move, this should be the last route handler
app.use((req, res) => {
  res.status(404).json({success: false, message: "route not found on server, please check"})
})

//Error handler
//Don't move
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({success: false, message: "error occurred, see the error message key for more details", errorMessage: err.message})
})

app.listen(3000, () => {
  console.log('server started');
});
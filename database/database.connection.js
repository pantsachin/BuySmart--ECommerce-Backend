const mongoose = require("mongoose");



function initializeDBConnection() {
  mongoose.connect('mongodb+srv://dbSachin:mongodbsachin@cluster0.vixsn.mongodb.net/ecommerce', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("successfully connected"))
  .catch(() => console.log("mongoose connection failed", error))

}



module.exports = { initializeDBConnection }
const mongoose = require("mongoose");
const { Schema } =  mongoose;

const UserSchema = new mongoose.Schema({
  name: {type: String},
  password: {type: String},
  wishList: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
  cart: [
    {type: mongoose.Schema.Types.ObjectId, ref: "Product"}]

})

consrt User = mongoose.model("User", UserSchema);

module.exports = { User }
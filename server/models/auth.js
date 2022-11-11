const mongoose=require("mongoose");

const authSchema= new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hash: { type: String, required: true, minlength: 3, maxlength: 1024 },
})

const AuthModel=mongoose.model("User",authSchema)

module.exports=AuthModel;
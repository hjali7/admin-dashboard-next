import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        require : true ,
        unique : true,
        min : 3 ,
        max : 20
    },
    email : {
        type : String,
        require : true ,
        unique : true,
    },
    password : {
        type : String ,
        require : true,
    },
    img : {
        type : String ,
    },
    isAdmin : {
        type : Boolean ,
        default : false,
    },
    isActive : {
        type : Boolean ,
        default : true,
    },
    address : {
        type : String ,
    },
} , 
{timestamps : true});

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    img : {
        type : String ,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    color: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    stock: {
      type: Number,
      min: 0,
      require: true,
    },
    size: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User" , userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product" , productSchema);
// const mongoose=require("mongoose")
import mongoose from "mongoose";
const restaurantSchema= new mongoose.Schema({
    // id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    Type:{type:String,required:true},
    Location:{type:String,required:true},
    Rating:{type:Number,required:true,min:[0,"Min is 0"],max:[5,"Max is 5"]},
    Top_food:{type:String,required:true}
})
// const restaurant=mongoose.model('restaurant',restaurantSchema)
export default mongoose.model('restaurant', restaurantSchema)
// module.exports=restaurant;
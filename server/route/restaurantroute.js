import express from 'express';
import {createRestaurant,getAllRestaurant,updateRestaurant,deleteRestaurant} from '../controller/restaurantcontroller.js';
const route=express.Router();
route.post("/create",createRestaurant);
route.get("/getall",getAllRestaurant);
route.put("/update/:id",updateRestaurant);
route.delete("/delete/:id",deleteRestaurant);
export default route;
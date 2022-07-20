import mongoose from "mongoose";
//import dotenv from 'dotenv';

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

// Can use type guard
//const MONGO_URI: string = process.env.MONGOURI !== undefined? process.env.MONGOURI : '';

mongoose.connect(MONGO_URI ?? '')
.then(()=> console.log("Successfully connect to MongoDB  - ReduxS3: ", MONGO_URI))
.catch(()=> console.log("Failed to connect to MongoDB ", MONGO_URI))

module.exports = mongoose.connection
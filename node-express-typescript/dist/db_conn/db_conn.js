"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//import dotenv from 'dotenv';
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
// Can use type guard
//const MONGO_URI: string = process.env.MONGOURI !== undefined? process.env.MONGOURI : '';
mongoose_1.default.connect(MONGO_URI !== null && MONGO_URI !== void 0 ? MONGO_URI : '')
    .then(() => console.log("Successfully connect to MongoDB  - ReduxS3: ", MONGO_URI))
    .catch(() => console.log("Failed to connect to MongoDB ", MONGO_URI));
module.exports = mongoose_1.default.connection;

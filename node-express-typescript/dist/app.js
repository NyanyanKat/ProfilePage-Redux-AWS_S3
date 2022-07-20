"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require('dotenv').config();
//access-control-allow-origin
const cors = require('cors');
app.use(cors());
//resolve req data
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
const routes = require('./routes');
app.use(routes);
app.get('/', (req, resp) => {
    resp.send('OK');
});
exports.default = app;

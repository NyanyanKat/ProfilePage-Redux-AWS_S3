"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
//import dotenv from 'dotenv';
// import UserInfo from "./model/UserInfo";
const db = require('./db_conn/db_conn');
const port = process.env.PORT;
// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server is running');
// });
db.once('open', () => {
    app_1.default.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
});
// const user = UserInfo;

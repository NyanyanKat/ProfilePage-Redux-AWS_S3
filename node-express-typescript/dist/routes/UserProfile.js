"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { user } from 'os';
const UserInfo_1 = __importDefault(require("../model/UserInfo"));
const router = express_1.default.Router();
router.get('/', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const userinfo = yield UserInfo_1.default.find({}).sort({ name: 1 });
    return resp.status(201).send(JSON.stringify(userinfo));
}));
module.exports = router;

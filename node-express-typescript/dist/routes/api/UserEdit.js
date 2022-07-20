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
const UserInfo_1 = __importDefault(require("../../model/UserInfo"));
const userEditRouter = require('express').Router();
userEditRouter.put('/:id', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield UserInfo_1.default.findOneAndUpdate({ id: id }, req.body);
    if (!user) {
        return resp.status(404).send({
            message: 'User Not Found!'
        });
    }
    return resp.status(201).send({
        message: 'User updated successfully'
    });
}));
module.exports = userEditRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserInfo_1 = __importDefault(require("../../model/UserInfo"));
const userDeleteRouter = require('express').Router();
userDeleteRouter.delete('/:id', (req, resp) => {
    const id = req.params.id;
    //const {name} = req.body;
    UserInfo_1.default.findOneAndDelete({ id: id }, function (err, found) {
        if (!err && found) {
            console.log(found);
            resp.status(201).send({
                message: `User with id=${id} has been deleted`
            });
        }
        else {
            resp.status(401).send({
                message: `User with id=${id} NOT FOUND!!`
            });
        }
    });
    // if (!user) {
    //     return resp.status(404).send({
    //         message: `User with id=${id} Not Found!`
    //     })
    // }
    // return resp.status(201).send({
    //     message: `User with id=${id} has been deleted!`
    // })
});
module.exports = userDeleteRouter;

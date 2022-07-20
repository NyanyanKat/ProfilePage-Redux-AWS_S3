import express, {Request, Response} from 'express';
//import { user } from 'os';
import UserInfo from "../../model/UserInfo";

const userRouter = require('express').Router();

userRouter.get('/', async (req: Request, resp: Response) => {
    const userinfo = await UserInfo.find({}).sort({name: 1});
    console.log(userinfo);
    return resp.status(200).send(JSON.stringify(userinfo));
})


module.exports = userRouter;
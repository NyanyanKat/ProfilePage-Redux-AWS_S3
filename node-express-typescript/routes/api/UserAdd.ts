import express, {Request, Response} from 'express';

import UserInfo from '../../model/UserInfo';


const userAddRouter = require('express').Router();

userAddRouter.post('/', async (req: Request, resp: Response) => {
    const {id, profilePic, name, email, phone} = req.body;

    try {
        await UserInfo.create(req.body);
        resp.status(200).send(`Successfully added user ${name}`);
    }
    catch (e: any) {
        resp.status(400).send(e.message);
    }
})

module.exports = userAddRouter;
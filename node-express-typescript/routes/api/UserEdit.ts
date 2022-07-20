import express, {Request, Response} from 'express';
import UserInfo from '../../model/UserInfo';

const userEditRouter = require('express').Router();

userEditRouter.put('/:id', async (req: Request, resp: Response) => {
    const id = req.params.id;
    const user = await UserInfo.findOneAndUpdate({id:id}, req.body);
    if (!user) {
        return resp.status(404).send({
            message: 'User Not Found!'
        })
    }
    return resp.status(201).send({
        message: 'User updated successfully'
    })
})

module.exports = userEditRouter;
import express, {Request, Response} from 'express';
import UserInfo from '../../model/UserInfo';

const userDeleteRouter = require('express').Router();

userDeleteRouter.delete('/:id', (req: Request, resp: Response) => {
    const id = req.params.id;
    //const {name} = req.body;
    UserInfo.findOneAndDelete({id:id}, function(err:any, found:any) {
        if (!err && found) {
            console.log(found);
            resp.status(201).send({
                message: `User with id=${id} has been deleted`
            })
        }
        else {
            resp.status(401).send({
                message: `User with id=${id} NOT FOUND!!`
            })
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
})

module.exports = userDeleteRouter;
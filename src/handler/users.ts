import express, {Request, Response} from 'express'
import {User, Users} from '../models/user'
import jwt from 'jsonwebtoken'
import verifyAuthToken from './utility'

const userRoutes = (app: express.Application) => {
    app.get('/users',verifyAuthToken,index)
    app.get('/users/:id',verifyAuthToken, show)
    app.post('/users', create)     
    app.post('/users/authenticate', authenticate) 
}

const store = new Users()

const index = async(_req: Request, res: Response) => {
    const users = await store.index()
    res.json(users)
}

const show = async(_req: Request, res: Response) => {
    const user = await store.show(_req.params.id)
    res.json(user)
}

const create = async (req: Request, res: Response) => {
    const user: User = {
        firstname: req.body.firstname,       
        lastname:  req.body.lastname,
        password: req.body.password
    }
    try {
        const newUser = await store.create(user)
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token)        
    } catch(error) {
        res.status(400)
        res.json(`${error},${user}`)
    }
}

const destroy = async (_req: Request, res: Response) => {
    const deleted = await store.delete(_req.params.id)
    res.json(deleted)
}

 
const authenticate = async (req: Request, res: Response) => {
    const user: User = {
        firstname: req.body.firstname,       
        lastname: req.body.lastname,
        password: req.body.password
    }
    try {
        
        const u = await store.authenticate(user.firstname, user.lastname, user.password)
        console.log(u)
        var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET as string);
        res.json(token)        
    } catch(error) {
        res.status(401)
        res.json(error)
    }
  }

export default userRoutes
import express, {Request, Response} from 'express'
import {User, Users} from '../models/user'
import jwt from 'jsonwebtoken'
import verifyAuthToken from './utility'
//import { TokenInterface } from './token'


const userRoutes = (app: express.Application) => {
    app.get('/users', index)
    app.get('/users/:id', show)
    app.post('/users', create)
    app.delete('/users/:id',verifyAuthToken, destroy)
    //app.put('/users/:id',verifyAuthToken,update)
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


// const update = async (req: Request, res: Response) => {
//     const user: User = {
//         id: parseInt(req.params.id),
//         firstname: req.body.firstname,
//         lastname:req.body.lastname,
//         password: req.body.password,
//     }
  
      
//     try {
//         const authorizationHeader = req.headers.authorization as string
//         const token = authorizationHeader.split(' ')[1]
//         const decoded= jwt.verify(token, process.env.TOKEN_SECRET as string)
//         console.log(decoded)
//         if(decoded.id !== user.id) {
//             throw new Error('User id does not match!')
//         }
//     } catch(err) {
//         res.status(401)
//         res.json(err)
//         return
//     }
//     try {
//         const updated = await store.create(user)
//         res.json(updated)
//     } catch(err) {
//         res.status(400)
//         res.json(err + user)
//     }
// }
 
const authenticate = async (req: Request, res: Response) => {
    const user: User = {
        firstname: req.body.firstname,       
        lastname: req.body.lastname,
        password: req.body.password
    }
    try {
        const u = await store.authenticate(user.firstname, user.lastname, user.password)
        var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET as string);
        res.json(token)
        
    } catch(error) {
        res.status(401)
        res.json(error)
    }
  }


export default userRoutes
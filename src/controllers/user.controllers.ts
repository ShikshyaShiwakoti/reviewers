import { NextFunction, Request, Response } from "express";
import * as UserService from '../services/user.services'
import { number } from "zod";
import Httpstatus from 'http-status-codes';
export const createUser = async (req: Request,res: Response, next: NextFunction) =>{
const user: any = req.body
console.log(req.body, "is request body")
const users = await UserService.createUser(user)
res.status(Httpstatus.CREATED).send(users)
}
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password }: { email: string; password: string } =
            req.body
        const { accessToken, refreshToken} = await UserService.login(email, password)
        res.cookie('refreshToken', refreshToken, {httpOnly: true})
        res.json(accessToken)
    } catch (error) {
        next(error)
    }
  }
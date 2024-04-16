//import { NextFunction, Request, Response } from "express"
//import * as TodoService from '../services/todo.service'
//export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  //const activeStatus = req.query.active
  //const todos = await TodoService.getTodos(Boolean(activeStatus))
  //res.send(todos)
//}

//export const create = async (req: Request, res: Response, next: NextFunction) => {
  //const todo: any = req.body
  //console.log(req.body, ' is request body')
  //const todos = await TodoService.create(todo)
  //res.send(todos)
//}



//export const update = (req: Request, res: Response, next: NextFunction) => {
  //const todo: any = req.body
  //const id = Number(req.params.id)
 // const todos = TodoService.update(id, todo)
  //res.send(todos)
//}
//export const remove = (req: Request, res: Response, next: NextFunction) => {
  //const id = Number(req.params.id)
  //console.log(id, ' request params ko id yo ho hai')
  //const todos = TodoService.remove(id)
  //res.send(todos)
//}


//export const findByID = async(req: Request, res: Response, next: NextFunction) => {
  //const id = Number(req.params.id)
  //try{
    //const todos = await TodoService.getTodoById(id)
    //res.send(todos)
  //} catch(e: any) {
    //console.log('controller ma ayo?')
    //next(e)

    
 // }
//}
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction,Request,Response } from "express"
import * as TodoService from '../services/todo.service'
import { number } from "zod"
import HttpStatus from 'http-status-codes';

export const getAll = async(req: Request,res: Response,next: NextFunction)=>{
    const activeStatus = req.query.active
    const todos =await TodoService.getTodos(Boolean(activeStatus))
    res.send(todos)
}

export const create =async(req: Request, res:Response, next: NextFunction) =>{
    try{
      const todo: any  = req.body
    console.log(req.body,'is request body')
    const loggedInUserId = (req as any).user.userId
    const todos =await TodoService.postTodos(req.body, loggedInUserId )
    res.status(HttpStatus.CREATED).send(todos)
    } catch(e){
      next(e)
    }
}

export const update = async (req: Request, res:Response, next:NextFunction)  =>{
  const todo:any  = req.body
  const id = Number(req.params.id)
 try{
  
const todos = await TodoService.update(id,todo)
res.status(HttpStatus.NO_CONTENT).send(todos)

 }catch(err){
  next(err)
 }
}


  export const remove = async  (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    console.log(id, ' request params ko id yo ho hai')
    try {
    const todos = await TodoService.remove(id)
    res.status(HttpStatus.NO_CONTENT).send()
  }catch(err){
    next(err)
  }
  }
  export const Get = async (req: Request,res: Response,next: NextFunction)=>{
    
    const id = Number(req.params.id) 
    console.log(id)

    try{
    const todos = await TodoService.Get(id)
    res.status(HttpStatus.NOT_FOUND).send(todos)
    }catch(err){
next(err)
    }

}









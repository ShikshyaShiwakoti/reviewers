import { Prisma, PrismaClient } from "@prisma/client";
import  Boom  from "@hapi/boom";
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { z } from "zod";
import { createUserDtoBody } from "../validators/create-user.validators";
const prisma = new PrismaClient();
export const createUser = async (body: z.infer<typeof createUserDtoBody>) => {
  const{name,email,password,isAdmin}=body
    console.log('are we here?')
    try{
      return await prisma.user.create({
        data: {
          email,
          password: await bcrypt.hash(password as string,10),
          isAdmin
        },
      })
    } catch(err:any) {
      console.log(err)
      if(err.code ==='P2002') {
        //throw new Error 
        throw Boom.notFound('Email Unique contraint failed')
      }else {
        throw err
      }
    }
  }
  export async function login(email: string, password: string) {
    let user;
    try{
  user = await prisma.user.findFirstOrThrow({ where: { email } })

} catch(e: any){
    if(e.code == 'P2025') {
      throw Boom.notFound('user not found')
    } 
    throw e;
}    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        // Password does not match
        // If you want to throw a http error, you can. This is throw internal server error
        throw Error('Password not correct')
    }

    // Generate a token
    const accessToken =  jwt.sign(
      { userId: user.id, isAdmin: user.isAdmin },
      process.env.ACCESS_TOKEN_KEY as string,
      {
          expiresIn: '5m',
      }
  )
    const refreshToken =  jwt.sign(
        { userId: user.id, isAdmin: user.isAdmin },
        process.env.REFRESH_TOKEN_KEY as string,
        {
            expiresIn: '7d',
        }
    )

    // Return the token to the client
    return { success: true, accessToken, refreshToken }
}
export const remove = async (userId: any) =>{
  try{
      return  await prisma.user.delete({where: {id:userId}})

  }catch(err:any){
     
  
  console.log(err)
  if(err.code === 'P2003'){
  throw Boom.notFound("Todos delete garnu hola pahila ")
}else{
throw err
}
}
}
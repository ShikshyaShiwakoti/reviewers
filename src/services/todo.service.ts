// // //import  Boom  from "@hapi/boom"
// // //import { PrismaClient } from "@prisma/client"

// // //const prisma = new PrismaClient()

// // //export const getTodos = (active: boolean) => {
// //    // return prisma.todo.findMany()
// //   //}
  
// //   //export const getTodoById = async (id: number) =>{ 
   
// //   //try{
// //    // return await prisma.todo.findFirstOrThrow({where: {id}})
// //   //}catch(err: any){
// //     //console.log(err.code, 'this should be 202025')
// if(err.code==='P2025'){
//  console.log('ke vyraxa ya?')
//        throw Boom.notFound('post not found')
//      }else{
//        throw err

// }
    
// }
  
// }
//   export const create = async (todo: any) => {
//      console.log(todo);
//      await prisma.todo.create({

//        data: {
//          userId:3,
//          name: todo.name,
//          active: true
//        }
//      })
//      return 'create garne api'
//   }
  
  
  
// export const update = async (id: number, todo: any) => {
//        await prisma.todo.update({
//         data:{
//          name: todo.name,
//           active: true
//         },
//         where:{
//             id: id
//        }
//       })
//   }
  
  
  
// export const remove = async ( id: number ) => {
// await prisma.todo.delete ({ where: { id: 1 } })
//  }
//   /* eslint-disable @typescript-eslint/no-unused-vars */
//  import { Prisma, PrismaClient } from "@prisma/client"
//  import  Boom from "@hapi/boom";
//  const prisma = new PrismaClient();

//  export async function mainseender() {
//      try{
//          await prisma.todo.delete({where: {id:2}})
//      } catch(err){
//          console.log(err, " testing hudai xa ")
//      }
    
//  }

//  export const getTodos = async(active: boolean) => {
//      return prisma.todo.findMany()
//  }


//  export const update = async (id: number, todo: any) => {
//  try {
//     return await prisma.todo.update({
//      data:{
//          name:todo.name,
//          active : true
//      },
   
//      where:{
//          id: Number(id) 
//      }
//  })
//  }catch (err: any){
//       console.log("Error po aayo haii hajur ") 
//      console.log(err)
//   if(err.code === 'P2025'){
//      throw Boom.notFound("Change garna khojeko data xaina haii hajur")
//  }else{
//    throw (err)
//  }
//  }
//  }


// export const postTodos = async (body:any, userId:number) =>{
//    try{
//      return await prisma.todo.create({  
//        data: {
//            userId: userId,
//            name: body.name,
//            active: body.active
//    }
//  })
//    }catch(e:any){
//      console.log('errrorororororor', e)
//      throw Boom.forbidden("post garna mildaina")
   
//          }
        
    
  
//  }

// export const update  = async (id: string, todo: any) => {
   
//          await prisma.todo.update({where: {id:2}})

    
//  }

//  export const remove = async (id: any) =>{
//      try{
//          return  await prisma.todo.delete({where: {id:id}})

//      }catch(err:any){
       
    
//      console.log(err)
//      if(err.code === 'P2025'){
//      throw Boom.notFound("DATA NOT FOUND TO DELETE")
//  }else{
//    throw err
//  }
//  }
//  }

//  export const Get = async (id: number ) =>{
//      try{
//           return await prisma.todo.findFirstOrThrow({
//              where:{id:Number(id) },
//          })
//          return "Naya Api banyo"
//      } catch (err: any){
//        console.log("Error po aayo haii hajur ") 
//        console.log(err)
//        if(err.code === 'P2025'){
//        throw Boom.notFound("ERROR DATA NOT FOUND")
//  }else{
//      throw err
//  }
//  }
//  }
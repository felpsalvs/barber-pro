import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({name, email, password}: UserRequest){
   if(!email){
      throw new Error("Email incorrect");
   }

   const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
   })

   if(userAlreadyExists){
      throw new Error("User/Email already exists");
   }

   return { ok: 'ok'}
  }
}

export { CreateUserService }
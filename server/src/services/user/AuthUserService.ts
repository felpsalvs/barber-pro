import prismaClient from "../../prisma";

interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    /* const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    } */
    console.log(email, password)

    return {opa: 'opa'}
  }
}

export { AuthUserService };
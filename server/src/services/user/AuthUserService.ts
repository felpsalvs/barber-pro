import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      include: {
        subscriptions: true,
      },
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }
    
    const passwordMatch = await compare(password, user?.password);

    return {opa: 'opa'}
  }
}

export { AuthUserService };
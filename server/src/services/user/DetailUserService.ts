import prismaClient from "../../prisma";

class UserDetailService {
  async execute(user_id: string) {
    return { user_id: user_id };
  }
}

export { UserDetailService };

import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  user_id: string;
  endereco: string;
}

class UpdateUserService {
  async execute({ name, user_id, endereco }: UserRequest) {
    try {
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
      });

      if (!userAlreadyExists) {
        throw new Error("User not exists");
      }

      const userUpdated = await prismaClient.user.update({
        where: {
          id: user_id,
        },
        data: {
          name,
          endereco,
        },
        select: {
          name: true,
          endereco: true,
          email: true,
        },
      });

      return userUpdated;
    } catch (err) {
      console.log(err);
      throw new Error("Error an update the user");
    }
  }
}

export { UpdateUserService };

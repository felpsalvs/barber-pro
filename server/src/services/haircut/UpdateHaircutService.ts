import prismaClient from "../../prisma";

interface HaircutRequest {
  user_id: string;
  name: string;
  haircut_id: string;
  price: number;
  status: boolean | string;
}

class UpdateHaircutService {
  async execute({
    user_id,
    name,
    haircut_id,
    price,
    status = true,
  }: HaircutRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    if (user?.subscriptions?.status !== "active") {
      throw new Error("Not authorized");
    }

    const haircut = await prismaClient.haircut.update({
      where: {
        id: haircut_id,
      },
      data: {
        name: name,
        price: price,
        status: status === true ? true : false,
      },
    });
    return haircut;
  }
}
export { UpdateHaircutService };

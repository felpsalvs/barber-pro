import prismaClient from "../../prisma";

interface HaircutRequest {
  name: string;
  user_id: string;
  price: number;
}

class CreateHaircutService {
  async execute({ name, user_id, price }: HaircutRequest) {
    if(!name || !price){
      throw new Error("Error")
    }

    //check which models this user has
    const myHaircuts = await prismaClient.haircut.count({
      where: {
        user_id: user_id,
      },
    });

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    //create validation or limit
    if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
      throw new Error("Not authorized")
    }

    const haircut = await prismaClient.haircut.create({
      data: {
        name: name,
        user_id: user_id,
        price: price,
      },
    });

    return haircut;
  }
}

export { CreateHaircutService };
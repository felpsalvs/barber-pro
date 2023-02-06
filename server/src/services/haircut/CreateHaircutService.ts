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
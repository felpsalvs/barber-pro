interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({name, email, password}: UserRequest){
    console.log(name, email)
    return { message: "Hello"}
  }
}

export { CreateUserService }
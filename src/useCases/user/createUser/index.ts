import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const repository = new InMemoryUserRepository()

const createUserUseCase = new CreateUserUseCase(repository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }
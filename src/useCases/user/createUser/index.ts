import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUserRepository } from "../../../db/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const repository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(repository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }
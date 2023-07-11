import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUserRepository } from "../../../db/implementations/PostgresUserRepository";
import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

const repository = new PostgresUserRepository()

const updateUserUseCase = new UpdateUserUseCase(repository)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController, updateUserUseCase }
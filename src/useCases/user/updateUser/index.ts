import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

const repository = new InMemoryUserRepository()

const updateUserUseCase = new UpdateUserUseCase(repository)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController, updateUserUseCase }
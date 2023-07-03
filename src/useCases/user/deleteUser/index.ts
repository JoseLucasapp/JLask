import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const repository = new InMemoryUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(repository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController, deleteUserUseCase }
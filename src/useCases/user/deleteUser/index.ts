import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUserRepository } from "../../../db/implementations/PostgresUserRepository";
import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const repository = new PostgresUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(repository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController, deleteUserUseCase }
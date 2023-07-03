import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { FindUserByIdController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

const repository = new InMemoryUserRepository()

const findUserByIdUseCase = new FindUserByIdUseCase(repository)
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase)

export { findUserByIdController, findUserByIdUseCase }
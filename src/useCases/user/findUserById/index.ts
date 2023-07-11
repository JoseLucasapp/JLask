import { InMemoryUserRepository } from "../../../../test/in-memory-user-repository";
import { PostgresUserRepository } from "../../../db/implementations/PostgresUserRepository";
import { FindUserByIdController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

const repository = new PostgresUserRepository()

const findUserByIdUseCase = new FindUserByIdUseCase(repository)
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase)

export { findUserByIdController, findUserByIdUseCase }
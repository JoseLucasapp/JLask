import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { PostgresAnswerRepository } from "../../../db/implementations/PostgresAnswerRepository"
import { FindAnswerByIdController } from "./FindAnswerByIdController"
import { FindAnswerByIdUseCase } from "./FindAnswerByIdUseCase"
const repository = new PostgresAnswerRepository()

const findAnswerByIdUseCase = new FindAnswerByIdUseCase(repository)
const findAnswerByIdController = new FindAnswerByIdController(findAnswerByIdUseCase)

export { findAnswerByIdController, findAnswerByIdUseCase }
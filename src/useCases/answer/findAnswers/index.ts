import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { PostgresAnswerRepository } from "../../../db/implementations/PostgresAnswerRepository"
import { FindAllAnswersController } from "./FindAnswersController"
import { FindAllAnswersUseCase } from "./FindAnswersUseCase"

const repository = new PostgresAnswerRepository()

const findAllAnswersUseCase = new FindAllAnswersUseCase(repository)
const findAllAnswersController = new FindAllAnswersController(findAllAnswersUseCase)

export { findAllAnswersController, findAllAnswersUseCase }
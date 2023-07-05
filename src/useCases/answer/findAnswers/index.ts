import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { FindAllAnswersController } from "./FindAnswersController"
import { FindAllAnswersUseCase } from "./FindAnswersUseCase"

const repository = new InMemoryAnswerRepository()

const findAllAnswersUseCase = new FindAllAnswersUseCase(repository)
const findAllAnswersController = new FindAllAnswersController(findAllAnswersUseCase)

export { findAllAnswersController, findAllAnswersUseCase }
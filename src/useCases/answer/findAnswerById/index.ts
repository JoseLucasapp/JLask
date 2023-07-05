import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { FindAnswerByIdController } from "./FindAnswerByIdController"
import { FindAnswerByIdUseCase } from "./FindAnswerByIdUseCase"
const repository = new InMemoryAnswerRepository()

const findAnswerByIdUseCase = new FindAnswerByIdUseCase(repository)
const findAnswerByIdController = new FindAnswerByIdController(findAnswerByIdUseCase)

export { findAnswerByIdController, findAnswerByIdUseCase }
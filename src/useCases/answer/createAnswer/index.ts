import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { CreateAnswerController } from "./CreateAnswerController"
import { CreateAnswerUseCase } from "./CreateAnswerUseCase"

const repository = new InMemoryAnswerRepository()

const createAnswerUseCase = new CreateAnswerUseCase(repository)
const createAnswerController = new CreateAnswerController(createAnswerUseCase)

export { createAnswerController, createAnswerUseCase }
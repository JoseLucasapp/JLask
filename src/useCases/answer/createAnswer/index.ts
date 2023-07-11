import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { PostgresAnswerRepository } from "../../../db/implementations/PostgresAnswerRepository"
import { CreateAnswerController } from "./CreateAnswerController"
import { CreateAnswerUseCase } from "./CreateAnswerUseCase"

const repository = new PostgresAnswerRepository()

const createAnswerUseCase = new CreateAnswerUseCase(repository)
const createAnswerController = new CreateAnswerController(createAnswerUseCase)

export { createAnswerController, createAnswerUseCase }
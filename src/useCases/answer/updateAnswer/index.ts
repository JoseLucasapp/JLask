import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { PostgresAnswerRepository } from "../../../db/implementations/PostgresAnswerRepository"
import { UpdateAnswerController } from "./UpdateAnswerController"
import { UpdateAnswerUseCase } from "./UpdateAnswerUseCase"

const repository = new PostgresAnswerRepository()

const updateAnswerUseCase = new UpdateAnswerUseCase(repository)
const updateAnswerController = new UpdateAnswerController(updateAnswerUseCase)

export { updateAnswerController, updateAnswerUseCase }
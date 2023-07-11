import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { PostgresAnswerRepository } from "../../../db/implementations/PostgresAnswerRepository"
import { DeleteAnswerController } from "./DeleteAnswerController"
import { DeleteAnswerUseCase } from "./DeleteAnswerUseCase"

const repository = new PostgresAnswerRepository()

const deleteAnswerUseCase = new DeleteAnswerUseCase(repository)
const deleteAnswerController = new DeleteAnswerController(deleteAnswerUseCase)

export { deleteAnswerController, deleteAnswerUseCase }
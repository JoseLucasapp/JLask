import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { DeleteAnswerController } from "./DeleteAnswerController"
import { DeleteAnswerUseCase } from "./DeleteAnswerUseCase"

const repository = new InMemoryAnswerRepository()

const deleteAnswerUseCase = new DeleteAnswerUseCase(repository)
const deleteAnswerController = new DeleteAnswerController(deleteAnswerUseCase)

export { deleteAnswerController, deleteAnswerUseCase }
import { InMemoryAnswerRepository } from "../../../../test/in-memory-answer-repository"
import { UpdateAnswerController } from "./UpdateAnswerController"
import { UpdateAnswerUseCase } from "./UpdateAnswerUseCase"

const repository = new InMemoryAnswerRepository()

const updateAnswerUseCase = new UpdateAnswerUseCase(repository)
const updateAnswerController = new UpdateAnswerController(updateAnswerUseCase)

export { updateAnswerController, updateAnswerUseCase }
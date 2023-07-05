import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { DeleteQuestionController } from "./DeleteQuestionController"
import { DeleteQuestionUseCase } from "./DeleteQuestionUseCase"

const repository = new InMemoryQuestionRepository()

const deleteQuestionUseCase = new DeleteQuestionUseCase(repository)
const deleteQuestionController = new DeleteQuestionController(deleteQuestionUseCase)

export { deleteQuestionController, deleteQuestionUseCase }
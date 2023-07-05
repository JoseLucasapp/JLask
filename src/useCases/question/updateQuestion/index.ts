import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { UpdateQuestionController } from "./UpdateQuestionController"
import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase"

const repository = new InMemoryQuestionRepository()

const updateQuestionUseCase = new UpdateQuestionUseCase(repository)
const updateQuestionController = new UpdateQuestionController(updateQuestionUseCase)

export { updateQuestionController, updateQuestionUseCase }
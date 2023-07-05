import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { CreateQuestionController } from "./CreateQuestionController"
import { CreateQuestionUseCase } from "./CreateQuestionUseCase"

const repository = new InMemoryQuestionRepository()

const createQuestionUseCase = new CreateQuestionUseCase(repository)
const createQuestionController = new CreateQuestionController(createQuestionUseCase)

export { createQuestionController, createQuestionUseCase }
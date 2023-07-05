import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { FindAllQuestionsController } from "./FindAllQuestionsController"
import { FindAllQuestionsUseCase } from "./FindAllQuestionsUseCase"

const repository = new InMemoryQuestionRepository()

const findAllQuestionsUseCase = new FindAllQuestionsUseCase(repository)
const findAllQuestionsController = new FindAllQuestionsController(findAllQuestionsUseCase)

export { findAllQuestionsController, findAllQuestionsUseCase }
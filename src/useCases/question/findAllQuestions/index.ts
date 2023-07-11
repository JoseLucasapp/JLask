import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { PostgresQuestionRepository } from "../../../db/implementations/PostgresQuestionRepository"
import { FindAllQuestionsController } from "./FindAllQuestionsController"
import { FindAllQuestionsUseCase } from "./FindAllQuestionsUseCase"

const repository = new PostgresQuestionRepository()

const findAllQuestionsUseCase = new FindAllQuestionsUseCase(repository)
const findAllQuestionsController = new FindAllQuestionsController(findAllQuestionsUseCase)

export { findAllQuestionsController, findAllQuestionsUseCase }
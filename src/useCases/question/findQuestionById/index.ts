import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { FindQuestionByIdController } from "./FindQuestionByIdController"
import { FindQuestionByIdUseCase } from "./FindQuestionByIdUseCase"

const repository = new InMemoryQuestionRepository()

const findQuestionByIdUseCase = new FindQuestionByIdUseCase(repository)
const findQuestionByIdController = new FindQuestionByIdController(findQuestionByIdUseCase)

export { findQuestionByIdController, findQuestionByIdUseCase }
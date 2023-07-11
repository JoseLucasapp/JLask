import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { PostgresQuestionRepository } from "../../../db/implementations/PostgresQuestionRepository"
import { FindQuestionByIdController } from "./FindQuestionByIdController"
import { FindQuestionByIdUseCase } from "./FindQuestionByIdUseCase"

const repository = new PostgresQuestionRepository()

const findQuestionByIdUseCase = new FindQuestionByIdUseCase(repository)
const findQuestionByIdController = new FindQuestionByIdController(findQuestionByIdUseCase)

export { findQuestionByIdController, findQuestionByIdUseCase }
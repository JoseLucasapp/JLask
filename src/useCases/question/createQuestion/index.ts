import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { PostgresQuestionRepository } from "../../../db/implementations/PostgresQuestionRepository"
import { CreateQuestionController } from "./CreateQuestionController"
import { CreateQuestionUseCase } from "./CreateQuestionUseCase"

const repository = new PostgresQuestionRepository()

const createQuestionUseCase = new CreateQuestionUseCase(repository)
const createQuestionController = new CreateQuestionController(createQuestionUseCase)

export { createQuestionController, createQuestionUseCase }
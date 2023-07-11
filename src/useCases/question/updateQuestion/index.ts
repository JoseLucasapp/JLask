import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { PostgresQuestionRepository } from "../../../db/implementations/PostgresQuestionRepository"
import { UpdateQuestionController } from "./UpdateQuestionController"
import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase"

const repository = new PostgresQuestionRepository()

const updateQuestionUseCase = new UpdateQuestionUseCase(repository)
const updateQuestionController = new UpdateQuestionController(updateQuestionUseCase)

export { updateQuestionController, updateQuestionUseCase }
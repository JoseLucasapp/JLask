import { InMemoryQuestionRepository } from "../../../../test/in-memory-question-repository"
import { PostgresQuestionRepository } from "../../../db/implementations/PostgresQuestionRepository"
import { DeleteQuestionController } from "./DeleteQuestionController"
import { DeleteQuestionUseCase } from "./DeleteQuestionUseCase"

const repository = new PostgresQuestionRepository()

const deleteQuestionUseCase = new DeleteQuestionUseCase(repository)
const deleteQuestionController = new DeleteQuestionController(deleteQuestionUseCase)

export { deleteQuestionController, deleteQuestionUseCase }
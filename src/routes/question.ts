import { Request, Response, Router } from "express";
import { createQuestionController } from "../useCases/question/createQuestion";
import { findAllQuestionsController } from "../useCases/question/findAllQuestions";
import { findQuestionByIdController } from "../useCases/question/findQuestionById";
import { updateQuestionController } from "../useCases/question/updateQuestion";
import { deleteQuestionController } from "../useCases/question/deleteQuestion";

const questionRouter = Router()

questionRouter.post('/question', (request: Request, response: Response) => {
    return createQuestionController.handle(request, response)
})
questionRouter.get('/question', (request: Request, response: Response) => {
    return findAllQuestionsController.handle(request, response)
})
questionRouter.get('/question/:id', (request: Request, response: Response) => {
    return findQuestionByIdController.handle(request, response)
})
questionRouter.put('/question/:id', (request: Request, response: Response) => {
    return updateQuestionController.handle(request, response)
})
questionRouter.delete('/question/:id', (request: Request, response: Response) => {
    return deleteQuestionController.handle(request, response)
})

export { questionRouter }
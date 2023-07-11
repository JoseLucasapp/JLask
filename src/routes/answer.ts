import { NextFunction, Request, Response, Router } from "express";
import { createAnswerController } from "../useCases/answer/createAnswer";
import { findAllAnswersController } from "../useCases/answer/findAnswers";
import { findAnswerByIdController } from "../useCases/answer/findAnswerById";
import { deleteAnswerController } from "../useCases/answer/deleteAnswer";
import { updateAnswerController } from "../useCases/answer/updateAnswer";
import { validadeJwt } from "../middleware/loginAuth";

const answerRoutes = Router()


answerRoutes.post('/answer',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return createAnswerController.handle(request, response)
    })

answerRoutes.get('/answer',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return findAllAnswersController.handle(request, response)
    })

answerRoutes.get('/answer/:id',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return findAnswerByIdController.handle(request, response)
    })

answerRoutes.delete('/answer/:id',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return deleteAnswerController.handle(request, response)
    })

answerRoutes.put('/answer/:id',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return updateAnswerController.handle(request, response)
    })


export { answerRoutes }
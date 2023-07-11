import { Response, Router, Request, NextFunction } from "express";
import { createUserController } from "../useCases/user/createUser";
import { findUserByIdController } from "../useCases/user/findUserById";
import { updateUserController } from "../useCases/user/updateUser";
import { deleteUserController } from "../useCases/user/deleteUser";
import { validadeJwt } from "../middleware/loginAuth";

const userRouter = Router()

userRouter.post('/user', (request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

userRouter.get('/user/:id',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return findUserByIdController.handle(request, response)
    })

userRouter.put('/user/:id',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return updateUserController.handle(request, response)
    })

userRouter.delete('/user/:id',
    [(request: Request, response: Response, next: NextFunction) => validadeJwt(request, response, next)],
    (request: Request, response: Response) => {
        return deleteUserController.handle(request, response)
    })

export { userRouter }
import { Response, Router, Request } from "express";
import { createUserController } from "../useCases/user/createUser";
import { findUserByIdController } from "../useCases/user/findUserById";
import { updateUserController } from "../useCases/user/updateUser";
import { deleteUserController } from "../useCases/user/deleteUser";

const userRouter = Router()

userRouter.post('/user', (request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

userRouter.get('/user/:id', (request: Request, response: Response) => {
    return findUserByIdController.handle(request, response)
})

userRouter.get('/user/:id', (request: Request, response: Response) => {
    return updateUserController.handle(request, response)
})

userRouter.get('/user/:id', (request: Request, response: Response) => {
    return deleteUserController.handle(request, response)
})

export { userRouter }
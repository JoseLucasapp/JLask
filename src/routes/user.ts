import { Response, Router, Request } from "express";
import { createUserController } from "../useCases/user/createUser";
import { findUserByIdController } from "../useCases/user/findUserById";
import { updateUserController } from "../useCases/user/updateUser";
import { deleteUserController } from "../useCases/user/deleteUser";

const router = Router()

router.post('/user', (request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

router.get('/user/:id', (request: Request, response: Response) => {
    return findUserByIdController.handle(request, response)
})

router.get('/user/:id', (request: Request, response: Response) => {
    return updateUserController.handle(request, response)
})

router.get('/user/:id', (request: Request, response: Response) => {
    return deleteUserController.handle(request, response)
})
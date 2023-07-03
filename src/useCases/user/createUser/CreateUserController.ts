import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createUserUseCase.execute(request.body)
            return response.status(200).json(ReturnMessages.success)
        } catch (error) {
            return response.status(400).json({
                message: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
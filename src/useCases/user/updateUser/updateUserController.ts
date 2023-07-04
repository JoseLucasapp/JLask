import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const updateUser = await this.updateUserUseCase.execute(parseInt(request.params.id), request.body)
            if (updateUser === ReturnMessages.userNotFound) return response.status(404).json(ReturnMessages.userNotFound)
            return response.status(200).json(updateUser)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
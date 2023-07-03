import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.deleteUserUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(ReturnMessages.delete)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
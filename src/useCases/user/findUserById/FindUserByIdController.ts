import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class FindUserByIdController {
    constructor(private findUserByIdUseCase: FindUserByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.findUserByIdUseCase.execute(parseInt(request.params.id))
            return response.status(200).json(user)
        } catch (error) {
            return response.status(400).json({
                message: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
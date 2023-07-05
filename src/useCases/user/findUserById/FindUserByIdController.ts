import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class FindUserByIdController {
    constructor(private findUserByIdUseCase: FindUserByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.findUserByIdUseCase.execute(parseInt(request.params.id))
            if (!user) return response.status(200).json(ReturnMessages.userNotFound)
            return response.status(200).json({ data: user })
        } catch (error) {
            return response.status(400).json({
                message: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
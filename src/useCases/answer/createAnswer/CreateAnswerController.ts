import { Request, Response } from "express";
import { CreateAnswerUseCase } from "./CreateAnswerUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class CreateAnswerController {
    constructor(private createAnswerUseCase: CreateAnswerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createAnswerUseCase.execute(request.body)
            return response.status(201).json(ReturnMessages.success)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
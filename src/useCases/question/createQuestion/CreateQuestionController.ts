import { Request, Response } from "express";
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class CreateQuestionController {
    constructor(private createQuestionUseCase: CreateQuestionUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.createQuestionUseCase.execute(request.body)

            return response.status(201).json(ReturnMessages.success)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
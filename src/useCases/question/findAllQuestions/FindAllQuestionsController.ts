import { Request, Response } from "express";
import { FindAllQuestionsUseCase } from "./FindAllQuestionsUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class FindAllQuestionsController {
    constructor(private findAllQuestionsUseCase: FindAllQuestionsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const questions = await this.findAllQuestionsUseCase.execute(request.query)

            return response.status(200).json(questions)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
import { Request, Response } from "express";
import { FindQuestionByIdUseCase } from "./FindQuestionByIdUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class FindQuestionByIdController {
    constructor(private findQuestionByIdUseCase: FindQuestionByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const question = await this.findQuestionByIdUseCase.execute(parseInt(request.params.id))
            if (!question) return response.status(200).json(ReturnMessages.notFound)
            return response.status(200).json({ data: question })
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
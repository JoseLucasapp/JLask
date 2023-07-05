import { Request, Response } from "express";
import { FindAnswerByIdUseCase } from "./FindAnswerByIdUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class FindAnswerByIdController {
    constructor(private findAnswerByIdUseCase: FindAnswerByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const answer = await this.findAnswerByIdUseCase.execute(parseInt(request.params.id))
            return response.status(200).json({ data: answer })
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
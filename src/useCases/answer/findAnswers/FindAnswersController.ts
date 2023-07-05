import { Request, Response } from "express";
import { FindAllAnswersUseCase } from "./FindAnswersUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class FindAllAnswersController {
    constructor(private findAllAnswersUseCase: FindAllAnswersUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const answers = await this.findAllAnswersUseCase.execute(request.query)
            return response.status(200).json({ data: answers })
        } catch (error) {
            return response.status(400).json({ error: error || ReturnMessages.UnexpectedError })
        }
    }
}
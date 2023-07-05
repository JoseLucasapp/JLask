import { Request, Response } from "express";
import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class UpdateQuestionController {
    constructor(private updateQuestionUseCase: UpdateQuestionUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateQuestionUseCase.execute(parseInt(request.params.id), parseInt(request.params.user_id), request.body.question)
            return response.status(200).json(ReturnMessages.update)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
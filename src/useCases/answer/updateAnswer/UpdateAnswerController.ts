import { Request, Response } from "express";
import { UpdateAnswerUseCase } from "./UpdateAnswerUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class UpdateAnswerController {
    constructor(private updateAnswerUseCase: UpdateAnswerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.updateAnswerUseCase.execute(parseInt(request.params.id), parseInt(request.params.question_id), request.body.answer)
            return response.status(200).json(ReturnMessages.update)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
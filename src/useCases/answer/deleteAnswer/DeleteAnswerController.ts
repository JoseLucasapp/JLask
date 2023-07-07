import { Request, Response } from "express";
import { DeleteAnswerUseCase } from "./DeleteAnswerUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class DeleteAnswerController {
    constructor(private deleteAnswerUseCase: DeleteAnswerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.deleteAnswerUseCase.execute(parseInt(request.params.id), parseInt(request.params.question_id))
            return response.status(200).json(ReturnMessages.delete)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
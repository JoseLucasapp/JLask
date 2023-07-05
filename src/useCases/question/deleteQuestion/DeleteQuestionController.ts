import { Request, Response } from "express";
import { DeleteQuestionUseCase } from "./DeleteQuestionUseCase";
import { ReturnMessages } from "../../../helpers/utils";

export class DeleteQuestionController {
    constructor(private deleteQuestionUseCase: DeleteQuestionUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.deleteQuestionUseCase.execute(parseInt(request.params.id), parseInt(request.params.user_id))
            return response.status(200).json(ReturnMessages.delete)
        } catch (error) {
            return response.status(400).json({
                error: error || ReturnMessages.UnexpectedError
            })
        }
    }
}
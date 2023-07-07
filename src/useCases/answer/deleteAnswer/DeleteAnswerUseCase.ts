import { IAnswerRepository } from "../../../repositories/IAnswer-repository";

export class DeleteAnswerUseCase {
    constructor(private answerRepository: IAnswerRepository) { }

    async execute(id: number, question_id: number) {
        await this.answerRepository.deleteAnswer(id, question_id)
    }
}
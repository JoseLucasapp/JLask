import { IAnswerRepository } from "../../../repositories/IAnswer-repository";

export class UpdateAnswerUseCase {
    constructor(private answerRepository: IAnswerRepository) { }

    async execute(id: number, question_id: number, answer: string) {
        await this.answerRepository.updateAnswer(id, question_id, answer)
    }
}
import { IQuestionRepository } from "../../../repositories/IQuestion-repository";

export class UpdateQuestionUseCase {
    constructor(private questionRepository: IQuestionRepository) { }

    async execute(id: number, user_id: number, question: string) {
        await this.questionRepository.updateQuestion(id, user_id, question)
    }
}
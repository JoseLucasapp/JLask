import { IQuestionRepository } from "../../../repositories/IQuestion-repository";

export class DeleteQuestionUseCase {
    constructor(private questionRepository: IQuestionRepository) { }

    async execute(id: number, user_id: number) {
        await this.questionRepository.deleteQuestion(id, user_id)
    }
}
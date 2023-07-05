import { IQuestionRepository } from "../../../repositories/IQuestion-repository";

export class FindQuestionByIdUseCase {
    constructor(private questionRepository: IQuestionRepository) { }

    async execute(id: number) {
        return await this.questionRepository.findQuestionById(id)
    }
}
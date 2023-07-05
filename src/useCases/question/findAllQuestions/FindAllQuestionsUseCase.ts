import { IQuestionRepository } from "../../../repositories/IQuestion-repository";

export class FindAllQuestionsUseCase {
    constructor(private questionRepository: IQuestionRepository) { }

    async execute(query: any) {
        return await this.questionRepository.findAllQuestions(query)
    }
}
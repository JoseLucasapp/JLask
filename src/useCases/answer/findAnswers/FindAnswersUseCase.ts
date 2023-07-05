import { IAnswerRepository } from "../../../repositories/IAnswer-repository";

export class FindAllAnswersUseCase {
    constructor(private answerRepository: IAnswerRepository) { }

    async execute(query: any) {
        return await this.answerRepository.findAllAnswers(query)
    }
}
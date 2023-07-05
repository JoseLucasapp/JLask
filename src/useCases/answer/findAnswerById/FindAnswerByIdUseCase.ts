import { IAnswerRepository } from "../../../repositories/IAnswer-repository";

export class FindAnswerByIdUseCase {
    constructor(private answerRepository: IAnswerRepository) { }

    async execute(id: number) {
        return await this.answerRepository.findAnswerById(id)
    }
}
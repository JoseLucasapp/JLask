import { Answer } from "../../../entities/answer-entity";
import { IAnswerRepository } from "../../../repositories/IAnswer-repository";
import { ICreateAnswerRequestDTO } from "./CreateAnswerDTO";

export class CreateAnswerUseCase {
    constructor(private answerRepository: IAnswerRepository) { }

    async execute(data: ICreateAnswerRequestDTO) {
        const answer = new Answer(data)
        await this.answerRepository.save(answer)
    }
}
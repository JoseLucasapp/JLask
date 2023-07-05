import { Question } from "../../../entities/question-entity";
import { IQuestionRepository } from "../../../repositories/IQuestion-repository";
import { ICreateQuestionRequestDTO } from "./CreateQuestionDTO";

export class CreateQuestionUseCase {
    constructor(private questionRepository: IQuestionRepository) { }

    async execute(data: ICreateQuestionRequestDTO) {
        const question = new Question(data)

        await this.questionRepository.save(question)
    }
}
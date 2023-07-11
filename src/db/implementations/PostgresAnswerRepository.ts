import { Answer } from "../../entities/answer-entity";
import { IAnswerRepository } from "../../repositories/IAnswer-repository";

export class PostgresAnswerRepository implements IAnswerRepository {
    async save(data: Answer): Promise<void> {
        await Answer.create({ ...data.dataValues })
    }

    async findAllAnswers(query: any): Promise<Answer[]> {
        return await Answer.findAll({ where: query })
    }

    async findAnswerById(id: number): Promise<Answer | null> {
        return await Answer.findByPk(id)
    }

    async deleteAnswer(id: number, question_id: number): Promise<void> {
        await Answer.destroy({ where: { id: id, question_id: question_id } })
    }

    async updateAnswer(id: number, question_id: number, answer: string): Promise<void> {
        await Answer.update({ answer: answer }, { where: { id: id, question_id: question_id } })
    }
}
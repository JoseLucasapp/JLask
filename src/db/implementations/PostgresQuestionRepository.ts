import { Question } from "../../entities/question-entity";
import { IQuestionRepository } from "../../repositories/IQuestion-repository";

export class PostgresQuestionRepository implements IQuestionRepository {
    async save(data: Question): Promise<void> {
        await Question.create({ ...data.dataValues })
    }

    async findAllQuestions(query: any): Promise<Question[]> {
        return await Question.findAll({ where: query })
    }

    async findQuestionById(id: number): Promise<Question | null> {
        return await Question.findByPk(id)
    }

    async deleteQuestion(id: number, user_id: number): Promise<void> {
        await Question.destroy({ where: { id: id, user_id: user_id } })
    }

    async updateQuestion(id: number, user_id: number, question: string): Promise<void> {
        await Question.update({ question: question }, { where: { id: id, user_id: user_id } })
    }
}
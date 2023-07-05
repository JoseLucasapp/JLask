import { Answer } from "../entities/answer-entity";

export interface IAnswerRepository {
    findAnswerById(id: number): Promise<Answer | null>
    findAllAnswers(query: any): Promise<Answer[]>
    save(data: Answer): Promise<void>
    deleteAnswer(id: number, question_id: number): Promise<void>
    updateAnswer(id: number, question_id: number, answer: string): Promise<void>
}
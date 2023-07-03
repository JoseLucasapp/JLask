import { Question } from "../entities/question-entity";

export interface IQuestionRepository {
    findQuestionById(id: number): Promise<Question | null>
    findAllQuestions(query: any): Promise<Question[]>
    save(data: Question): Promise<void>
    deleteQuestion(id: number, user_id: number): Promise<void>
    updateQuestion(id: number, user_id: number, question: string): Promise<void>
}
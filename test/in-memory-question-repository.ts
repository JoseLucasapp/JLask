import { Question } from "../src/entities/question-entity";
import { IQuestionRepository } from "../src/repositories/IQuestion-repository";

export class InMemoryQuestionRepository implements IQuestionRepository {
    public questions: Question[] = []

    async save(data: Question): Promise<void> {
        this.questions.push(data)
    }

    async findAllQuestions(query: any): Promise<Question[]> {
        return this.questions
    }

    async findQuestionById(id: number): Promise<Question | null> {
        const question = this.questions.find(b => b.id === id)

        if (!question) return null
        return question
    }

    async deleteQuestion(id: number, user_id: number): Promise<void> {
        const question = this.questions.find(b => b.id === id && b.user_id === user_id)
        const position = this.questions.indexOf(question as Question)
        this.questions.splice(position, 1)
    }

    async updateQuestion(id: number, user_id: number, question: string): Promise<void> {
        const questionToUpdate = this.questions.find(b => b.id === id && b.user_id === user_id)
        const position = this.questions.indexOf(questionToUpdate as Question)
        this.questions[position].question = question
    }
}
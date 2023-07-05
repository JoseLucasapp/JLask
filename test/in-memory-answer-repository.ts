import { Answer } from "../src/entities/answer-entity";
import { IAnswerRepository } from "../src/repositories/IAnswer-repository";

export class InMemoryAnswerRepository implements IAnswerRepository {
    public answers: Answer[] = []

    async save(data: Answer): Promise<void> {
        this.answers.push(data)
    }

    async findAllAnswers(query: any): Promise<Answer[]> {
        return this.answers
    }

    async findAnswerById(id: number): Promise<Answer | null> {
        const question = this.answers.find(b => b.id === id)

        if (!question) return null
        return question
    }

    async updateAnswer(id: number, question_id: number, answer: string): Promise<void> {
        const answerToUpdate = this.answers.find(b => b.id === id && b.question_id === question_id)
        const position = this.answers.indexOf(answerToUpdate as Answer)
        this.answers[position].answer = answer
    }

    async deleteAnswer(id: number, question_id: number): Promise<void> {
        const answer = this.answers.find(b => b.id === id && b.question_id === question_id)
        const position = this.answers.indexOf(answer as Answer)
        this.answers.splice(position, 1)
    }
}
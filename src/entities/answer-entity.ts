interface AnswerAttributes {
    id?: number;
    answer: string;
    question_id: number;
}

export class Answer {
    private readonly _id: number;
    public answer: string;
    public question_id: number;

    get id() {
        return this._id
    }

    constructor(props: AnswerAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}
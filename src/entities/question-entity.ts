interface QuestionAttributes {
    id?: number;
    question: string;
    user_id: number;
}

export class Question {
    private readonly _id: number;
    public question!: string;
    public user_id!: number;

    get id() {
        return this._id
    }

    constructor(props: QuestionAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}
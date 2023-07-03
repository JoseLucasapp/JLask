interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    questions: number;
    answers: number;
}

export class User {
    private readonly _id: number;
    public username!: string;
    public password!: string;
    public questions!: number;
    public answers!: number;

    get id() {
        return this._id
    }

    constructor(props: UserAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}
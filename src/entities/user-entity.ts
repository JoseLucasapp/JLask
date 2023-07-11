import { Model, DataTypes } from "sequelize";
import db from "../db/connection";

interface UserAttributes {
    id?: number;
    username: string;
    password: string;
    questions?: number;
    answers?: number;
}
/*
export class User {
    private readonly _id: number;
    public username!: string;
    public password!: string;
    public questions?: number;
    public answers?: number;

    get id() {
        return this._id
    }

    constructor(props: UserAttributes, id?: number) {
        this._id = id ?? 1
        this.answers = props.answers ?? 0
        this.questions = props.questions ?? 0
        Object.assign(this, props)
    }
}
*/

export class User extends Model<UserAttributes>{
    [x: string]: any;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.CHAR(150),
            allowNull: false
        },
        password: {
            type: DataTypes.CHAR(30)
        },
        questions: {
            type: DataTypes.INTEGER,
        },
        answers: {
            type: DataTypes.INTEGER,
        }
    }, {
    sequelize: db,
    tableName: 'users'
}
)
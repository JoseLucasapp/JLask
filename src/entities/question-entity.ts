import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { User } from "./user-entity";

interface QuestionAttributes {
    id?: number;
    question: string;
    user_id: number;
}
/*
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
*/

export class Question extends Model<QuestionAttributes>{
    [x: string]: any;
}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        question: {
            type: DataTypes.CHAR(300),
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
        }
    }, { sequelize: db, tableName: 'questions' }
)

Question.hasMany(User)
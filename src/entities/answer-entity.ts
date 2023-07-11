import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import { Question } from "./question-entity";

interface AnswerAttributes {
    id?: number;
    answer: string;
    question_id: number;
}

/*
export class Answer {
    private readonly _id: number;
    public answer!: string;
    public question_id!: number;

    get id() {
        return this._id
    }

    constructor(props: AnswerAttributes, id?: number) {
        this._id = id ?? Math.random()
        Object.assign(this, props)
    }
}*/

export class Answer extends Model<AnswerAttributes>{
    [x: string]: any;
}

Answer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    answer: {
        type: DataTypes.CHAR(100)
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'questions',
            key: 'id'
        },
    }
}, { sequelize: db, tableName: 'anwers' })

Answer.hasMany(Question)
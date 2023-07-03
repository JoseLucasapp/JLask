export interface ICreateUserRequestDTO {
    username: string;
    password: string;
    questions: number;
    answers: number;
}
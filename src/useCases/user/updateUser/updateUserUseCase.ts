import { User } from "../../../entities/user-entity";
import { ReturnMessages } from "../../../helpers/utils";
import { IUserRepository } from "../../../repositories/IUser-repository";

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number, data: User) {
        const user = await this.userRepository.findUserById(id)
        if (!user) return ReturnMessages.userNotFound
        const toUpdate = new User({
            username: data.username || user?.username,
            password: data.password || user?.password,
            questions: data.questions || user?.questions,
            answers: data.answers || user?.answers
        })

        await this.userRepository.updateUser(id, toUpdate)
    }
}
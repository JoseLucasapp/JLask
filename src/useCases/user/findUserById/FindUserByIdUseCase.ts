import { IUserRepository } from "../../../repositories/IUser-repository";

export class FindUserByIdUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        return await this.userRepository.findUserById(id)
    }
}
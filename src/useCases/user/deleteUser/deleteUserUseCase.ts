import { IUserRepository } from "../../../repositories/IUser-repository";

export class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(id: number) {
        await this.userRepository.deleteUser(id)
    }
}
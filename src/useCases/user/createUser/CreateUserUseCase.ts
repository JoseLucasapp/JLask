import { User } from "../../../entities/user-entity";
import { IUserRepository } from "../../../repositories/IUser-repository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: ICreateUserRequestDTO) {
        const user = new User(data)

        await this.userRepository.save(user)
    }
}
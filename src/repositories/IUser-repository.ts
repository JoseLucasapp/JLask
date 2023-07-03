import { User } from "../entities/user-entity"

export interface IUserRepository {
    findUserById(id: number): Promise<User | null>
    save(data: User): Promise<void>
    deleteUser(id: number): Promise<void>
    updateUser(id: number, data: User): Promise<void>
}
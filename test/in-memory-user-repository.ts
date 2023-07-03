import { User } from "../src/entities/user-entity";
import { IUserRepository } from "../src/repositories/IUser-repository";

export class InMemoryUserRepository implements IUserRepository {
    public users: User[] = []

    async save(data: User): Promise<void> {
        this.users.push(data)
    }

    async findUserById(id: number): Promise<User | null> {
        const user = this.users.find(b => b.id === id)

        if (!user) return null
        return user
    }

    async deleteUser(id: number): Promise<void> {
        const user = this.users.find(b => b.id === id)
        const position = this.users.indexOf(user as User)
        this.users.splice(position, 1)
    }

    async updateUser(id: number, data: User): Promise<void> {
        const user = this.users.find(b => b.id === id)
        const position = this.users.indexOf(user as User)
        this.users[position] = data
    }
}
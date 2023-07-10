import { User } from "../../entities/user-entity";
import { IUserRepository } from "../../repositories/IUser-repository";

export class PostgresUserRepository implements IUserRepository {
    async findUserById(id: number): Promise<User | null> {
        return await User.findByPk(id)
    }

    async save(data: User): Promise<void> {
        await User.create({ ...data.dataValues })
    }

    async deleteUser(id: number): Promise<void> {
        await User.destroy({ where: { id: id } })
    }

    async updateUser(id: number, data: User): Promise<void> {
        await User.update({ ...data.dataValues }, { where: { id: id } })
    }
}
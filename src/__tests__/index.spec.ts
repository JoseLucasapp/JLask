import { CreateUserTest } from "../useCases/user/createUser/CreateUserTest"
import { DeleteUserTest } from "../useCases/user/deleteUser/deleteUserTest"
import { findUserByIdTest } from "../useCases/user/findUserById/FindUserByIdTest"
import { UpdateUserTest } from "../useCases/user/updateUser/updateUserTest"

describe('User Tests', () => {
    CreateUserTest()
    findUserByIdTest()
    UpdateUserTest()
    DeleteUserTest()
})
import request from "supertest"
import app from "../../../app"

export const CreateUserTest = () => describe('Create new user', () => {
    it('Should create a new user', async () => {
        const data = await request(app).post('/user').send({ username: 'Lucas', password: 12345 })

        expect(data.status).toBe(200)
    })
})
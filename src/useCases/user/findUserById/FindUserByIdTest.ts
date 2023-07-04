import request from "supertest"
import app from "../../../app"

export const findUserByIdTest = () => describe('Find user by id', () => {
    it('Should get an user', async () => {
        const data = await request(app).get('/user/1')

        expect(data.status).toBe(200)
        expect(data.body).toHaveLength
    })
})
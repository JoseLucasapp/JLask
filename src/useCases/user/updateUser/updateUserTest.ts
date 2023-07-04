import request from "supertest"
import app from "../../../app"

export const UpdateUserTest = () => describe('Update user', () => {
    it('Should update an user', async () => {
        const data = await request(app).put('/user/1').send({ answers: 1 })

        expect(data.status).toBe(200)
    })
})
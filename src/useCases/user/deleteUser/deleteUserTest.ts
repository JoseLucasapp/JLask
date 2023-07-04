import request from "supertest"
import app from "../../../app"

export const DeleteUserTest = () => describe('Delete user', () => {
    it('Should delete an user', async () => {
        const data = await request(app).delete('/user/1')

        expect(data.status).toBe(200)
    })
})
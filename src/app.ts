import express from 'express'
import cors from 'cors'

import { userRouter } from './routes/user'
import { questionRouter } from './routes/question'

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(questionRouter)

export default app
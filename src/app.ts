import express from 'express'
import cors from 'cors'

import { userRouter } from './routes/user'
import { questionRouter } from './routes/question'
import { answerRoutes } from './routes/answer'

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(questionRouter)
app.use(answerRoutes)

export default app
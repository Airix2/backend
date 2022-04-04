import express from "express";
import cors from 'cors'
import morgan from 'morgan'

import tasksRoutes from './routes/tasks'
import carsRoutes from './routes/cars'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/', carsRoutes)
app.use('/tasks', tasksRoutes)

export default app
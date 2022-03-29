import { Router } from 'express';
let index = require('../controllers/tasks')
//import index from '../controllers/tasks';

const router = Router()

router.get('/tasks', index.getTasks)

router.get('/tasks/count', index.getTaskCount)

router.get('/tasks/:id', index.getTask)

router.post('/tasks', index.createTask)

router.delete('/tasks/:id', index.deleteTask)

router.put('/tasks/:id', index.updateTask)

export default router
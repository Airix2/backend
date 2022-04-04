import { Router } from 'express';
let index = require('../controllers/tasks')
//import index from '../controllers/tasks';

const router = Router()

router.get('/', index.getTasks)

router.get('/count', index.getTaskCount)

router.get('/:id', index.getTask)

router.post('', index.createTask)

router.delete('/:id', index.deleteTask)

router.put('/:id', index.updateTask)

export default router
import { Router } from 'express';
import * as tasksController from './controllers/tasksController.js'
import * as middlewares from './middlewares/tasksMiddleware.js'

const router = Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks', middlewares.validateFieldTitle, tasksController.createTask)

router.delete('/tasks/:id', tasksController.deleteTask)

router.put('/tasks/:id',
  middlewares.validateFieldTitle,
  middlewares.validateFieldStatus,
  tasksController.updateTask)

export default router;
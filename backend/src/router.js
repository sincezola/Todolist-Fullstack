import { Router } from 'express';
import * as tasksController from './controllers/tasksController.js'
import * as middlewares from './middlewares/tasksMiddleware.js'

const router = Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks', middlewares.validateBody, tasksController.createTask)

export default router;
// src/routes/todoRoutes.ts
import { Router } from 'express';
import { todoController } from '../controllers/TodoController';

const router = Router();


router.get('/todos', todoController.getAllTodos);


router.get('/todos/:id', todoController.getTodoById);


router.post('/todos', todoController.createTodo);

router.put('/todos/:id', todoController.updateTodo);

router.delete('/todos/:id', todoController.deleteTodo);

export default router;

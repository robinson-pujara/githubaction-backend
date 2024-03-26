// src/controllers/TodoController.ts
import { Request, Response } from 'express';
import { todoService } from '../services/todoService';

class TodoController {
  async getAllTodos(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      // Type assertion
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }

  async getTodoById(req: Request, res: Response) {
    try {
      const todo = await todoService.getTodoById(parseInt(req.params.id));
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).send("Todo not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }

  async createTodo(req: Request, res: Response) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }

  async updateTodo(req: Request, res: Response) {
    try {
      const result = await todoService.updateTodo(parseInt(req.params.id), req.body);
      if (result) {
        res.status(200).send("Todo updated successfully");
      } else {
        res.status(404).send("Todo not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }

  async deleteTodo(req: Request, res: Response) {
    try {
      const result = await todoService.deleteTodo(parseInt(req.params.id));
      if (result) {
        res.status(200).send("Todo deleted successfully");
      } else {
        res.status(404).send("Todo not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }
}

export const todoController = new TodoController();

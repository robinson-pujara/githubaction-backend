
import { Todo } from '../models/todoModel';

class TodoService {
  async getAllTodos() {
    // Directly returns the result of calling Todo.getAllTodos
    return await Todo.getAllTodos();
  } 

  async getTodoById(id: number) {
    // Fixed method name to match assumed TodoModel.ts
    return await Todo.getById(id);
  }

  async createTodo(todo: { title: string; description?: string; is_completed: boolean }) {
    // Assuming Todo.create matches this signature
    return await Todo.create(todo);
  }

  async updateTodo(id: number, todo: { title?: string; description?: string; is_completed?: boolean }) {
    // Assuming Todo.update matches this signature
    return await Todo.update(id, todo);
  }

  async deleteTodo(id: number) {
    // Assuming Todo.delete matches this signature
    return await Todo.delete(id);
  }
}

export const todoService = new TodoService();

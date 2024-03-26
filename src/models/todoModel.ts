
import knex from "../db/knex";

export class Todo {
  public static table = "todos";

  public static async getAllTodos() {
    return await knex(this.table).select();
  }

  public static async getById(id: number) {
    return await knex(this.table).where({ id }).first();
  }

  public static async create(todo: { title: string; description?: string; is_completed: boolean }) {
    return await knex(this.table).insert(todo).returning("*");
  }

  public static async update(id: number, todo: { title?: string; description?: string; is_completed?: boolean }) {
    return await knex(this.table).where({ id }).update(todo).returning("*");
  }

  public static async delete(id: number) {
    return await knex(this.table).where({ id }).delete();
  }
}

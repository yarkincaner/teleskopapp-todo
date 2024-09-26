import { ITodoState } from '@/types/todo'
import { create } from 'zustand'

export const useTodoStore = create<ITodoState>(set => ({
  todos: [],
  setTodos: todos => set({ todos }),
  updateTodo: (id, completed) =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    })),
  deleteTodo: id =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
}))

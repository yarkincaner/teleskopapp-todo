export type ITodo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type ITodoState = {
  todos: ITodo[]
  setTodos: (todos: ITodo[]) => void
  updateTodo: (id: number, completed: boolean) => void
  deleteTodo: (id: number) => void
}

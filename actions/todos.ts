import { ITodo } from '@/types/todo'
import axios from 'axios'

let apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL!)

if (!apiUrl)
  throw new Error('Environment variable NEXT_PUBLIC_API_URL is undefined')

export const getTodosAsync = async () => {
  try {
    const res = await axios.get(apiUrl.toString())
    return res.data as Array<ITodo>
  } catch (err) {
    throw new Error('Something went wrong!')
  }
}

export const completeTodoAsync = async (todoId: number) => {
  try {
    apiUrl.pathname = `/todos/${todoId}`

    const res = await axios.patch(
      apiUrl.toString(),
      {
        completed: true
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }
    )

    return res.data as ITodo
  } catch (err) {
    throw new Error('Something went wrong!')
  }
}

export const deleteTodoAsync = async (todoId: number) => {
  try {
    apiUrl.pathname = `/todos/${todoId}`
    const res = await axios.delete(apiUrl.toString())
    return res
  } catch (err) {
    throw new Error('Something went wrong!')
  }
}

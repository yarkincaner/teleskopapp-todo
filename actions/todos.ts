import { Todo } from '@/types/todo'
import axios from 'axios'

export const getTodos = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL!

  try {
    const res = await axios.get(url)
    return res.data as Array<Todo>
  } catch (err) {
    throw new Error('Something went wrong!')
  }
}

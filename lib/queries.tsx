'use client'

import { getTodosAsync } from '@/actions/todos'
import { useQuery } from '@tanstack/react-query'
import { useTodoStore } from './store'

export const useGetTodos = () => {
  const setTodos = useTodoStore(state => state.setTodos)
  return useQuery({
    queryKey: ['get-todos'],
    queryFn: async () => {
      const res = await getTodosAsync()
      setTodos(res)
      return res
    },
    staleTime: 300000
  })
}

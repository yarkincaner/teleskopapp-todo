'use client'

import { getTodos } from '@/actions/todos'
import { useQuery } from '@tanstack/react-query'

export const useGetTodos = () => {
  return useQuery({
    queryKey: ['get-todos'],
    queryFn: async () => await getTodos()
  })
}

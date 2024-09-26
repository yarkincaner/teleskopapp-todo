'use client'

import { completeTodoAsync, deleteTodoAsync } from '@/actions/todos'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useTodoStore } from './store'
import { ITodo } from '@/types/todo'

export const useCompleteTodo = (todo: ITodo) => {
  const updateTodo = useTodoStore(state => state.updateTodo)
  const { id, title } = todo

  return useMutation({
    mutationKey: ['complete-todo', id],
    mutationFn: async () => {
      const res = await completeTodoAsync(id)
      return res
    },
    onSuccess: async () => {
      updateTodo(id, true)
      toast.success('Well done 🥳!', {
        description: `You completed ${title}.`
      })
    },
    onError: err => {
      toast.error('Something went wrong!', {
        description: 'Please try again later.'
      })
    }
  })
}

export const useDeleteTodo = (todo: ITodo) => {
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const { id } = todo

  return useMutation({
    mutationKey: ['delete-todo', id],
    mutationFn: async () => {
      const res = await deleteTodoAsync(id)
      return res
    },
    onSuccess: async () => {
      deleteTodo(id)
      toast.success('Todo has been removed from your list.')
    },
    onError: err => {
      toast.error('Deleting failed!', {
        description: 'Please try again later.'
      })
    }
  })
}

'use client'

import Icons from '@/components/icons'
import { useGetTodos } from '@/lib/queries'
import { useTodoStore } from '@/lib/store'
import { FC } from 'react'
import Todo from './todo'

type Props = {}

const TodoList: FC<Props> = ({}) => {
  const { isLoading, error } = useGetTodos()
  const todos = useTodoStore(state => state.todos)

  if (isLoading)
    return (
      <Icons.loader className='m-auto size-16 animate-spin stroke-primary' />
    )
  if (error) return <div>{error.message}</div>

  return (
    <div className='space-y-4'>
      {todos?.map(todo => <Todo key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList

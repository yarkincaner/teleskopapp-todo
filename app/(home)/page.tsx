'use client'

import Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import Search from '@/components/ui/inputs/search'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useGetTodos } from '@/lib/queries'
import { FC } from 'react'
import Todo from './todo'
import { useTodoStore } from '@/lib/store'

type Props = {}

const Home: FC<Props> = ({}) => {
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

export default Home

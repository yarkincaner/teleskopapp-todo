'use client'

import { useGetTodos } from '@/lib/queries'
import { FC } from 'react'

type Props = {}

const Home: FC<Props> = ({}) => {
  const { data, isLoading, error } = useGetTodos()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className='flex flex-col'>
      {data?.map(todo => <h1>{todo.title}</h1>)}
    </div>
  )
}

export default Home

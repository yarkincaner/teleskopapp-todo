'use client'

import Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/inputs/input'
import { useAddTodo } from '@/lib/mutations'
import { FC } from 'react'

type Props = {}

const Form: FC<Props> = ({}) => {
  const { mutate: handleSubmit, isPending, error } = useAddTodo()

  return (
    <form
      className='flex w-full items-center space-x-2'
      onSubmit={e => {
        e.preventDefault()
        console.log(e.target)
      }}
    >
      <Input
        id='title'
        name='title'
        placeholder='Make a sandwich...'
        autoFocus
      />
      <Button type='submit' className='h-full'>
        <Icons.plus />
      </Button>
    </form>
  )
}

export default Form

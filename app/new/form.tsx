'use client'

import Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/inputs/input'
import { useAddTodo } from '@/lib/mutations'
import { TodoRequest, TodoValidator } from '@/lib/validators/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type Props = {}

const Form: FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoRequest>({
    resolver: zodResolver(TodoValidator),
    defaultValues: {
      title: ''
    }
  })

  const { mutate: submitTodo, isPending, error } = useAddTodo()

  const onSubmit = async (data: TodoRequest) => {
    submitTodo(data.title)
  }

  useEffect(() => {
    if (errors.title) {
      toast.error(errors.title.message)
    }
  }, [errors])

  return (
    <form
      className='flex w-full items-center space-x-2'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register('title')}
        placeholder='Make a sandwich...'
        autoFocus
        error={errors.title}
        disabled={isPending}
      />
      <Button type='submit' className='h-full' disabled={isPending}>
        <Icons.plus />
      </Button>
    </form>
  )
}

export default Form

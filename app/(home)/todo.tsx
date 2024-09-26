import Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useCompleteTodo, useDeleteTodo } from '@/lib/mutations'
import { useTodoStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import { ITodo } from '@/types/todo'
import { FC } from 'react'

type Props = {
  todo: ITodo
}

const Todo: FC<Props> = ({ todo }) => {
  const { mutate: handleComplete, isPending: isCompleting } =
    useCompleteTodo(todo)

  const { mutate: handleDelete, isPending: isDeleting } = useDeleteTodo(todo)

  return (
    <div
      className={cn(
        'grid grid-cols-4 items-center justify-between rounded-lg bg-background p-4 text-foreground shadow',
        todo.completed && 'bg-success/80 text-success-foreground'
      )}
    >
      <div className='col-span-3'>
        <p className='truncate'>{todo.title}</p>
      </div>
      <div className='col-span-1 flex items-center gap-2 place-self-end'>
        {!todo.completed && (
          <Button
            variant={'success'}
            size={'icon'}
            onClick={() => handleComplete()}
            disabled={isCompleting || isDeleting}
          >
            <Icons.check className='size-4' />
          </Button>
        )}
        <Button
          variant={'destructive'}
          size={'icon'}
          onClick={() => handleDelete()}
          disabled={isCompleting || isDeleting}
        >
          <Icons.trash className='size-4' />
        </Button>
      </div>
    </div>
  )
}

export default Todo

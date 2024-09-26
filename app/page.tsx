import TodoList from '@/components/home-page/todo-list'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Page() {
  return (
    <ScrollArea className='flex min-w-full flex-grow items-center justify-center place-self-center justify-self-center rounded-b-lg bg-secondary/50 p-6'>
      <TodoList />
    </ScrollArea>
  )
}

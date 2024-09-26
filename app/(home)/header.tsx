import Icons from '@/components/icons'
import { Button } from '@/components/ui/button'
import { FC } from 'react'

type Props = {}

const Header: FC<Props> = ({}) => {
  return (
    <div className='flex items-center justify-between rounded-t-lg p-4 px-6 shadow dark:shadow-lg'>
      <div className='flex items-center gap-2 text-base sm:text-lg'>
        <span>
          <h1>TeleskopApp</h1>
          <Icons.underline />
        </span>
        <h1 className='-mt-2'>/ Todo</h1>
      </div>
      <Button variant={'secondary'} className='justify-self-end shadow'>
        Add Todo <Icons.plus className='ml-1.5 size-4' />
      </Button>
    </div>
  )
}

export default Header

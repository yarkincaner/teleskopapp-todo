import Icons from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'

type Props = {}

const Header: FC<Props> = ({}) => {
  return (
    <div className='flex items-center justify-between rounded-t-lg p-4 px-6 shadow dark:shadow-muted-foreground/10'>
      <div className='flex items-center gap-2 text-base sm:text-lg'>
        <span>
          <h1>TeleskopApp</h1>
          <Icons.underline />
        </span>
        <h1 className='-mt-2'>/ Todo</h1>
      </div>
      <Link
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'justify-self-end shadow'
        )}
        href={'/new'}
      >
        Add Todo <Icons.plus className='ml-1.5 size-4' />
      </Link>
    </div>
  )
}

export default Header

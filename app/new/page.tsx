import Icons from '@/components/icons'
import { FC } from 'react'
import Form from './form'

type Props = {}

const Page: FC<Props> = ({}) => {
  return (
    <>
      <h3 className='text-base sm:text-xl'>
        What is it that you have{' '}
        <span className='rounded-lg bg-success px-1 text-success-foreground'>
          to do
        </span>
        ?
      </h3>
      <div className='flex gap-4'>
        <Icons.writing className='size-20 fill-muted-foreground/90 sm:size-24' />
        <div className='flex flex-col justify-center gap-1 text-xs text-muted-foreground sm:text-sm'>
          <p>Suggestions:</p>
          <ul className='list-disc pl-6'>
            <li>Feed the cat 🐈</li>
            <li>Pet the cat 🐈</li>
            <li>Play with the cat 🐈</li>
            <li>Buy stuff for the cat 🐈</li>
          </ul>
        </div>
      </div>
      <Form />
    </>
  )
}

export default Page

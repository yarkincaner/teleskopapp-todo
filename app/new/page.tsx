import Icons from '@/components/icons'
import { FC } from 'react'
import Form from './form'

type Props = {}

const Page: FC<Props> = ({}) => {
  return (
    <>
      <h3 className='text-xl'>
        What is it that you have{' '}
        <span className='rounded-lg bg-success px-1 text-success-foreground'>
          to do
        </span>
        ?
      </h3>
      <div className='flex gap-4'>
        <Icons.writing className='size-24 fill-muted-foreground/90' />
        <div className='flex flex-col justify-center gap-1'>
          <p className='text-sm text-muted-foreground'>Suggestions:</p>
          <ul className='list-disc pl-6 text-sm text-muted-foreground'>
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

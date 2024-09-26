import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='flex min-h-full flex-col gap-4 rounded-b-lg p-6'>
      {children}
    </div>
  )
}

export default Layout

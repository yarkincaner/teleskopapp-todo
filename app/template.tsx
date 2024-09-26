import Transition from '@/components/transition'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Template: FC<Props> = ({ children }) => {
  return <Transition>{children}</Transition>
}

export default Template

'use client'

import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Transition: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 75, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}

export default Transition

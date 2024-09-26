import { FC } from 'react'
import { Input } from './input'
import Icons from '@/components/icons'

type Props = {
  placeholder?: string
  className?: string
}

const Search: FC<Props> = ({ placeholder = 'search...', className }) => {
  return (
    <Input
      placeholder={placeholder}
      startIcon={Icons.search}
      className={className}
    />
  )
}

export default Search

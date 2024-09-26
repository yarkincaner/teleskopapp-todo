import * as React from 'react'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon
  endIcon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon
    const EndIcon = endIcon

    return (
      <div className='relative w-full'>
        {StartIcon && (
          <div className='absolute left-2 top-1/2 -translate-y-1/2 transform'>
            <StartIcon className='size-4 text-muted-foreground' />
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            startIcon && 'pl-8',
            endIcon && 'pl-8',
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2 transform'>
            <EndIcon className='size-4 text-muted-foreground' />
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }

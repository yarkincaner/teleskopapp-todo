import * as React from 'react'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { FieldError } from 'react-hook-form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon
  endIcon?: LucideIcon
  error?: FieldError | undefined
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, error = false, ...props }, ref) => {
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
            'flex h-12 w-full rounded-md border-2 border-input bg-secondary px-3 py-1 text-sm shadow transition-colors file:border-0 file:bg-secondary file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted-foreground/90 disabled:cursor-not-allowed disabled:opacity-50',
            startIcon && 'pl-8',
            endIcon && 'pl-8',
            error && 'border-destructive focus-visible:ring-destructive',
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

'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'liquid' | 'morph'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', ...props }, ref) => {
    return (
      <div
        className={cn(
          'rounded-3xl p-6',
          {
            'glass': variant === 'glass',
            'liquid-glass': variant === 'liquid',
            'liquid-glass morph-card': variant === 'morph',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card }
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-blue-primary-light py-[27px] px-[32px] h-[56px] flex items-center justify-center rounded-[80px] uppercase text-white text-base font-bold font-sans not-italic leading-4 tracking-widest',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      name = '',
      label = '',
      helperText = '',
      className,
      ...props
    },
    ref
  ) => {
    const inputId = useId()

    return (
      <div className="flex flex-col gap-3">
        <label
          htmlFor={inputId}
          className="font-sans text-lg font-bold uppercase"
        >
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          name={name}
          ref={ref}
          {...props}
          className={cn(
            'w-[358px] lg:w-[364px] px-6 py-5 rounded-[100px] bg-blue-primary font-sans text-lg font-normal outline-none focus:ring-2 focus:ring-blue-primary-light ',
            className
          )}
        />
      </div>
    )
  }
)

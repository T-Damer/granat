import { cn } from 'helpers/cn'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { ClassNameProp } from 'types/Props'

export default function Card({
  children,
  className,
  ...rest
}: PropsWithChildren & ClassNameProp & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={cn(
        'flex h-64 w-80 cursor-pointer flex-col gap-4 rounded-2xl p-4 shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}

import { twMerge } from 'tailwind-merge'
import React, { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  className?: string
}>

export default function Button({ children, className }: ButtonProps) {
  return (
    <button type="button" className={twMerge('text-black bg-primary px-13 py-4 rounded-full', className)}>
      {children}
    </button>
  )
}

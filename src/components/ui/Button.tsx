import { twMerge } from 'tailwind-merge'
import React, { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  className?: string
}>

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge('mb-[38px] mx-84 text-black bg-primary py-1.5 rounded-full text-sm', className)}
    >
      {children}
    </button>
  )
}

import type { ReactNode } from 'react'

interface BoxProps {
   children: ReactNode,
   className?: string
}

export default function Box({ children, className }: BoxProps) {
   return (
      <div className={`${className} bg-white p-5 rounded-[20px]`}>
         { children }
      </div>
   )
}
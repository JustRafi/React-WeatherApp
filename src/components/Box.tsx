import type { ReactNode } from 'react'

interface BoxProps {
   children: ReactNode,
   className?: string
}

export default function Box({ children, className }: BoxProps) {
   return (
      <div className={`${className} bg-white rounded-[20px] min-h-[210px] h-[210px]`}>
         { children }
      </div>
   )
}
interface HeadingProps {
   children: React.ReactNode
}
export default function Heading({ children }: HeadingProps) {
   return (
      <h1 className="font-medium text-lg">
         { children }
      </h1>
   )
}
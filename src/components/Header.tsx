import Burger from "./icons/Burger"
import Search from "./icons/Search"

interface HeaderProps{
   headerInfo: string
}

export default function Header({ headerInfo }: HeaderProps){
   return(
      <header className="absolute top-0 left-0 w-full p-4 justify-between items-center flex flex-row">
         <Burger/>
         { headerInfo }
         <Search/>
      </header>
   )
}
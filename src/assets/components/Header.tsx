import Burger from "./icons/Burger"
import Search from "./icons/Search"

interface HeaderProps{
   headerInfo: string
}

export default function Header({ headerInfo }: HeaderProps){
   return(
      <header className="w-full justify-between items-center flex flex-row">
         <Burger/>
         { headerInfo }
         <Search/>
      </header>
   )
}
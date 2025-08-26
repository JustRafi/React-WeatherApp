export default function DayTempTile(){
   return(
      <div className="flex flex-row gap-2 items-center justify-between">
         <div className="flex flex-row items-center gap-2">
            <img src="src\assets\img\partly_cloudy.png" alt="partly_cloudy" className="w-10 h-10" />
            <p className="text-sm">Monday</p>
         </div>
         <p className="text-sm">12°C / 19°C</p>
      </div>
   )
}
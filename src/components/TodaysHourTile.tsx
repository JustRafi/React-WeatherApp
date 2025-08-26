export default function TodaysHourTile(){
   return(
      <div className="flex flex-col gap-2 items-center justify-center">
         <p className="text-[12px] text-gray-400 font-light">12 PM</p>
         <img src="src\assets\img\partly_cloudy.png" alt="partly_cloudy" className="w-10 h-10" />
         <p className="text-sm font-light">12°C</p>
      </div>
   )
}
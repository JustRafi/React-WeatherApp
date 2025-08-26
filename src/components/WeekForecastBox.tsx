import Box from "./Box";
import MenuIcon from "./icons/Menu";
import DayTempTile from "./DayTempTile";


export default function WeekForecastBox() {
   return (
      <Box className="p-5 gap-5 flex flex-col">
         {/* Main info */}
         <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
               <p className="text-[14px] text-gray-400 font-light">Partly Cloudy</p>
               <h2 className="text-[16px] font-semibold">August, 10th 2020</h2>
            </div>
            <MenuIcon/> 
         </div>
         {/* Weekly (each day) forecast */}
         <div className="flex flex-col gap-1">
            <DayTempTile />
            <DayTempTile />
            <DayTempTile />
            <DayTempTile />
            <DayTempTile />
            <DayTempTile />
            <DayTempTile />
         </div>
      </Box>
   );
}

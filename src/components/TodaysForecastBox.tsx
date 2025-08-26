import type { TodaysForecastData } from "../types/data";
import Box from "./Box";
import MenuIcon from "./icons/Menu";
import TodaysHourTile from "./TodaysHourTile";

interface BoxProps {
   info: TodaysForecastData
}

export default function TodaysForecastBox({ info }: BoxProps) {
   return (
      <Box className="p-5 gap-6 flex flex-col">
         {/* Main info */}
         <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
               <p className="text-[14px] text-gray-400 font-light">{info.weather}</p>
               <h2 className="text-[16px] font-semibold">{info.date}</h2>
            </div>
            <MenuIcon/> 
         </div>
         <div className="flex flex-row justify-between">
            <TodaysHourTile/>
            <TodaysHourTile/>
            <TodaysHourTile/>
            <TodaysHourTile/> 
            <TodaysHourTile/>
         </div>
      </Box>
   );
}
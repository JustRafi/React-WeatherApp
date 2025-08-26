import type { ReactNode } from 'react'
import type { WeatherBoxData } from '../types/data'
import LocationIcon from './icons/Location'
import RainVolumeIcon from './icons/RainVolume'
import WindIcon from './icons/Wind'
import SunIcon from './icons/Sun'
import Box from './Box'

interface BoxProps {
   info: WeatherBoxData
}

export default function WeatherBox({ info }: BoxProps) {
   return (
      <Box className="bg-blue-gradient px-6 py-8 text-white min-w-[95%] flex flex-col gap-3.5">

         {/* Weather info and icon */}
         <div className='flex flex-row'>

            {/* Weather info */}
            <div className='flex flex-col'>

               {/* Chance of rain */}
               <p className="font-medium text-sm mb-2">
                  {Number(info.rainProb.toFixed(0)) !== 0 ? `Chance of rain ${info.rainProb}%` : "No rain predictions"}
               </p>

               {/* Weather status */}
               <h1 className='text-2xl font-bold mb-6'>
                  {info.weather}
               </h1>

               {/* Location */}
               <h3 className='text-sm font-medium flex flex-row gap-2 items-center'>
                  <LocationIcon/>
                  {info.place}
               </h3>
            </div>

            {/* Weather icon */}
            <img src='src\assets\img\partly_cloudy.png' alt='partly_cloudy' className="w-20 h-fit ml-auto" />

         </div>

         {/* Weather parameters */}
         <div className='flex flex-row justify-between items-center'>

            {/* Degrees */}
            <div className='flex flex-row'>
               <p className='font-bold text-2xl'>
                  {info.degrees}
               </p>
               <p className='text-sm font-medium ml-1'>
                  °C
               </p>
            </div>

            {/* Other parameters */}
               <div className='flex flex-row items-center font-medium text-[12px] justify-center gap-2'>
                  <RainVolumeIcon/>
                  {info.rainVol}%
               </div>
               <div className='flex flex-row items-center font-medium text-[12px] justify-center gap-2'>
                  <SunIcon/>
                  {info.uv}
               </div>
               <div className='flex flex-row items-center font-medium text-[12px] justify-center gap-2'>
                  <WindIcon/>
                  {info.windSpeed} km/h
               </div>

         </div>
      </Box>
   )
}
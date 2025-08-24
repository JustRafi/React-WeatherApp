import type { ReactNode } from 'react'
import type { WeatherBoxData } from '../types/data'
import LocationIcon from './icons/Location'

interface BoxProps {
   info: WeatherBoxData
}

export default function Box({ info }: BoxProps) {
   return (
      <div className="bg-blue-gradient p-5 rounded-[20px] text-white flex flex-col gap-3.5">

         {/* Weather info and icon */}
         <div className='flex flex-row'>

            {/* Weather info */}
            <div className='flex flex-col'>
               <p className="font-medium text-sm mb-2">
                  {Number(info.rainProb.toFixed(0)) !== 0 ? `Chance of rain ${info.rainProb}%` : "No rain predictions"}
               </p>
               <h1 className='text-2xl mb-6'>
                  {info.weather}
               </h1>
               <h3 className='text-sm flex flex-row gap-2 items-center'>
                  <LocationIcon/>
                  {info.place}
               </h3>
            </div>

            {/* Weather icon */}
            <img src='src\assets\img\partly_cloudy.png' alt='partly_cloudy' className="w-20 h-fit ml-auto" />

         </div>

         {/* Weather parameters */}
      </div>
   )
}
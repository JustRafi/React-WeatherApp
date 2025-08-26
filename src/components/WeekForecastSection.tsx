import Heading from "./Heading";
import WeekForecastBox from "./WeekForecastBox";

export default function WeekForecastSection() {
   return (
      <div className="flex flex-col gap-4 mt-8 px-4">
         <Heading>Weekly Forecast</Heading>
         <WeekForecastBox />
      </div>
   );
}
import Heading from "./Heading";
import TodaysForecastBox from "./TodaysForecastBox";
import { mockTodaysData } from "../mock/data";

export default function TodaysForecastSection() {
   return (
      <div className="flex flex-col gap-4 mt-8 px-4">
         <Heading>News</Heading>
         <TodaysForecastBox info={mockTodaysData} />
      </div>
   );
}
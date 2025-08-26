import Heading from "./Heading";
import NewsBox from "./NewsBox";

export default function NewsSection() {
   return (
      <div className="flex flex-col gap-4 mt-8 px-4">
         <Heading>News</Heading>
         <NewsBox/>
      </div>
   );
}
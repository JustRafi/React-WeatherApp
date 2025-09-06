import Box from "./Box";

interface NewsBoxProps {
   img: string
}
export default function NewsBox() {
   return (
      <Box>

         {/* Image section */}
         <div className="h-1/2">
          <img src="" alt="news_img" className="w-full h-full bg-gray-400 rounded-t-[20px] text-center"/>
         </div>
        

         {/* News data */}
         <div className="px-7 flex flex-col justify-between pt-4 pb-5 h-1/2">
            <h2 className="font-semibold text-[16px]">Here’s what to expect from Tuesday weather forecast</h2>
            <div className="flex flex-row justify-between">
               <p className="text-[12px] text-gray-400">
                  14 minutes ago
               </p>
               <p className="text-[12px]">
                  WC Chanel
               </p>
            </div>
         </div>

      </Box>
   );
}
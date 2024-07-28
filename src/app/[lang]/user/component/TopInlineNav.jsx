


export default function TopInlineNav({link}) {
   return (
      <div>
         <div className="h-12 w-full flex items-center border-b border-solid border-b-gray-200">

            <div className="h-12 flex-1 flex items-center justify-between">

            <div className="flex items-center px-3 text-gray-600">
            {
               link.map((item,index)=>{
                  return (
                     <>

                     <div>
      <a href={`${item.link}`} className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal">
         {item.name}
         </span>
      </a>
   </div>

   {
      index < (link.length - 1) ? <span className="text-sm leading-4 font-normal w-3  text-center">/</span> : ''
   }
                     
                     </>
                  );
               })
            }
            </div>

            </div>
         </div>
      </div>
   );
}
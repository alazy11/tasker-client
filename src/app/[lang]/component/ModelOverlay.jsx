
export default function ModelOverlay({children,showModel}) {

   return(
      <div className="fixed w-full h-full top-0 left-0 z-1000 bg-black/50">
         <div className=" w-full h-full flex items-center justify-center overflow-y-auto overflow-x-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full z-0" onClick={(e)=>{
            showModel(false);
         }}>

            </div>
            {children}
         </div>
      </div>
   )
}

export default function ModelOverlay({children,showModel,styleCss='flex'}) {

   return(
      <div className="fixed w-full h-full top-0 left-0 z-1000 bg-black/50" style={{backgroundColor:"var(--cu-background-overlay)"}}>
         <div className={`w-full h-full ${styleCss} items-center justify-center overflow-y-auto overflow-x-hidden relative`}>
            <div className="absolute top-0 left-0 w-full h-full z-0" onClick={(e)=>{
            showModel(false);
         }}>

            </div>
            {children}
         </div>
      </div>
   )
}
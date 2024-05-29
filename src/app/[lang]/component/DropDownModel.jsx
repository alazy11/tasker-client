


export default function DropDownModel({children, setShowIcon}) {

   return (
      <div className="w-full h-full fixed top-0 left-0 z-2000">
      <div className="relative w-full h-full top-0 left-0">
         <div className="absolute w-full h-full top-0 left-0 z-2000" onClick={(e)=>{
            setShowIcon(false);
         }}></div>

         {children}

         </div>
         </div>
   )
}
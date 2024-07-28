

import Image from "next/image";


export default function EmptyPhase({EmptyImg,setPhaseModel}) {

   return (
      <div className="w-full h-full flex flex-col justify-center items-center p-2">
            <div className="w-32 h-32">
               <Image src={EmptyImg} alt='empty phase information' className="w-full" />
            </div>
            <div className="text-lg font-medium text-2a2e34">Plan Phases</div>
            <div className="color-500 mt-2 text-sm font-normal text-center max-w-450">You Don't have any phase Information for this project, please click to Add information to active project for space Team.</div>
            <div>
               <button className="pt-1 pb-1 pe-2 ps-2 rounded mt-4 border-d6d9de color-700 text-sm font-medium hover:bg-gray-100 cursor-pointer" onClick={(e)=>{
                  setPhaseModel(true);
               }}>
                  Add Phases Information
               </button>
            </div>
            </div>
   );

}
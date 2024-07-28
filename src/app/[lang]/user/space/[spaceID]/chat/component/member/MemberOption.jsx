'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { useEffect, useRef, useState } from 'react';


export default function MemberOption({setOption,top,left,employee,roomId}) {

   const refr = useRef(null);
   const [rename, setRename] = useState(false);
   const [copy, setCopy] = useState(false);
   const [height, setHeight] = useState('');

   useEffect(()=>{
    if(refr) {
        let ele = refr.current.getBoundingClientRect();
        setHeight(ele.height);
        console.log("element hieght",ele.height);
    }
   },[refr])

   return (
      <>
      <DropDownModel setShowIcon={setOption}>
      <div className='h-full m-auto relative w-full' 
      // style={{width:'480px', maxWidth:'100%' }}
      >
      {/* drop-menu-shadow  */}
      <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 w-52 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:(top - height)+'px',left:left+'px'}}>
         <div className='py-2 ps-4 pe-3'>
            <div className='flex items-center max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold uppercase color-600' style={{letterSpacing:'.05em', fontSize:'11px'}}>
            <div>
            {employee.public_name}
            {/* alazy alhimeari */}
            </div>
            </div>
         </div>
         <ul>

            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 `} onClick={(e)=>{
                //   handelCopy({user, spaceID, projectID, folderInfo,setCopy}) 
               }}>
                  <span className="text-656f7d">

                  <svg width={'1rem'} height={'1rem'} className='block' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12 3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15" />
</svg>
                  </span>
                  Send message
               </button>
            </li>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34`} onClick={(e)=>{
                //   handelDownload({user, spaceID, projectID, folderInfo,setNotification,setMessage,setFolderOptions})
               }}>
                  <span className="text-656f7d">
                  <svg width={'1rem'} hanging={"1rem"} className='block' viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path fillRule="evenodd" d="M12 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm3.537 7.712a5.5 5.5 0 1 0-7.075 0c-2.912 1.227-5.047 3.926-5.454 7.163a1 1 0 0 0 1.984.25C5.425 16.678 8.392 14 12 14c3.607 0 6.575 2.678 7.008 6.125a1 1 0 1 0 1.984-.25c-.407-3.237-2.542-5.936-5.455-7.163Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                  </span>
                  View profile
               </button>
            </li>

            {/* <div className='bg-gray-200 w-full my-2' style={{height:'1px'}}>

            </div> */}
            
         </ul>

      </div>
      </div>

      </DropDownModel>
      </>
   );
}




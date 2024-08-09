'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { useEffect, useRef, useState } from 'react';
import socket from '@/app/MainSocket';



function handelBlock(spaceID,employee_id,isBlocked,roomId,public_name,setMessage,setTitle,setNotification,setOption) {

    fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/chat/setting/block/${employee_id}?isBlocked=${isBlocked}`,
        {
            method:'PUT',
            credentials: "include",
            headers: {
                "cache-control": "no-cache",
            },
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.status === "fail" || data.status === "error") {
                // setErrorMessage(true);
                // setErrorText(data?.message);
                console.log("data space faild....", data);
            } else {
                console.log('ok',data.data);
                socket.emit("BlockChatUser",roomId,isBlocked);
                setOption(false)
                setMessage(`${public_name} has been blocked Successfully.`);
                setTitle("Block Member");
                setNotification(true);

                setTimeout(() => {
                  setNotification(false);
              }, 4000);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function handelLock(spaceID,employee_id,isLocked,roomId,public_name,setMessage,setTitle,setNotification,setOption) {

   fetch(
       `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/chat/setting/lock/${employee_id}?isLocked=${isLocked}`,
       {
           method:'PUT',
           credentials: "include",
           headers: {
               "cache-control": "no-cache",
           },
       }
   )
       .then((res) => {
           return res.json();
       })
       .then((data) => {
           if (data.status === "fail" || data.status === "error") {
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("data space faild....", data);
           } else {
               console.log('ok',data.data);
               socket.emit("lockedChat",roomId,isLocked);
               setOption(false)
               setMessage(`${public_name} has been locked Successfully.`);
               setTitle("prevent user to send");
               setNotification(true);

               setTimeout(() => {
                 setNotification(false);
             }, 4000);
           }
       })
       .catch((error) => {
           console.log(error);
       });
}



export default function MemberOption({spaceID,setOption,top,left,employee,roomId,setMessage,setTitle,setNotification}) {

   return (
      <>
      <DropDownModel setShowIcon={setOption}>
      <div className='h-full m-auto relative w-full' 
      // style={{width:'480px', maxWidth:'100%' }}
      >
      {/* drop-menu-shadow  */}
      <div className={`absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 w-52 right-2 pt-2 pb-2 overflow-y-auto flex flex-col top-auto bottom-[${top - 20}px]`} style={{ left:left+'px'}}>
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
                  handelLock(spaceID,employee.employee_id,true,employee.room_ID,employee.public_name,setMessage,setTitle,setNotification,setOption)
               }}>
                  <span className="text-656f7d">
                  <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 2 11 13" />
  <path d="m22 2-7 20-4-9-9-4 20-7z" />
  <path d="m1 1 22 22" />
</svg>
                                                   </span>
                  Prevent send
               </button>
            </li>
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

            <div className='bg-gray-200 w-full my-2' style={{height:'1px'}}>

            </div>

            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal text-red-700 leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md`} onClick={(e)=>{
                handelBlock(spaceID,employee.employee_id,true,employee.room_ID,employee.public_name,setMessage,setTitle,setNotification,setOption)
               }}>
                  <span className=' text-red-700 flex items-center justify-center'>
                  <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
  <path d="M5 19 19 5" />
</svg>
                  </span>
                  Block
               </button>
            </li>
         </ul>

      </div>
      </div>

      </DropDownModel>
      </>
   );
}




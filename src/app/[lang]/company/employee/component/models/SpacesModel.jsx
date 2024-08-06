"use client";

import { useState,useEffect } from 'react';
import profile from '@/public/project-image/user-profile.jpeg';
import DropDownModel from '@/app/[lang]/component/DropDownModel';
import Image from 'next/image';
import Loading from '@/app/[lang]/component/Loading';
import parse  from "html-react-parser";
export default function SpaceModel({setSpaceModel, setSpaceID, spaceID,left,employeeID,addUserToSpace}) {

   const [space, setSpace] = useState([]);
   const [page, setPage] = useState(1);
   const [recordNumber, setRecordNumber] = useState(10);
   const [loader,setLoader] = useState(false);
   const [firstLoader,setFirstLoader] = useState(true);
   const [total, setTotal] = useState('')

   useEffect(() => {

      const abortController = new AbortController();

      fetch(
         `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/user?page=${page}&recordNumber=${recordNumber}&user=${employeeID}`,
         {
            signal: abortController.signal,
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
               // setErrorMessage(false);
               console.log("data space dd....", data.data);
               setSpace(data.data);
               // setTotal(data.data.total)
               setLoader(false);
               setFirstLoader(false);
            }
         })
         .catch((error) => {
            console.log(error);
         });

         return () => {
            abortController.abort();
         };

   }, [page]);


   return (

      <DropDownModel setShowIcon={setSpaceModel}>
      <div className='h-full top-0 left-0 relative w-full'>
      {/* drop-menu-shadow  */}
      <div className={`absolute z-2700 shadow-xl bg-[var(--cu-background-menu)] rounded-md w-72 min-w-40 min-h-80 left-[${left}] overflow-y-auto flex flex-col`} style={{ height:"344px", maxHeight:" calc(100vh - 20px)",left:left, top:'36%'}}>
         
         <div>
            <div className="w-full flex items-center relative">
               <input type="text" autoComplete="off" placeholder="Search..." className="block w-full bg-transparent border-0 outline-none border-bottom-e8eaed text-sm font-normal leading-4 p-4 pe-5 ps-11 text-2a2e34" />
               <div className='searchi w-4 h-4 absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2'>
                                    <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
<path d="M15.857 15.86 21 21.001"></path>
</svg>
                                    </div>
            </div>
         </div>

         <div className="overflow-auto flex-1 pt-1.5 pb-1.5 scroll-bar" onScroll={(e)=>{
            const element = e.currentTarget;
            let scrollValue = element.scrollTop;
            let endScroll = element.scrollHeight - element.clientHeight;
            let all = page * recordNumber;

            if(scrollValue === endScroll && all < total) {
               setLoader(true);
               setPage(prev => prev+1)
            }
         }}>

            {
                              firstLoader ? <Loading styleClass={"w-full h-full flex items-center justify-center"} /> :
                              <ul>

                              {
                                 space?.map((member,index)=>{
                                    return(
                                       <li className="w-full pe-2 ps-2 member" key={member.space_id}>
                                 <div className="relative pe-2 ps-2 h-8 w-full flex items-center justify-between cursor-pointer rounded-md hover:bg-gray-100" data-member={member.space_id} data-index={index} onClick={(e)=>{
                                    console.log("e.target.dataset?.index",)
                                    // console.log("e.target.dataset?.member",e.target.dataset?.member)
                                    let index = e.currentTarget.dataset?.index;
                                    console.log('member......',spaceID);
                                    addUserToSpace(index,employeeID,setSpaceModel)
                                    if(spaceID.some(item=>{
                                       return item.space_id === space[index].space_id
                                    })) {
               
                                    } else {
                                       setSpaceID(prev=>[...prev,space[index]]);
                                    }
               
                                 }} >
                                    <div className='flex items-center flex-1'>
                                    <div className={'overflow-hidden ltr:mr-3 rtl:ml-3'}>
                                       {/* <Image src={member.icon_path ?? profile} alt='profile' className="w-8" /> */}
               
                                       <span className={`space-avatar space-bg-${member.color}`}>
                                {
                                   member.icon_path ? <Image src={member.icon_path} alt="space logo"
                                   className="h-3.5 w-3.5 item-s-color"
                                   />
                                   :
                                   member.icon ? parse(member.icon)
                                   : <span>{member.icon_text}</span>
                                }
                             </span>
               
                                    </div>
                                    <div className=''>
                                       <span className='font-medium text-sm select-none w-36 overflow-hidden text whitespace-nowrap text-ellipsis'>
                                          {member.title}
                                       </span>
                                    </div>
                                    </div>
                                 </div>
                              </li>
                                    )
                                 })
                              }
                           </ul>
            }

            {
               loader && 
               <div className='flex items-center justify-center w-full h-7'>
               <span className='flex'>
               <svg
                              class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                           >
                              <circle
                                 class="opacity-25"
                                 cx="12"
                                 cy="12"
                                 r="10"
                                 stroke="currentColor"
                                 stroke-width="4"
                              ></circle>
                              <path
                                 class="opacity-75"
                                 fill="currentColor"
                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                           </svg>
               </span>
            </div>
            }
            
         </div>

      </div>
      
      </div>
      </DropDownModel>
   );
}
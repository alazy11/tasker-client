"use client";

import profile from '@/public/project-image/user-profile.jpeg';
import DropDownModel from '@/app/[lang]/component/DropDownModel';
import Image from 'next/image';
import { useState,useEffect } from 'react';


export default function ManagerModel({setManagerModel, setManager, manager}) {


   const [employee, setEmployees] = useState([]);
   const [page, setPage] = useState(1);
   const [recordNumber, setRecordNumber] = useState(10);
   const [loader,setLoader] = useState(false);
   const [total, setTotal] = useState('')

   useEffect(() => {

      const abortController = new AbortController();

      fetch(
         `http://localhost:4040/en/company/employee?page=${page}&recordNumber=${recordNumber}`,
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
               console.log("manager space data....", data);
               console.log("manager page....", page);
               setEmployees(prev => [...prev,...Object.values(data.data.result)]);
               setTotal(data.data.total)
               setLoader(false);
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

      <DropDownModel setShowIcon={setManagerModel}>
      <div className='h-full m-auto relative' style={{width:'480px', maxWidth:'100%' }}>

      <div className="absolute z-2700 shadow-xl bg-white rounded-md w-72 min-w-40 min-h-80 overflow-y-auto flex flex-col" style={{ height:"344px", maxHeight:" calc(100vh - 20px)", top:'36%'}}>
         
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

            console.log('scroll.............')
            if(scrollValue === endScroll && all < total) {
               setLoader(true);
               setPage(prev => prev+1)
            }
         }}>
            <ul>

               {
                  employee?.map((member,index)=>{
                     return(
                        <li className="w-full pe-2 ps-2 member" key={member.user_id}>
                  <div className="relative pe-2 ps-2 h-11 w-full flex items-center justify-between cursor-pointer rounded-md hover:bg-gray-100" data-member={member.user_id} data-index={index} onClick={(e)=>{
                     console.log("e.target.dataset?.index",)
                     // console.log("e.target.dataset?.member",e.target.dataset?.member)
                     let index = e.currentTarget.dataset?.index;
                     // console.log('member......',managerID);
                     if(manager.some(item=>{
                        return item.user_id === employee[index].user_id
                     })) {

                     } else {
                        // setManager(prev=>[...prev,employee[index]]);
                        setManager([employee[index]]);
                     }
                     setManagerModel(false);
                  }} >
                     <div className='flex items-center flex-1'>
                     <div className={'w-8 h-8 overflow-hidden rounded-full shadow-profile ltr:mr-3 rtl:ml-3'}>
                        <Image src={member.profile_path ?? profile} alt='profile' className="w-8" />
                     </div>
                     <div className=''>
                        <span className='font-medium text-sm select-none w-36 overflow-hidden text whitespace-nowrap text-ellipsis'>
                           {member.public_name}
                        </span>
                     </div>
                     </div>
                     <button className='relative ltr:left-0 rtl:right-0 border-d6d9de color-700 font-medium button-shadow h-6 pe-2 ps-2 rounded text-xs bg-white hover:bg-transparent hidden' data-member={member.user_id}>
                        Profile
                     </button>
                  </div>
               </li>
                     )
                  })
               }
            </ul>
         </div>

      </div>
      
      </div>
      </DropDownModel>
   );
}
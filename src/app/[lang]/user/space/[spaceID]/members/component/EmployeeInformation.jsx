
'use client';

import Image from "next/image";
import Profile from '@/public/project-image/user-profile.jpeg';
import { useState,useEffect } from 'react';
import ModelOverlay from '@/app/[lang]/component/ModelOverlay';
import socket from "@/app/MainSocket";



function setEmployeeHandel(user,setLoader,setModel,setNotification, setMessage,employeeID,spaceID,referesh, setReferesh){


   setLoader(true);
   const data = {
      memberID : [{employee_id:employeeID}],
      spaceID:spaceID
   }

   console.log("log data lksdksd", data)

   fetch(`http://localhost:4040/en/company/space/${spaceID}/members`, {
      method:'POST',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body:JSON.stringify(data)
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         // let user = user.roomId;
         console.log('user room', user.room_ID);
         if (data.status === "error") {
            setMessage('error please try again !!');
            setNotification(true);
            setTimeout(() => {
               setNotification(false);
            }, 5000);
            console.log("join faild.....", data.data);
            setLoader(false);
         }else if(data.status === "fail"){
            setMessage(data.data.message);
            setLoader(false);
            setNotification(true);
            setTimeout(() => {
               setNotification(false);
            }, 5000);

         } else {
            console.log("join user.....", [...Object.values(data.data)]);
            setLoader(false);
            setModel(false);
            setMessage('a new member has been added to the space.');
            setNotification(true);
            // socket.emit('new order',user.room_ID);
            setTimeout(() => {
               setNotification(false);
            }, 5000);
            setReferesh(!referesh);
         }
      })
      .catch((error) => {
         console.log(error);
         setLoader(false);
      });
}






export default function EmployeeInformation({employeeUserName, setModel, setNotification, company, setMessage, employeeID, spaceID,referesh, setReferesh}) {

   const [loader, setLoader] = useState(false);
   const [user, setUser] = useState([]);

   useEffect(() => {

      fetch(`http://localhost:4040/en/company/search?user=${employeeUserName}`, {
         credentials: "include",
         headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
         },
      })
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("employee faaaaaaa.....", data.data);
            } else {
               // console.log("employee user.....", data.data[0]);
               setUser(data.data[0]);
            }
         })
         .catch((error) => {
            console.log(error);
         });

   }, []);


   return (
      <>
      

      <ModelOverlay showModel={setModel}>
          <div className="z-2700 drop-menu-shadow bg-white w-72 min-w-40 min-h-80 overflow-y-auto flex flex-col border-top-7f77f1" style={{ width:'400px', maxHeight:" calc(100vh - 20px)", top:'19%'}}>
            <div className="w-full h-full flex flex-col ">
               <div className='border-bottom-f0f1f3 mt-3 pb-3'>
                  <div className="flex items-center justify-center min-h-20">
                     <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image src={Profile} alt='profile user' className="w-full" />
                     </div>
                  </div>
                  <div className='w-full text-center text-lg font-medium '>
                        {user.public_name}
                  </div>
               </div>
               <div className='p-4'>
                  <ul className='flex flex-col gap-1' >
                     <li className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-2a2e34 leading-5 whitespace-nowrap flex items-center gap-1'>
                           <span className='block w-4 h-4 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
 <path d="m22 6-10 7L2 6" />
</svg>
                           </span>
                           Email :
                        </span>
                        <span className='max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                           {user.email}
                        </span>
                     </li>
                     <li className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-2a2e34 leading-5 whitespace-nowrap flex items-center gap-1'>
                        <span className='block w-4 h-4 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>
                           </span>
                           phone number :
                        </span>
                        <span className='max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                           {user.phone_number}
                        </span>
                     </li>

                     <li className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-2a2e34 leading-5 whitespace-nowrap flex items-center gap-1'>
                        <span className='block w-4 h-4 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
</svg>
                           </span>
                           Skill :
                        </span>
                        <span className='max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                           {user.job}
                        </span>
                     </li>

                     <li className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-2a2e34 leading-5 whitespace-nowrap flex items-center gap-1 '>
                        <span className='block w-4 h-4 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 9h16" />
 <path d="M4 15h16" />
 <path d="M10 3 8 21" />
 <path d="m16 3-2 18" />
</svg>
                           </span>
                           about :
                        </span>
                        <span className='max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                           {user.about}
                        </span>
                     </li>

                     <li className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-2a2e34 leading-5 whitespace-nowrap flex items-center gap-1'>
                        <span className='block w-4 h-4 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
 <path d="M16 2v4" />
 <path d="M8 2v4" />
 <path d="M3 10h18" />
</svg>
                           </span>
                           birth_date :
                        </span>
                        <span className='max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                           {user.birth_date}
                        </span>
                     </li>

                     <li className='flex items-center gap-2'>
                        <span className='text-sm font-medium text-2a2e34 leading-5 whitespace-nowrap flex items-center gap-1'>
                        <span className='block w-4 h-4 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
 <path d="M8 2v16" />
 <path d="M16 6v16" />
</svg>
                           </span>
                           country :
                        </span>
                        <span className='max-w-full text-ellipsis overflow-hidden whitespace-nowrap'>
                           {user.country}
                        </span>
                     </li>

                  </ul>
               </div>
               <div className='back-nav-side border-top-e8eaed p-4 flex items-center justify-between'>
               <button
                        className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-d6d9de hover:bg-zinc-100 bg-white color-700"
                        onClick={(e) => {
                           setModel(false)
                        }}
                     >
                        Cancel
                     </button>
                     {loader ? (
                        <button className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white">
                           <svg
                              class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                           Processing...
                        </button>
                     ) : (
                        <button
                           className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white"
                           onClick={(e) => {
                              setEmployeeHandel(user,setLoader,setModel,setNotification, setMessage, employeeID, spaceID,referesh, setReferesh);
                           }}
                        >
                           Add To space
                        </button>
                        )
                     }
               </div>
            </div>
         </div>
      </ModelOverlay>

      </>
   );

}
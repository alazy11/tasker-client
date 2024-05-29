"use client";

import Image from "next/image";
import Profile from '@/public/project-image/user-profile.jpeg';
import { useEffect, useState } from "react";
import SuccessNotification from "@/app/[lang]/component/SuccessNotification";
import socket from "@/app/MainSocket";


function setEmployeeHandel(user,setLoader,setNotification,company,room_ID){
   // {userId,job}
   console.log('user info ......',user)
   // setLoader(true);
   const data = {
      user_id : user.user_id,
      company_id : company,
      job : user.job
   }

   fetch(`http://localhost:4040/en/user/join`, {
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
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            console.log("join faild.....", data.data);
            // setLoader(false);
         } else {
            // console.log("join user.....", [...Object.values(data.data)]);
            // setLoader(false);
            setNotification(true);
            socket.emit('accept join',room_ID);
            setTimeout(() => {
               setNotification(false);
            }, 5000);
         }
      })
      .catch((error) => {
         console.log(error);
         // setLoader(false);
      });
}

function deleteOrder(setLoader,setNotification,company,room_ID,setMessage){

   fetch(`http://localhost:4040/en/user/join?company_id=${company}`, {
      method:'DELETE',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      }
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         // let user = user.roomId;
         console.log('user room', user.room_ID);
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            console.log("join faild.....", data);

            // setLoader(false);
         } else {
            // setLoader(false);
            setMessage('order has been deleted.')
            setNotification(true);
            socket.emit('reject join',room_ID);
            setTimeout(() => {
               setNotification(false);
            }, 5000);
         }
      })
      .catch((error) => {
         console.log(error);
         // setLoader(false);
      });
}





export default function Orders({user}) {

   const [loader, setLoader] = useState(false);
   const [orders, setOrders] = useState([]);
   const [notification,setNotification] = useState(false);
   const [message, setMessage] = useState('');

   useEffect(()=>{
      fetch(`http://localhost:4040/en/user/join`, {
         credentials: "include",
         headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
         }
      })
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("join faild.....", data.data);
            } else {
               console.log("join data.....", data.data);
               setOrders([...Object.values(data.data)])
            }
         })
         .catch((error) => {
            console.log(error);
         });
   },[])

   return(
      <div className="w-full h-full p-4 overflow-y-auto scroll-bar">
         <div className="order-grid">
            {
               orders?.map((item,index)=>{

                  return(
                     <div className="border-f0f1f3 min-h-36 rounded-md" key={item.company_id + index} >
            <div className="pt-3 pr-3 pl-3 pb-0">
               <div className="w-18 h-18 ltr:ml-1 rtl:mr-1 rounded-full overflow-hidden">
                  <Image src={Profile} alt="user profile" className="w-full" priority={false}  />
               </div>
            </div>
            <div className="mt-3 pt-0 pr-3 pl-3 pb-0">
               <span className="text-base font-medium">
                  {item.company_name}
               </span>
            </div>

            <div className="mt-3 flex flex-col gap-3 pt-0 pr-3 pl-3 pb-0 ">
               <div className="flex items-center gap-2">
                        <span className='block w-3 h-3 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 9h16" />
 <path d="M4 15h16" />
 <path d="M10 3 8 21" />
 <path d="m16 3-2 18" />
</svg>
                           </span>
               <span className='text-xs font-medium text-2a2e34 leading-5 whitespace-nowrap'>
                  Software Engineering
               </span>

               </div>

               <div className="flex items-center gap-2">
                        <span className='block w-3 h-3 text-2a2e34'>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
 <path d="M16 2v4" />
 <path d="M8 2v4" />
 <path d="M3 10h18" />
</svg>
                           </span>
               <span className='text-xs font-medium text-2a2e34 leading-5 whitespace-nowrap'>
                  12/1/2022
               </span>

               </div>
            </div>

            <div className="mt-4 flex items-center justify-between back-nav-side p-3 ">
            <button     data-company={item.company_id} data-room={item.room_ID}
                        className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center back-dangres justify-center text-white "
                        onClick={(e) => {
                           let company = e.target.dataset.company;
                           let room_ID = e.target.dataset.room;
                           deleteOrder(setLoader,setNotification,company,room_ID,setMessage)
                        }}
                     >
                        Delete
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
                        <button  data-company={item.company_id} data-room={item.room_ID}
                           className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white"
                           onClick={(e) => {
                              let company = e.target.dataset.company;
                              let room_ID = e.target.dataset.room;
                              setEmployeeHandel(user,setLoader,setNotification,company,room_ID,setMessage);
                           }}
                        >
                           Accept
                        </button>
                        )
                     }
            
            </div>

            
            {
               notification && <SuccessNotification setNotification={setNotification} >{message}</SuccessNotification>
            }

         </div>
                  );

               })
            }
         </div>
      </div>
   );
}
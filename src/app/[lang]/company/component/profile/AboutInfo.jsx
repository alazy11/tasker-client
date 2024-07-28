"use client";

import {useEffect, useState} from 'react';

export default function AboutInfo() {

   const[count, setCount] = useState({})

   useEffect(()=>{

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/companyInfo`,{
         credentials:"include",
         headers: {
            "cache-control": "no-cache"
         }
      }).then(res=>{
         return res.json();
      }).then(data=>{
         console.log("data",data);
         setCount(data.data.result);
      })

   },[]);


   return (
      <>
      <div className="flex-1 scroll-bar overflow-auto back-nav-side">
         <div className="min-h-full my-6 mx-8">
            <div className="w-full about-info-grid">
               <div className="flex justify-center">
                  <div className="w-32 h-16 font-medium text-base bg-white flex items-center justify-center gap-1 flex-col border border-solid border-gray-300 rounded-lg">
                     <div className="" >{count.employees}</div>
                     <div>Employees</div>
                  </div>
               </div>
               <div className="flex justify-center">
                  <div className="w-32 h-16 font-medium text-base bg-white flex items-center justify-center gap-1 flex-col border border-solid border-gray-300 rounded-lg">
                     <div className="" >{count.spaces}</div>
                     <div>Spaces</div>
                  </div>
               </div>
               <div className="flex justify-center">
                  <div className="w-32 h-16 font-medium text-base bg-white flex items-center justify-center gap-1 flex-col border border-solid border-gray-300 rounded-lg">
                     <div className="" >{count.projects}</div>
                     <div>Projects</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   );
}
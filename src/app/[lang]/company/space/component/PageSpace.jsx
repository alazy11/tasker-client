"use client";


import SpaceElement from  './SpaceElement';
import { Suspense } from 'react';
import {useState} from 'react';


export default function PageSpace({user}) {


   const [page,setPage] = useState(1);
   const [recordNumber,setRecordNumber] = useState(10);
   const [totalSpace, setTotalSpace] = useState(0);
   const [pageStart,setPageStart] = useState(((page - 1) * recordNumber) + 1);
   const [pageEnd,setPageEnd] = useState((page * recordNumber));



   return(
      <div className="grow min-h-0 grid grid-container-spaces">
         <div className="grow overflow-auto scroll-bar relative">
            <table className="min-w-800 space-table w-full">
               <thead className='sticky top-0'>
                  <tr className="h-8 back-nav-side text-656f7d text-xs border-bottom-f0f1f3">
                     <th className="font-medium w-10%">
                        #
                     </th>
                     <th className="font-medium w-10% text-start">
                        ICON
                     </th>
                     <th className="font-medium  w-30% text-start">
                        TITLE
                     </th>
                     <th className="font-medium  w-40% text-start">
                        DESCRIPTION
                     </th>
                     <th className="font-medium w-10% text-start">
                        ACTION
                     </th>
                  </tr>
               </thead>
               <tbody>
               <Suspense fallback={<p>Loading feed...</p>}>
                 <SpaceElement user={user} pageStart={pageStart} pageEnd={pageEnd} page={page} recordNumber={recordNumber} setTotalSpace={setTotalSpace} />
               </Suspense>
               </tbody>
            </table>
         </div>
         <div className="flex items-center justify-end pe-12 ps-12">

            <div className='flex items-center gap-1'>
            <p className="flex items-center gap-1 color-544dc9 font-semibold">
               <span className="flex items-center ">
               <span>{(page * recordNumber) - recordNumber + 1}</span>
               <span>-</span>
               <span>{(page * recordNumber) > totalSpace ? totalSpace : (page * recordNumber)}</span>
               </span>

               <span>of</span>

               <span>{totalSpace}</span>
            </p>
            <div className="flex items-center gap-1.5">
               <button className={`w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 bg-gray-200 color-544dc9 ${page == 1  ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={page == 1 ? true : false} onClick={(e)=>{

setPage(prev=>{
   setPageStart((((prev-1) - 1) * recordNumber) + 1);
   setPageEnd(((prev-1)  * recordNumber));
   return prev - 1;
   });

}}>
               <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"></path>
</svg>
               </button>
               <button className={`w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 bg-gray-200 color-544dc9 ${(page * recordNumber) > totalSpace ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={(page * recordNumber) > totalSpace ? true : false} onClick={(e)=>{

                  setPage(prev=>{
                     setPageStart((((prev+1) - 1) * recordNumber) + 1);
                     setPageEnd(((prev+1)  * recordNumber));
                     return prev + 1;
                     });
               }}>
               <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0Z"></path>
</svg>
               </button>
            </div>
            </div>
            
         </div>
      </div>
   )
}
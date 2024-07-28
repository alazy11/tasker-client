"use client";

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { useState,useEffect } from 'react';

export default function TagModel({spaceID,setTagModel, selectedTags, setSelectedTags}) {


   const [tag, setTag] = useState([]);
   const [tagSearch, setTagSearch] = useState('');
   const [error, setError] = useState(false);
   // const [page, setPage] = useState(1);
   // const [recordNumber, setRecordNumber] = useState(10);
   // const [loader,setLoader] = useState(false);
   // const [total, setTotal] = useState('')

   useEffect(() => {

      const abortController = new AbortController();

         fetch(`http://localhost:4040/en/company/space/${spaceID}/project/tag?spaceID=${spaceID}`,
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
               console.log("data space dd....", data);
               setTag([...Object.values(data.data)]);
               // setLoader(false);
            }
         })
         .catch((error) => {
            console.log(error);
         });

         return () => {
            abortController.abort();
         };

   }, []);



   return (
      <DropDownModel setShowIcon={setTagModel}>
         <div
            className="h-full m-auto relative"
            style={{ width: "480px", maxWidth: "100%" }}
         >
            {/* drop-menu-shadow  */}
            <div
               className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg w-72 overflow-y-auto flex flex-col"
               style={{ top: "36%" }}

               onKeyDown={(e)=>{
                  let key = e.key;
                  if (key === 'Enter') {
                     if(tagSearch !== '' && tagSearch.trim() !== '') {
                        if(!selectedTags.includes(tagSearch.trim())) {
                           setSelectedTags(prev => [...prev, tagSearch]);
                           setTagSearch('');
                        } else {
                           setError(true)
                        }
                     }
                  }
               }}
            >

               <div className="overflow-auto max-h-32 border-bottom-e8eaed scroll-bar pt-2 pl-2 pr-4 pb-0">
                  <ul className='flex flex-wrap gap-1 pb-1'>
                     {
                        selectedTags?.map((item,indx)=>{
                           return (
                              <li key={item+indx}>
                              <div className='flex items-center cursor-pointer min-w-10 h-5 pl-2.5 pr-2 rounded-tl-sm rounded-bl-sm rounded-tr-xl rounded-br-xl relative tag-ele' style={{backgroundColor:"rgba(106, 133, 255, 0.2)"}}>
                                 <span className='grow max-w-52 w-full flex h-full text-xs font-medium leading-4 justify-center whitespace-nowrap overflow-hidden text-ellipsis text-tag' style={{color:"rgb(106, 133, 255)"}} >
                                    {item}
                                 </span>
      
                                 <button className='remove h-full border-0 absolute z-20 right-0.5 top-0' data-index={indx} onClick={(e)=>{
                                    let ele = [{tag_name:selectedTags.splice(e.currentTarget.dataset.index,1)[0]}];
                                    setTag(prev => [...ele, ...prev])
                                 }}>
                                    <span className=' flex items-center justify-center p-0.5 w-5 h-5' style={{color:"rgb(106, 133, 255)"}}>
                                    <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
      </svg>
                                    </span>
                                 </button>
                              </div>
                           </li>
                           );
                        })
                     }
                  </ul>
               </div>

               <div>
                  <div className="border-bottom-e8eaed w-full ">
                     <input type="text" value={tagSearch} autoComplete="off" className="pt-3.5 ltr:pr-5 rtl:pl-5 pb-3 ltr:pl-2 rtl:pr-2 text-sm font-normal block w-full border-none outline-0 text-2a2e34" placeholder="Search or Create New" onChange={(e)=>{
                        setTagSearch(e.target.value);
                        setError(false)
                     }} />
                  </div>
               </div>

               {
                  error &&  <div className='text-sm font-normal p-2.5 border-bottom-e8eaed' style={{color:'#fd71af'}}>
                  Whoops! This tag has already been added. 
                  </div>
               }

               <div className="min-h-24 max-h-48 overflow-auto scroll-bar pb-1.5">
                  <ul>
                     {
                        tag?.map((item,inde)=>{

                           return (
                              <li className="flex items-center cursor-pointer hover:bg-gray-100 w-full border-bottom-e8eaed p-2 " key={item.tag_name + inde} data-index={inde} onClick={(e)=>{
                                 let ele = tag.splice(e.currentTarget.dataset.index,1)[0].tag_name;
                                 if(!selectedTags.includes(ele)) {
                                    setSelectedTags(prev => [ele, ...prev]);
                                    setError(false)
                                 } else {
                                    setError(true)
                                 }
                              }} >
                              <span className="text-sm font-medium w-full whitespace-nowrap overflow-hidden text-ellipsis" style={{color:'rgb(63, 177, 178)'}}>
                                 {item.tag_name}
                              </span>
                              </li>
                           );

                        })
                     }
                  </ul>
               </div>

            </div>
         </div>
      </DropDownModel>
   );
}

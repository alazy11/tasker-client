"use client";

// import Image from "next/image";
// import profile from "@/public/project-image/user-profile.jpeg";
import { useState,useEffect } from "react";
import parse  from "html-react-parser";


function fillState(count,element,index=0,value='') {
   const elementsToAdd = Array(count).fill(element);
   elementsToAdd[index] = value;
   return elementsToAdd;
}


export default function PlanInformation({phaseCount,spaceID,projectID}) {

   const [phaseNumber, setPhaseNumber] = useState(1);
   const [phase, setPhase] = useState({});
   const [phaseCounter, setPhaseCounter] = useState(fillState(phaseCount,''));
   const [phaseActive, setPhaseActive] = useState(fillState(phaseCount,'',0,'bg-gray-100'));

   
   useEffect(() => {
      const abortController = new AbortController();

      fetch(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/phase?phaseNumber=${phaseNumber}`, {
         signal: abortController.signal,
         credentials: "include",
         headers: {
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
               console.log("data space faild....", data);
            } else {
               // setErrorMessage(false);
               console.log("data space dd....", data);
               setPhase(data.data);
            }
         })
         .catch((error) => {
            console.log(error);
         });

      return () => {
         abortController.abort();
      };
   }, [phaseNumber]);


   return (
      <div className="h-full w-full flex flex-col">

      <div className="rounded p-4 ps-2 pe-2">
            <div className="flex items-center gap-0.5">
            {

            phaseActive.map((item, index)=>{

                           console.log("phaseActive[phaseNumber - 1]", phaseActive)
                           return (
                              <>
                           
            <button className={`p-2 bo border-0 rounded ${item} hover:bg-gray-100 cursor-pointer`} data-pahse={index+1}  onClick={(e)=>{
               setPhaseNumber(e.currentTarget.dataset.pahse);
               setPhaseActive(fillState(phaseCount,'',(e.currentTarget.dataset.pahse - 1),'bg-gray-100'))
            }} >
               <span className="flex items-center">
               <span className="shrink-0 flex pr-2" >
               <svg className=" w-6 h-6  text-2xl block fill-current" style={{color:"rgba(0, 0, 0, 0.38)"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"></circle><text className="text-xs" fill="#fff" x="12" y="12" text-anchor="middle" dominant-baseline="central">{index + 1}</text></svg>
               </span>
               <span className="w-full font-medium text-sm leading-6 block" style={{color:"rgba(0, 0, 0, 0.6)"}}>
                  <span>
                  Phase ({index + 1})
                  </span>
               </span>
               </span>
            </button>

                  {
                     index < phaseCounter.length - 1 ? 
                     <div className="flex-1">
                     <span className="block border border-solid " style={{borderColor:"rgb(189, 189, 189)"}}></span>
                     </div>
                     : ''
                  }

                              </>



                           );

                        })
            }
            </div>
         </div>


         <div className="flex-1">
            <div className="h-full flex flex-col">
               <div className="ps-4 pe-4 mb-2.5">
                  <h2 className="text-lg font-semibold">{phase.title}</h2>
               </div>

               <div className="ps-5 pe-5 flex-1 flex flex-col">
                  
               <ul className="grid-300px gap-1 border-e8eaed rounded-md p-2">
                           <li className="grid grid-project gap-1 cursor-pointer">
                              <div className="grid gap-2 label items-center min-h-9">
                                 <span className=" w-4 h-4 flex items-center justify-center color-600">
                                    <svg
                                       width={"100%"}
                                       height={"100%"}
                                       fill="none"
                                       stroke="currentColor"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth={2}
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M12 21.143a9.143 9.143 0 1 0 0-18.286 9.143 9.143 0 0 0 0 18.286Z" />
                                       <path
                                          fillRule="evenodd"
                                          d="M5.4 12a6.6 6.6 0 1 0 13.2 0 6.6 6.6 0 0 0-13.2 0Zm10.8 0a4.2 4.2 0 1 1-8.4 0 4.2 4.2 0 0 1 8.4 0Z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                 </span>
                                 <p className="text-sm leading-4 font-normal color-600">
                                    State
                                 </p>
                              </div>

                              <div>
                                 <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                    <div className="flex items-center gap-1 h-6 rounded pt-1 ltr:pr-2 rtl:pl-2 pb-1 ltr:pl-1 rtl:pr-1 back-todo-state ">
                                       <div className="w-4 h-4 flex items-center justify-center">
                                          <svg
                                             width={"100%"}
                                             height={"100%"}
                                             fill="currentColor"
                                             viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
                                             <path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5ZM12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z" />
                                          </svg>
                                       </div>
                                       <span className="whitespace-nowrap overflow-hidden text-ellipsis text-xs font-medium leading-4 uppercase text-inherit">
                                          TO DO
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </li>

                           <li
                              className="grid grid-project gap-1 cursor-pointer"
                              onClick={(e) => {
                                 // setPriorityModel(true);
                              }}
                           >
                              <div className="grid gap-2 label items-center min-h-9">
                                 <span className=" w-4 h-4 flex items-center justify-center color-600">
                                 <svg
                                                width={"100%"}
                                                height={"100%"}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                             >
                                                <rect
                                                   width={18}
                                                   height={18}
                                                   x={3}
                                                   y={4}
                                                   rx={2}
                                                   ry={2}
                                                />
                                                <path d="M16 2v4" />
                                                <path d="M8 2v4" />
                                                <path d="M3 10h18" />
                                             </svg>
                                 </span>
                                 <p className="text-sm leading-4 font-normal color-600">
                                    Start Date
                                 </p>
                              </div>

                              <div>
                                 <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">

                                       <div className="text-sm font-normal capitalize leading-5 flex items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                          <span>
                                             {phase.start_date}
                                          </span>
                                       </div>

                                 </div>
                              </div>
                           </li>

                           <li
                              className="grid grid-project gap-1 cursor-pointer"
                              onClick={(e) => {
                                 // setPriorityModel(true);
                              }}
                           >
                              <div className="grid gap-2 label items-center min-h-9">
                                 <span className=" w-4 h-4 flex items-center justify-center color-600">
                                 <svg
                                                width={"100%"}
                                                height={"100%"}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                             >
                                                <rect
                                                   width={18}
                                                   height={18}
                                                   x={3}
                                                   y={4}
                                                   rx={2}
                                                   ry={2}
                                                />
                                                <path d="M16 2v4" />
                                                <path d="M8 2v4" />
                                                <path d="M3 10h18" />
                                             </svg>
                                 </span>
                                 <p className="text-sm leading-4 font-normal color-600">
                                    End Date
                                 </p>
                              </div>

                              <div>
                                 <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">

                                       <div className="text-sm font-normal capitalize leading-5 flex items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                          <span>
                                          {phase.end_date}
                                          </span>
                                       </div>

                                 </div>
                              </div>
                           </li>

                        </ul>

                        <div className="mt-2 flex-1 flex flex-col pb-4">
                           <h3 className="text-base font-semibold mb-1">Description</h3>
                           <div className="border-e8eaed rounded-md p-2 flex-1 relative">
                              <div className="h-full overflow-hidden max-h-44 ql-snow">
                              <p className="ql-editor">
                                 {
                                 phase.description && 
                                 parse(phase.description)}
                              </p>
                              </div>

                              <div className="absolute w-full ">

                              </div>

                           </div>
                        </div>

               </div>
            </div>
         </div>


      </div>
   );
}
"use client";

import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
// import Editor from "@/app/[lang]/component/Editor";
import TextEditor from "@/app/[lang]/component/TextEditor";

// import profile from "@/public/project-image/user-profile.jpeg";
// import Image from "next/image";

const SuccessNotification = dynamic(() => import("@/app/[lang]/component/SuccessNotification"));

function handleChange(html) {
   setDesc(html)
}


function createPhase({project_id,title,state,startDate,endDate,valueDesc,setNotification,setLoader,setModel,spaceID,referesh,setReferesh }) {
   setLoader(true)
   const project = {
      project_id,title,state,startDate,endDate,valueDesc
   }

   

   console.log(project);

   fetch(`http://localhost:4040/en/company/space/${spaceID}/project/phase`, {
      method:'POST',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body:JSON.stringify({...project})
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            console.log("data space faild....", data);
            setLoader(false)
         } else {
            // setErrorMessage(false);
            console.log("data project dd....", data.data);
            setLoader(false);
            setNotification(true);
            setTimeout(() => {
               setModel(false);
               setReferesh(!referesh)
            }, 1000);
            // setSpace(data.data);
         }
      })
      .catch((error) => {
         console.log(error);
         setLoader(false)
      });

}


// function checkValues({phase,title,startDate,endDate,desc}) {

//   return 
// }

function fillState(count,element) {
   const elementsToAdd = Array(count).fill(element);
   return elementsToAdd;
}


export default function AddPhases({ setModel, spaceID, projectInfo, referesh,setReferesh }) {
   const [loader, setLoader] = useState(false);
   const date = useRef(null);
   const [activeModel, setActiveModel] = useState("1");
   const [space_id, setSpace_id] = useState(spaceID);
   const [phase, setPhase] = useState(0);
   const [phaseCount, setPhaseCount] = useState(fillState(projectInfo.phase_number,''));
   const [title, setTitle] = useState(fillState(projectInfo.phase_number,''));
   const [titleValue, setTitleValue] = useState('');
   const [state, setState] = useState(fillState(projectInfo.phase_number,'todo'));
   const [startDate, setStartDate] = useState(fillState(projectInfo.phase_number,''));
   const [startDateValue, setStartDateValue] = useState('');
   const [endDate, setEndDate] = useState(fillState(projectInfo.phase_number,''));
   const [endDateValue, setEndDateValue] = useState('');
   const [desc, setDesc] = useState('');
   const [valueDesc, setValueDesc] = useState(fillState(projectInfo.phase_number,''));
   const [notification, setNotification] = useState(false);


   return (
      <>
         <ModelOverlay showModel={setModel}>
            <div className="project-model contain-content">
               <div className="grid phase-model rounded-xl bg-white w-full h-full relative overflow-hidden">
                  <div className="flex items-center justify-between h-12 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 border-bottom-e8eaed">
                     <ul className="flex items-center gap-6 h-full w-full">
                        <li className="top-item-project text-sm font-medium leading-4 self-stretch flex items-center relative ">
                           <span>Task</span>
                        </li>
                        <li className="text-656f7d text-sm font-medium leading-4 self-stretch flex items-center relative ">
                           <span>Docs</span>
                        </li>
                        <li className="text-656f7d text-sm font-medium leading-4 self-stretch flex items-center relative ">
                           {" "}
                           <span>Plan</span>
                        </li>
                        <li className="text-656f7d text-sm font-medium leading-4 self-stretch flex items-center relative ">
                           {" "}
                           <span>Events</span>
                        </li>
                     </ul>
                     <div>
                        <button className="w-8 h-8 p-1.5 rounded-md hover:bg-gray-100 ">
                           <span
                              className="flex items-center justify-center w-full h-full"
                              style={{ color: "#656f7d" }}
                           >
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
                                 <path d="M18 6 6 18" />
                                 <path d="m6 6 12 12" />
                              </svg>
                           </span>
                        </button>
                     </div>
                  </div>

                  {/* {
               activeModel == 1 
               ? */}

               <div className="rounded p-4">
                  <div className="flex items-center">
                     {
                        phaseCount.map((item, index)=>{

                           return (
                              <>
                              
                  <div className="ps-2 pe-2">
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
                  </div>

                  {
                     index < phaseCount.length - 1 ? 
                        <div className="flex-1">
                        <span className="block border border-solid " style={{borderColor:"rgb(189, 189, 189)"}}></span>
                        </div>
                     : ''
                  }

                              </>



                           );

                        })
                     }
                  {/* <div className="ps-2 pe-2">
                     <span className="flex items-center">
                     <span className="shrink-0 flex pr-2" >
                     <svg className=" w-6 h-6 text-2xl block fill-current" style={{color:"#1976d2"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleIcon"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
                     </svg>
                     </span>
                     <span className="w-full font-medium text-656f7d text-sm leading-6 block" style={{color:"rgba(0, 0, 0, 0.6)"}}>
                     <span style={{color:"#000000de"}}>
                        Phase (1)
                     </span>
                     </span>
                     </span>
                  </div>

                  <div className="flex-1">
                     <span className="block border border-solid " style={{borderColor:"#1976d2"}}></span>
                  </div>

                  <div className="ps-2 pe-2">
                     <span className="flex items-center">
                     <span className="shrink-0 flex pr-2" >
                     <svg className=" w-6 h-6 text-2xl block fill-current" style={{color:"rgb(25, 118, 210)"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"></circle><text  className="text-xs" x="12" y="12" fill="#fff" text-anchor="middle" dominant-baseline="central">2</text>
                     </svg>
                     </span>
                     <span className="w-full font-medium text-656f7d text-sm leading-6 block" style={{color:"rgba(0, 0, 0, 0.6)"}}>
                     <span style={{color:"#000000de"}}>
                     Phase (2)
                     </span>
                     </span>
                     </span>
                  </div>

                  
                  <div className="flex-1">
                     <span className="block border border-solid " style={{borderColor:"rgb(189, 189, 189)"}}></span>
                  </div>


                  <div className="ps-2 pe-2">
                     <span className="flex items-center">
                     <span className="shrink-0 flex pr-2" >
                     <svg className=" w-6 h-6  text-2xl block fill-current" style={{color:"rgba(0, 0, 0, 0.38)"}} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"></circle><text className="text-xs" fill="#fff" x="12" y="12" text-anchor="middle" dominant-baseline="central">3</text></svg>
                     </span>
                     <span className="w-full font-medium text-sm leading-6 block" style={{color:"rgba(0, 0, 0, 0.6)"}}>
                        <span>
                        Phase (3)
                        </span>
                     </span>
                     </span>
                  </div> */}

                  </div>
               </div>

                  <div className="grid grid-cols-2" autoComplete="off">
                     <div className="border-right-e8eaed flex flex-col ">
                        <div className="border-bottom-e8eaed min-h-12 flex items-center p-2 ltr:pl-3 rtl:pr-3 text-xl font-medium leading-6  text-2a2e34 ">
                           <h2>Details</h2>
                        </div>
                        <div
                           className="w-full flex-1 overflow-auto scroll-bar"
                           style={{ maxHeight: "312px" }}
                        >
                           <div className="width-pro min-h-full h-auto m-auto p pt-6 pb-12 ">
                              <div className="w-full min-h-12 mb-3 relative">
                                 {/* <h1 contentEditable={true} aria-placeholder="text" className="text-3xl font-bold w-full min-h-9 outline-none">
                           <span >
                              Title...
                           </span>
                        </h1> */}
                                 <textarea
                                    name="title"
                                    value={titleValue}
                                    placeholder={`Phase (${phase + 1}) Title...`}
                                    className="text-3xl font-bold leading-5 w-full min-h-9 outline-none"
                                    // required
                                    onChange={(e)=>{
                                       setTitleValue(e.target.value);
                                       // title[phase] = e.target.value;
                                       // console.log("title",title[phase])
                                    }}
                                    onBlur={(e)=>{
                                       // title[phase] = titleValue;
                                       setTitle(prev => {
                                          prev[phase] = titleValue;
                                          return prev;
                                       })
                                    }}
                                 ></textarea>
                                 {/* <div className=''>
                                    <span>
                                       this field is required!!
                                    </span>
                                 </div> */}
                              </div>

                              <ul className="flex flex-col gap-1">
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

                                       <div className="flex items-center gap-1">
                                          {/* <label htmlFor="start" onClick={(e)=>{
                                    date.current.click();
                                 }} className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                    <span className="color-500">Start Date</span>
                                 </label> */}
                                          <input
                                             type="date"
                                             ref={date}
                                             name="startDate"
                                             id="start"
                                             className=""
                                             value={startDateValue}
                                             onChange={(e) => {
                                                setStartDateValue(e.target.value)
                                                
                                             }}
                                             onBlur={(e)=>{
                                                // startDate[phase] = startDateValue;
                                                setStartDate(prev => {
                                                   prev[phase] = startDateValue;
                                                   return prev;
                                                })
                                             }}
                                          />
                                          
                                       </div>
                                    </li>

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

                                       <div className="flex items-center gap-1">
                                          {/* <label htmlFor="end" className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                    <span className="color-500">End Date</span>
                                 </label> */}
                                          <input
                                             type="date"
                                             name="endDate"
                                             id="end"
                                             className=""
                                             value={endDateValue}
                                             onChange={(e) => {
                                                setEndDateValue(e.target.value)
                                             }}
                                             onBlur={(e)=>{
                                                setEndDate(prev => {
                                                   prev[phase] = endDateValue;
                                                   return prev;
                                                })
                                                // endDate[phase] = endDateValue;
                                             }}
                                          />
                                       </div>
                                    </li>


                              </ul>

                              <div className="flex items-center justify-between z-10 pt-4 pb-4 bg-white "></div>

                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col">
                        <div className="border-bottom-e8eaed min-h-12 flex items-center p-2 ltr:pl-3 rtl:pr-3 text-xl font-medium leading-6  text-2a2e34 ">
                           <h2>Description</h2>
                        </div>
                        <div className="flex-1">
                           {/* <Editor placeholder={"Write description..."} setDesc={setDesc} desc={desc} value={valueDesc} phase={phase} setValueDesc={setValueDesc} onChange={(e)=>{
                              console.log(e.target.value)
                           }} /> */}
                           <TextEditor setValueDesc={setValueDesc} phase={phase} setDesc={setDesc} desc={desc} />
                        </div>
                     </div>
                  </div>

                  <div className="sticky w-full back-nav-side bottom-0 flex items-center justify-between border-top-e8eaed p-4 ltr:pl-6 rtl:pr-6 ">
                     <button
                        disabled = {phase <= 0}
                        className="text-sm relative font-medium h-8 pl-3 pr-3 disabled:cursor-not-allowed disabled:before:absolute disabled:before:w-full disabled:before:h-full disabled:before:top-0 disabled:before:left-0 disabled:before:z-50 disabled:before:bg-gray-50/20 rounded-md flex items-center justify-center border-d6d9de hover:bg-zinc-100 bg-white color-700"
                        onClick={(e) => {

                           setPhase(prev=>{
                              prev = prev - 1;
                              return prev;
                           });
                           setTitleValue(title[phase - 1])
                           setStartDateValue(startDate[phase - 1])
                           setEndDateValue(endDate[phase - 1])
                           setDesc(valueDesc[phase - 1])
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
                           disabled={(titleValue.trim() !== '') & (startDateValue.trim() !== '') & (endDateValue.trim() !== '') & (desc.trim() !== '') ? false : true }
                           className="text-sm relative disabled:cursor-not-allowed disabled:before:absolute disabled:before:w-full disabled:before:h-full disabled:before:top-0 disabled:before:left-0 disabled:before:z-50 disabled:before:bg-gray-50/20 font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white"
                           onClick={(e) => {

                              setValueDesc(prev=>{
                                 prev[phase] = desc;
                                 console.log('valueDesc.....',prev[phase])
                                 return prev;
                              });

                              if(phase < (projectInfo.phase_number - 1)) {
                                 setTitleValue('')
                                 setStartDateValue('')
                                 setEndDateValue('')
                                 setDesc('')
                                 setPhase(prev=>{
                                    prev = prev + 1;
                                    return prev;
                                 })
                              } else {
                                 valueDesc[phase] = desc;
      console.log("title",title)
      console.log("startDate",startDate)
      console.log("endDate",endDate)
      console.log("valueDesc",valueDesc)
      createPhase({project_id:projectInfo.project_id,title,state,startDate,endDate,valueDesc,setNotification,setLoader,setModel,spaceID,referesh,setReferesh });
                              }
                           }}
                        >
                           Continue
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </ModelOverlay>

         {
            notification && <SuccessNotification setNotification={setNotification} >project <strong> {title} </strong> has been created Successfully. </SuccessNotification>
         }
      </>
   );
}

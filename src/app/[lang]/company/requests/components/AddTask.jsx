// AddTask

"use client";

import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import { useEffect, useRef, useState } from "react";

import 'react-quill/dist/quill.snow.css';

import profile from "@/public/project-image/user-profile.jpeg";
import Image from "next/image";


import parse  from "html-react-parser";


function handleDate(date) {
   let day = new Date(date).getDate().toString();
   let month = new Date(date).getMonth().toString();
   let year = new Date(date).getFullYear();
   return `${year}-${month.length < 2 ? '0' + month : month}-${day.length < 2 ? '0' + day : day}`;
}


function handelDownload({user, spaceID, projectID, folderInfo}) {

   let {folder_path,name} = folderInfo;
   let url= '';

   // if(folderInfo.kind === 'file') {
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/task/download?folder=${JSON.stringify({folder_path,name})}`;
   // } else {
      // url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download?folder=${JSON.stringify({folder_path,name})}`;
   // }

   window.location.href = url;

}



export default function AddTask({ setModel,task,setTask}) {

   return (
      <>
         <ModelOverlay showModel={setModel}>
            <div className="project-model contain-content">
               <div className="grid rounded-xl bg-white w-full h-full relative overflow-hidden">
                  <div className="flex items-center justify-between h-12 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 border-bottom-e8eaed overflow-hidden">
                     <ul className="flex items-center gap-6 h-full w-full">
                        <li className="top-item-project text-sm font-medium leading-4 self-stretch flex items-center relative ">
                           <span>Task</span>
                        </li>
                     </ul>
                     <div>
                        <button className="w-8 h-8 p-1.5 rounded-md hover:bg-gray-100" onClick={(e) => {
                           setTask(false)
                        }}>
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

                  <div className="grid grid-cols-2 overflow-hidden" autoComplete="off">
                     <div className="border-right-e8eaed flex flex-col overflow-hidden">
                        <div className="border-bottom-e8eaed min-h-12 flex items-center p-2 ltr:pl-3 rtl:pr-3 text-xl font-medium leading-6  text-2a2e34 ">
                           <h2>Details</h2>
                        </div>
                        <div
                           className="w-full flex-1 overflow-auto scroll-bar"
                        >
                           <div className="width-pro min-h-full h-auto m-auto p pt-6 pb-12 ">
                              <div className="w-full min-h-12 mb-3">
                                 <h1 aria-placeholder="text" className="text-3xl font-bold w-full min-h-9 outline-none overflow-hidden text-ellipsis whitespace-nowrap">
                           <span >
                              {task.title}
                           </span>
                        </h1>
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
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md  select-none">
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
                                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                             <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                                          </svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          Assign
                                       </p>
                                    </div>

                                    <div>
                                       <div className={`w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md select-none`}>
                                          {/* {manager.length > 0 ? ( */}
                                             <div className="border-d6d9de flex items-center gap-2.5 w-fit p-1 pe-2.5 ps-1.5 rounded-3xl">
                                                <div className="h-6 w-6 rounded-full overflow-hidden">
                                                   <Image
                                                      src={
                                                         task
                                                            ?.profile_path ??
                                                         profile
                                                      }
                                                      alt="profile image"
                                                      className="w-full"
                                                   />
                                                </div>

                                                <div className="text-sm font-semibold text-gray-600">
                                                   <span>
                                                      You
                                                   </span>
                                                </div>
                                             </div>
                                          {/* ) : (
                                             <span className="color-500">
                                                Empty
                                             </span>
                                          )} */}
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

                                    <div className={`flex items-center `}>
                                      {task.start_date}
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

                                   
                                    <div className={`flex items-center `}>
                                      {task.end_date}
                                    </div>
                                 </li>


                                 <li
                                    className="grid grid-project gap-1 cursor-pointer"
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
                                             <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
                                          </svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          Priority
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md select-none ">
                                          {
                                             <div className="text-sm font-normal capitalize leading-5 flex items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                <span
                                                   className={`text-base color-${task.priority} w-4 h-4 flex items-center justify-center`}
                                                >
                                                   <svg
                                                      width={"100%"}
                                                      height={"100%"}
                                                      fill="currentColor"
                                                      stroke="currentColor"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      viewBox="0 0 24 24"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                      <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
                                                   </svg>
                                                </span>
                                                {task.priority}
                                             </div>
                                          }
                                       </div>
                                    </div>
                                 </li>
                              </ul>

                              {/* <FileBox /> */}
                              {
                                 task.download_folder_path.length > 0 &&
                                 <div className="w-full flex items-center justify-between mt-4">
                                 <h2 className="text-xl leading-10">Attachments</h2>
                        
                                 <div>
                                    <button className="cu-task-view-task-content__header-btn" onClick={()=>{
                                       let folderInfo = {
                                          folder_path:task.download_folder_path,
                                          name:task.title
                                       }
                                       handelDownload({folderInfo})
                                    }}>
                                       <div>
                                       <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                          <path  fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V4a1 1 0 0 1 1-1ZM3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" clip-rule="evenodd" ></path>
                                       </svg>
                                       </div>
                                    </button>
                                 </div>
                              </div>
                              }
                           </div>
                        </div>
                     </div>

                     <div className="flex flex-col overflow-hidden">
                        <div className="border-bottom-e8eaed min-h-12 flex items-center p-2 ltr:pl-3 rtl:pr-3 text-xl font-medium leading-6  text-2a2e34 ">
                           <h2>Description</h2>
                        </div>
                        <div className="flex-1 editor-task overflow-hidden">
                           <div class="quill h-full border-0 overflow-hidden">
                              <div class="ql-container ql-snow overflow-auto">
                                 <div class="ql-editor" data-gramm="false" data-placeholder="write description.....">
                                    {
                                       parse(task.description)
                                    }
                                 </div>
                                 <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
                                 <div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a class="ql-action"></a><a class="ql-remove"></a></div></div>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className="sticky w-full back-nav-side bottom-0 flex items-center justify-between border-top-e8eaed p-4 ltr:pl-6 rtl:pr-6 ">

                  </div>
               </div>
            </div>
         </ModelOverlay>

         
      </>
   );
}








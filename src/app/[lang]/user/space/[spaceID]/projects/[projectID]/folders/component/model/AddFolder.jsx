"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ModelOverlay from "@/app/[lang]/component/ModelOverlay";

import FolderTree from "./FolderTree";

const SuccessNotification = dynamic(() => import("@/app/[lang]/component/SuccessNotification"));


function createFolder({spaceID, projectID, folderName, folderID, folderPath,setLoader, setNotification}) {

   setLoader(true);
   let date = new Date();
   const folder = {folderName,folderID,spaceID, folderPa:folderPath, date};

   fetch(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder`, {
      method:'POST',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body:JSON.stringify({...folder})
      })
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               console.log("data space faild....", data);
               setLoader(false);
            } else {
               console.log("data folder dd....", data.data);
               setLoader(false);
               setNotification(true);
            }
         })
         .catch((error) => {
            console.log(error);
            setLoader(false);
         });
}






export default function AddFolder({setModel, user, spaceID, projectID}) {

   const [loader, setLoader] = useState(false);
   const [folderID, setFolderID] = useState(null);
   const [folderPath, setFolderPath] = useState(null);
   const [folderName, setFolderName] = useState('');
   const [notification, setNotification] = useState(false)


   useEffect(()=>{
      console.log("folderID",folderID)
   },[folderID])
   useEffect(()=>{
      console.log("folderPath",folderPath)
   },[folderPath])

// console.log("projectID.....okok",projectID)

   return (
      <ModelOverlay showModel={setModel} >
         {/* <div className="z-2000 relative"> */}
            <div className="rounded-xl bg-white max-w-3xl w-11/12 min-h-96 relative overflow-hidden z-2000  flex flex-col">
               <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold leading-6 text-2a2e34">
                           Create Space
                        </h2>
                        <button
                           className="p-1 flex items-center justify-center bg-transparent rounded-md hover:bg-gray-100"
                           style={{ width: "26.67px", height: "26.67px",color:'#979797' }}
                           onClick={(e) => {

                           }}
                        >
                           <svg
                              width="26.67"
                              height="26.67"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="m5 5 14 14M5 19 19 5"></path>
                           </svg>
                        </button>
                     </div>
                  
                  <div className="mt-5 flex flex-1">
                     <div className="w-2/4 self-stretch p-2.5 pl-0">
                     <input
                                 type="text"
                                 placeholder="e.g. Marketing, Engineering, HR"
                                 value={folderName}
                                 required
                                 className="space-input"
                                 autoComplete="off"
                                 onChange={(e) => {
                                    // setSelectColor('cu-project-avatar__space-bg-black');
                                    setFolderName(e.target.value);
                                 }}
                                 onBlur={(e) => {
                                    // messageHandle(e, setErrorMessage);
                                 }}
                              />
                              <div className="error-message ltr:left-0 rtl:right-0">
                                 <span id="userName-error-ms" className="">
                                    {/* {errorMessage} */}
                                 </span>
                              </div>
                     </div>
                     <div className="self-stretch w-0.5 bg-gray-100">

                     </div>
                     <div className="w-2/4 self-stretch p-2.5 pr-0">
                        <div className="w-full h-full">
                           <FolderTree width={'100%'} user={user} spaceID={spaceID} projectID={projectID} setFolderID={setFolderID} setFolderPath={setFolderPath} />
                        </div>
                     </div>
                  </div>
               </div>

                  <div className="sticky w-full back-nav-side bottom-0 flex items-center justify-between border-top-e8eaed p-4 ltr:pl-6 rtl:pr-6 ">
                     <button
                        className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-d6d9de hover:bg-zinc-100 bg-white color-700"
                        onClick={(e) => {
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
                           // disabled={(manager.length > 0) & (title.trim() !== '') & (phases.trim() !== '') & (startDate.trim() !== '') & (endDate.trim() !== '') & (desc.trim() !== '') ? false : true }
                           className="text-sm relative disabled:cursor-not-allowed disabled:before:absolute disabled:before:w-full disabled:before:h-full disabled:before:top-0 disabled:before:left-0 disabled:before:z-50 disabled:before:bg-gray-50/20 font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white"
                           onClick={(e) => {
                              // createProject({space_id,title,state,manager:manager[0].user_id,priority,selectedTags,phases,startDate,endDate,desc,setNotification,setLoader,setModel,spaceID,referesh,setReferesh });
                              createFolder({spaceID, projectID, folderName, folderID, folderPath,setLoader,setNotification});
                           }}
                        >
                           Continue
                        </button>
                     )}
                  </div>

            </div>
         {/* </div> */}

         {
            notification && <SuccessNotification setNotification={setNotification} >folder <strong> {folderName} </strong> has been created Successfully. </SuccessNotification>
         }

         

      </ModelOverlay>
   );

}
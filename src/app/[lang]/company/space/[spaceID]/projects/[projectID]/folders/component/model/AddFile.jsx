"use client";

import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import profile from "@/public/project-image/user-profile.jpeg";
import handleDateFormat from "@/_util/handleDateFormat";
// import UploadFile from "./UploadFile";

const UploadFile = dynamic(() => import("./UploadFile"));



const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}




export default function AddFile({user, spaceID, projectID,setModel, folderInfo}) {

   const [editFile, setEditFile] = useState(false);
   const [selectedFile, setSelectedFile] = useState([]);
   const [loader, setLoader] = useState(false);
   const [fileInfo, setFileInfo] = useState({})

   const [percent, setPercent] = useState('');

   // const [file, setFile] = useState(0);

   // useEffect(()=>{
   //    UploadFile({spaceID, projectID, fileInfo,selectedFile:selectedFile[file],setLoader,folderInfo,setPercent});
   // },[file])

   return (
      <ModelOverlay showModel={setModel} >

            <div className="rounded-xl bg-white max-w-3xl w-11/12 min-h-96 h-505 relative overflow-hidden z-2000  flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold leading-6 text-2a2e34">
                           Add File in <strong>{folderInfo.name}</strong>
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


         <div className="mt-4">
         <div className="flex flex-col items-center justify-center w-full min-h-28 pb-2 pt-2 pe-4 ps-4 rounded-lg border-e8eaed border-dashed">
   
            <div className="w-6 h-6 color-500 mb-2">
            <svg height="100%" widths={"100%"} fill="currentColor" stroke="currentColor" aria-hidden="true" viewBox="0 0 24 24" version="1.1" data-view-component="true">
   <path d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4Zm10 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z"></path>
   </svg>
            </div>
   
            <span className="block mb-1 text-center text-base font-semibold color-700">
               Drag files here to add them to your Project
            </span>
   
            <p className="text-sm font-medium text-center flex items-center justify-center gap-1 color-7f77f1">
               <span className="block color-500 no-underline">Or</span>
               <label htmlFor="uploadFile" className="mb-0 underline cursor-pointer">
                  <input type="file" name="uploadFile" id="uploadFile" multiple className="hidden" onChange={(e)=>{

                     setFileInfo({
                           projectID,
                           taskID:null,
                           employeeID:null,
                           uploadDate:handleDateFormat(),
                           folderID: folderInfo.folder_id
                        })

                     // console.log(e.target.files[0]);

                     setSelectedFile(prev => [...prev, ...e.target.files]);

                  }} />
                  Upload File
               </label>
            </p>
   
         </div>
   
         {
            selectedFile.length > 0 && 
   
            <div className="mt-1.5 rounded-lg border-e8eaed overflow-auto scroll-bar max-h-60">
            <table className="w-full file-table">
               <thead>
                  <tr className="border-bottom-e8eaed h-8 select-none">
                     <th className="w-1/2 color-600 text-xs font-normal text-start ps-3">Name</th>
                     <th className="w-15% color-600 text-xs font-normal text-start">Size</th>
                     <th className="w-1/5 color-600 text-xs font-normal text-start">Modified</th>
                     <th className="w-15% color-600 text-xs font-normal text-start pe-3">Auther</th>
                  </tr>
               </thead>
   
               <tbody className="h-fit">

                  {
                     selectedFile?.map((file)=>{
                        return(
   
                           <UploadFile
                           user={user}
                           spaceID={spaceID}
                           projectID={projectID}
                           folderInfo={folderInfo}
                           fileInfo={fileInfo}
                           selectedFile={file}
                           />
                        );
                     })
                  }
   
               </tbody>
   
            </table>
         </div>
   
         }
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
                           Processing...{percent}
                        </button>
                     ) : (
                        <button
                           // disabled={(manager.length > 0) & (title.trim() !== '') & (phases.trim() !== '') & (startDate.trim() !== '') & (endDate.trim() !== '') & (desc.trim() !== '') ? false : true }
                           className="text-sm relative disabled:cursor-not-allowed disabled:before:absolute disabled:before:w-full disabled:before:h-full disabled:before:top-0 disabled:before:left-0 disabled:before:z-50 disabled:before:bg-gray-50/20 font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white"
                           onClick={(e) => {
                              // createFile({spaceID, projectID, fileInfo,selectedFile,setLoader,folderInfo});
                              // UploadFile({spaceID, projectID, fileInfo,selectedFile,setLoader,folderInfo,setPercent});
                           }}
                        >
                           Continue
                        </button>
                     )}
                  </div>


      </div>
      </ModelOverlay>
      )

}
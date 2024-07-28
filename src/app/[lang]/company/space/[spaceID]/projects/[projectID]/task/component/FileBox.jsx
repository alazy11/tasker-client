
"use client";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import UploadFile from "./model/UploadFile";
// import DownloadPath from "./DownloadPath";
import FileModel from "./model/FileModel";

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}


export default function FileBox({spaceID,projectID,setAttachment,setDownloadPath,downloadPath}) {

   const [selectedFile, setSelectedFile] = useState([]);
   const [path, setPath] = useState("upload");
   const [btn, setBtn] = useState(true);
   const [fileModel, setFileModel] = useState(false);
   const [taskID,setTaskID] = useState(()=>{
      return uuidv4();
   })



   return (
      <div>
           <div className="w-full flex items-center justify-between mt-8">
         <h2 className="text-xl leading-10">Attachments</h2>

         <div className="flex items-center gap-0.5">
            <button className={`cu-task-view-task-content__header-btn ${ path === "upload" ? "": 'active'}`} onClick={(e)=>{
               setPath("path")
               setAttachment({})
               setSelectedFile([])
            }}>
               <div>
               <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                  <path  fill-rule="evenodd" d="M14.25 4a3.75 3.75 0 0 0-3.75 3.75V14a1.5 1.5 0 0 0 3 0V8a1 1 0 1 1 2 0v6a3.5 3.5 0 1 1-7 0V7.75a5.75 5.75 0 0 1 11.5 0V14a8 8 0 1 1-16 0V8a1 1 0 0 1 2 0v6a6 6 0 0 0 12 0V7.75A3.75 3.75 0 0 0 14.25 4Z" clip-rule="evenodd"></path>
               </svg>
               </div>
            </button>
            <button className={`cu-task-view-task-content__header-btn ${ path === "upload" ? "active": ''}`} onClick={(e)=>{
               setPath("upload")
               setDownloadPath(null)
            }}>
               <div>
               <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                  <path  fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V4a1 1 0 0 1 1-1ZM3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" clip-rule="evenodd" ></path>
               </svg>
               </div>
            </button>
         </div>

      </div>

      {
      path === "upload" ? ( <>
      
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
      <input type="file" name="uploadFile" id="uploadFile" className="hidden" onChange={(e)=>{
         setSelectedFile(prev => [...prev, ...e.target.files]);
         console.log(e.target.files[0]);
      }} />
      Upload File
   </label>
</p>

</div>

{
selectedFile.length > 0 && 

<div className="mt-1.5 rounded-lg border-e8eaed overflow-auto scroll-bar pb-8">
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
selectedFile={file}
spaceID={spaceID} projectID={projectID}
setAttachment={setAttachment}
taskID={taskID}
/>

            );
         })
      }

   </tbody>

</table>
</div>


}
      
      </>
        
      )
   :

   (
      <>
              <div
      className="grid grid-project gap-1 cursor-pointer"
      onClick={(e) => {
         // setPriorityModel(true);
         setFileModel(true);
         // setFilePath()
      }}
   >
      <div className="grid gap-2 label items-center min-h-9">
         <span className=" w-4 h-4 flex items-center justify-center color-600">
               <svg 
                  width={"1rem"}
                  height={"1rem"}
                  className="block"
               viewBox="0 0 24 24" fill="currentColor" >
                  <path  fill-rule="evenodd" d="M14.25 4a3.75 3.75 0 0 0-3.75 3.75V14a1.5 1.5 0 0 0 3 0V8a1 1 0 1 1 2 0v6a3.5 3.5 0 1 1-7 0V7.75a5.75 5.75 0 0 1 11.5 0V14a8 8 0 1 1-16 0V8a1 1 0 0 1 2 0v6a6 6 0 0 0 12 0V7.75A3.75 3.75 0 0 0 14.25 4Z" clip-rule="evenodd"></path>
               </svg>
         </span>
         <p className="text-sm leading-4 font-normal color-600">
            Upload Path
         </p>
      </div>

      <div>
         <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
            {
               <div className="text-sm font-normal capitalize leading-5 flex items-center gap-2 w-full border-none rounded-md text-2a2e34">
                  {downloadPath?.substring(downloadPath.indexOf(`${projectID}`) + projectID.length) || '\\public'}
               </div>
            }
         </div>
      </div>
   </div>
      
      </>

  )

      }

{fileModel && (
            <FileModel
               setFileModel={setFileModel}
               spaceID={spaceID}
               projectID={projectID}
               setFolderID={()=>{}}
               setFolderPath={setDownloadPath}
               setFolderName={()=>{}}
            />
         )}

   </div>
   )
}
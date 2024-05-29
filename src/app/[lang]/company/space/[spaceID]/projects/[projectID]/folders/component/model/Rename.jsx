// Rename
'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { useRef, useState } from 'react';

function handelRename({user, spaceID, projectID, folderInfo,folderName,setRename,setNotification,setMessage}) {


   console.log("folderInfo.name",folderInfo);
   console.log(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/file`);

   let arr = [];
   let url = '';

   if(folderInfo.kind === 'file') {
      folderInfo.old_name = folderInfo.name;
      folderInfo.name = folderName.replace(' ','-');
      arr = folderInfo.file_path.split('\\');
      arr.pop();
      folderInfo.new_file_path = arr.join("\\") + '\\' + folderInfo.name;
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/file`;
   } else {
      folderInfo.old_name = folderInfo.name;
      folderInfo.name = folderName.replace(' ','-');
      arr = folderInfo.folder_path.split('\\');
      arr.pop();
      folderInfo.new_folder_path = arr.join("\\") + '\\' + folderInfo.name;
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}`;
   }


   fetch(url, {
      method:'PUT',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body:JSON.stringify(folderInfo)
      })
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               console.log("data space faild....", data);
               // setLoader(false);
            } else {
               console.log("data folder dd....", data.data);
               // setLoader(false);
               setRename(false);
               setMessage(`the ${folderInfo.kind} ${folderInfo.old_name} has been Renamed to ${folderName} Successfully. `)
               setNotification(true);
            }
         })
         .catch((error) => {
            console.log(error);
            // setLoader(false);
         });
}


function check({folderName,setError}) {
   if(!folderName.trim()) {
      setError(true);
      return false;
   } else {
      setError(false);
      return true;
   }
}


export default function Rename({setRename, folderInfo, folderLeft, folderTop,user, spaceID, projectID,setNotification,setMessage}) {

   // const [priority, setpriority] = useState('normal');
   const refr = useRef(null);
   const [folderName, setFolderName] = useState(folderInfo.name.split('.')[0]);
   const [folderExt, setFolderExt] = useState(folderInfo.name.split('.'));
   const [error, setError] = useState(false);

   return (
      <DropDownModel setShowIcon={setRename}>
      <div className='h-full m-auto relative w-full' 
      // style={{width:'480px', maxWidth:'100%' }}
      >
      {/* <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:(folderTop - refr.current.height)+'px',left:(folderLeft - refr.current.width)+'px'}}> */}
      <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed ps-4 rounded-lg min-w-44 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:folderTop+'px',left:folderLeft+'px',width: "26rem"}}>
         

      <div className="z-50 flex items-center attachment-edit h-full ltr:left-10 rtl:right-10" style={{width:'100%'}}>
                        <div className={`grow flex items-center ${error && "error-attachment-edit"}`}>
                           <input type="text" autoComplete="off" value={folderName} className="pt-1 pb-1 pe-1.5 ps-1.5 grow text-sm font-normal border-e4e4e4" onChange={(e)=>{
                              setFolderName(e.target.value)
                              console.log("folderName",folderName);
                              setError(false);
                           }}
                           onBlur={(e)=>{
                              check({folderName,setError});
                           }}
                           
                           onKeyDown={(e)=>{
                              if (e.key === 'Enter')
                              if(check({folderName,setError})) {
                                 let name = folderInfo.kind === 'file' ? folderName+'.'+folderExt[folderExt.length - 1] : folderName;
                                 handelRename({user, spaceID, projectID, folderInfo,folderName:name,setRename,setNotification,setMessage});
                              }
                           }}

                           />
                           <div className="attachment-edit__ext">{
                              folderInfo.kind === 'file' ?
                              "." + folderExt[folderExt.length - 1] 
                              :
                              ''
                           }</div>
                        </div>
                        <div className="attachment-edit__controls">
                           <button className="attachment-edit__control attachment-edit__control_save" onClick={(e)=>{
                              if(check({folderName,setError})) {
                                 let name = folderInfo.kind === 'file' ? folderName+'.'+folderExt[folderExt.length - 1] : folderName;
                                 handelRename({user, spaceID, projectID, folderInfo,folderName:name,setRename,setNotification,setMessage});
                              }
                           }} >
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <path d="m4 12 6 6L20 6" />
   </svg>
                           </button>
                           <button className="attachment-edit__control attachment-edit__control_cancel" onClick={(e)=>{
                              setRename(false);
                           }}>
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
   <path d="M4 20 20 4" />
   <path d="M20 20 4 4" />
   </svg>
                           </button>
                        </div>
                     </div>

      </div>
      </div>
      </DropDownModel>
   );
}




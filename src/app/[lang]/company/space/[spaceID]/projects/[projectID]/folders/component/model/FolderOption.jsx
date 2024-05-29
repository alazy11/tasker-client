// FolderOption



'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { useRef, useState } from 'react';
import Rename from './Rename';




function handelDelete({user, spaceID, projectID, folderInfo,setNotification,setMessage,setReferesh,referesh,setFolderOptions}) {

   let name = folderInfo.name;
   let url= '';
   console.log("folderInfo",name);

   if(folderInfo.kind === 'file') {
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/file`;
   } else {
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}`;
   }

   fetch(url, {
      method:'DELETE',
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
               setFolderOptions(false);
               setMessage(`the ${folderInfo.kind} ${name} has been deleted Successfully.`)
               setNotification(true);
               setReferesh(!referesh)
            }
         })
         .catch((error) => {
            console.log(error);
            // setLoader(false);
         });
}


function handelDownload({user, spaceID, projectID, folderInfo,setNotification,setMessage,setFolderOptions}) {

   let {folder_path,name} = folderInfo;
   let url= '';

   if(folderInfo.kind === 'file') {
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download/file?file=${JSON.stringify({folder_path,name})}`;
   } else {
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download?folder=${JSON.stringify({folder_path,name})}`;
   }

   window.location.href = url;

}


function handelCopy({user, spaceID, projectID, folderInfo,setCopy}) {

  
   let {folder_path,name} = folderInfo;
   let url= '';

   if(folderInfo.kind === 'file') {
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download/file?file=${JSON.stringify({folder_path,name})}`;
   } else {
      url = `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download?folder=${JSON.stringify({folder_path,name})}`;
   }

   // window.location.href = url;

   navigator.clipboard.writeText(url)
   .then(() => {
     console.log('Text copied to clipboard');
   const inn = setInterval(() => {
      setCopy(true);
     }, "100");

     setTimeout(() => {
      clearInterval(inn)
      setCopy(false);
     }, '2000');

   })
   .catch((err) => {
     console.error('Failed to copy text:', err);
   });

}



export default function FolderOption({setFolderOptions, folderInfo, folderLeft, folderTop,user, spaceID, projectID, setNotification,setMessage,setReferesh,referesh }) {

   // const [priority, setpriority] = useState('normal');
   const refr = useRef(null);
   const [rename, setRename] = useState(false);
   const [copy, setCopy] = useState(false)

   return (
      <>
      <DropDownModel setShowIcon={setFolderOptions}>
      <div className='h-full m-auto relative w-full' 
      // style={{width:'480px', maxWidth:'100%' }}
      >
      {/* drop-menu-shadow  */}
      {/* <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:(folderTop - refr.current.height)+'px',left:(folderLeft - refr.current.width)+'px'}}> */}
      <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 w-52 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:folderTop+'px',left:folderLeft+'px'}}>
         <div className='py-2 ps-4 pe-3'>
            <div className='flex items-center max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold uppercase color-600' style={{letterSpacing:'.05em', fontSize:'11px'}}>
            {/* Attachment */}
            <div>
            {folderInfo.name}
            </div>
            </div>
         </div>
         <ul>
         {
         console.log('hhhh',refr.current)
         }
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 `} onClick={(e)=>{
                  setRename(true)
               }}>
                  <span className="text-656f7d">
                                                      <svg
                                                         width="1rem"
                                                         height="1rem"
                                                         fill="none"
                                                         stroke="currentColor"
                                                         strokeLinecap="round"
                                                         strokeLinejoin="round"
                                                         strokeWidth="2"
                                                         viewBox="0 0 24 24"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                         <path d="m14 6 4 4m.414-5.586 1.172 1.171a2 2 0 0 1 0 2.829L8 20H4v-4L15.586 4.414a2 2 0 0 1 2.828 0Z"></path>
                                                      </svg>
                                                   </span>
                  Rename
               </button>
            </li>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 `} onClick={(e)=>{
                  handelCopy({user, spaceID, projectID, folderInfo,setCopy}) 
               }}>
                  <span className="text-656f7d">

                     {
                        copy ? <svg                         width="1rem"
                        height="1rem" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6 9 17l-5-5" />
</svg>
:
<svg 
width="1rem"
height="1rem"
fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
<path d="M6 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
<path d="M18 16a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
<path d="m8.59 13.51 6.83 3.98" />
<path d="m15.41 6.51-6.82 3.98" />
</svg>
                     }
                  </span>
                  {
                     copy ? "Copied !"  :  "Copy URL"
                  }
               </button>
            </li>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34`} onClick={(e)=>{
                  handelDownload({user, spaceID, projectID, folderInfo,setNotification,setMessage,setFolderOptions})
               }}>
                  <span className="text-656f7d">
                  <svg 
                                                         width="1rem"
                                                         height="1rem" 
                  fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m16.623 10.36 1.213 1.211-6.061 6.061-6.061-6.06 1.212-1.213 3.992 3.992V3h1.714v11.35l3.992-3.99Z" />
    <path d="M19.429 19.29H4v1.713h15.429V19.29Z" />
</svg>


                  </span>
                  Download
               </button>
            </li>

            <div className='bg-gray-200 w-full my-2' style={{height:'1px'}}>

            </div>

            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal text-red-700 leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md`} onClick={(e)=>{
                  handelDelete({user, spaceID, projectID, folderInfo, setNotification,setMessage,setReferesh,referesh,setFolderOptions})
               }}>
                  <span className=' text-red-700 flex items-center justify-center'>
                  <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11v6m4-6v6M4 7h16m-1 0-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7h14Zm-4 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6Z" />
</svg>
                  </span>
                  Delete
               </button>
            </li>
         </ul>

      </div>
      </div>

      </DropDownModel>
      {
         rename && 
      <Rename setRename={setRename} 
      setNotification={setNotification}
      setMessage={setMessage}
      user={user} spaceID={spaceID} projectID={projectID} folderInfo={folderInfo} folderLeft={folderLeft + 208} folderTop={folderTop + 40} />
      }
      </>
   );
}




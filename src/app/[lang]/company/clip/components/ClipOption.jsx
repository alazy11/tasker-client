'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';
import { useRef, useState } from 'react';




function handelDelete(clip,clipName,setClipOpt) {

   let url= '';

   url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip/${clip.clip_id}`;

   fetch(url, {
      method:'DELETE',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body:JSON.stringify({clip_path:clip.path})
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
               setReferesh(!referesh);
            }
         })
         .catch((error) => {
            console.log(error);
            // setLoader(false);
         });
}


function handelDownload(clip,clipName,setClipOpt) {

   console.log(clip.path);
   let url= '';
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip/${clip.clip_id}/download?clip=${JSON.stringify({clip_path:clip.path,name:clipName})}`;
   window.location.href = url;
   setClipOpt(false)
}


function handelCopy({user, spaceID, projectID, folderInfo,setCopy}) {

  
   let {folder_path,name} = folderInfo;
   let url= '';

   if(folderInfo.kind === 'file') {
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download/file?file=${JSON.stringify({folder_path,name})}`;
   } else {
      url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download?folder=${JSON.stringify({folder_path,name})}`;
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



export default function ClipOption({setClipOpt, clip, clipName, left, top,setRename}) {

   // const [priority, setpriority] = useState('normal');
   const refr = useRef(null);
   const [copy, setCopy] = useState(false)

   return (
      <>
      <DropDownModel setShowIcon={setClipOpt}>
      <div className='h-full m-auto relative w-full' 
      // style={{width:'480px', maxWidth:'100%' }}
      >
      {/* drop-menu-shadow  */}
      {/* <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:(folderTop - refr.current.height)+'px',left:(folderLeft - refr.current.width)+'px'}}> */}
      <div ref={refr} className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 w-48 pt-2 pb-2 overflow-y-auto drop-down-animation flex flex-col" style={{ top:top+40+'px',left:left -165+'px'}}>
         <ul>

            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full min-h-8 p-1.5 border-none rounded-md text-2a2e34 `} onClick={(e)=>{
                  setRename(true);
                  setClipOpt(false)
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
            <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full min-h-8 p-1.5 border-none rounded-md text-2a2e34 `} onClick={(e)=>{
handelDownload(clip,clipName,setClipOpt) 
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

            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal text-red-700 leading-5 flex items-center hover:back-gray200 gap-3 w-full min-h-8 p-1.5 border-none rounded-md`} onClick={(e)=>{
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
      </>
   );
}





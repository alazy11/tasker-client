
"use client";

import { useState } from "react";




const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x){

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}



export default function FileBox() {

   const [editFile, setEditFile] = useState(false);
   const [selectedFile, setSelectedFile] = useState([]);


   return (
      <div>
      {/* <div className="w-full flex items-center justify-between">
         <h2 className="text-xl leading-10">Attachments</h2>


      </div> */}


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

                        <tr className="border-bottom-e8eaed hover:bg-gray-100 text-start select-none relative file-active">
                  <td className="ps-4 pt-1.5 pb-1.5">
                     <div className="h-full w-full flex items-center gap-2">
                     <div className="w-5 h-5 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="19" height="19" x=".5" y=".5" fill="#FFEFEF" stroke="#F3AEAF" rx="4.5"/><path fill="#EB9091" d="M7.306 10.064a.93.93 0 0 1-.133.488.96.96 0 0 1-.843.488H4.969c-.06 0-.089.032-.089.096v1.524a.334.334 0 0 1-.103.244.322.322 0 0 1-.237.096h-.2a.347.347 0 0 1-.244-.096A.347.347 0 0 1 4 12.66V8.34a.33.33 0 0 1 .096-.244A.347.347 0 0 1 4.34 8h1.99a.96.96 0 0 1 .843.488.945.945 0 0 1 .133.496v1.08Zm-.873 0v-1.08c0-.07-.034-.104-.103-.104H4.969c-.06 0-.089.032-.089.096v1.088c0 .064.03.096.089.096h1.36c.07 0 .104-.032.104-.096Zm5.129 1.96a.93.93 0 0 1-.133.488 1.02 1.02 0 0 1-.355.355.931.931 0 0 1-.488.133H8.61a.347.347 0 0 1-.244-.096.347.347 0 0 1-.097-.244V8.34a.33.33 0 0 1 .097-.244A.347.347 0 0 1 8.61 8h1.975a.93.93 0 0 1 .488.133c.148.089.266.207.355.355a.945.945 0 0 1 .133.496v3.04Zm-.88 0v-3.04c0-.07-.032-.104-.096-.104H9.254c-.064 0-.096.032-.096.096v3.055c0 .064.032.096.096.096h1.332c.024 0 .046-.01.066-.03a.115.115 0 0 0 .03-.073Zm5.062-3.484a.334.334 0 0 1-.104.244.313.313 0 0 1-.23.096h-1.908c-.059 0-.088.032-.088.096v.984c0 .07.03.104.088.104h1.643a.33.33 0 0 1 .34.332v.208a.347.347 0 0 1-.096.244.33.33 0 0 1-.244.096h-1.643c-.059 0-.088.03-.088.088v1.628a.334.334 0 0 1-.104.244.322.322 0 0 1-.237.096h-.207a.338.338 0 0 1-.236-.096.347.347 0 0 1-.097-.244V8.34a.33.33 0 0 1 .333-.34h2.545c.088 0 .165.032.229.096.07.064.104.146.104.244v.2Z"/></svg>
                     </div>

                     <div className="flex-1 text-start">
                        <div className="w-5/6 flex items-center">
                        <a href="#" className="flex max-w-full text-2a2e34 transition-colors text-sm link-hover" >
                           <span className="inline-block w-full text-ellipsis overflow-hidden whitespace-nowrap">
                               {file.name}
                           </span>
                        </a>
                        </div>
                     </div>

                     <div className="h-full flex items-center pe-2 edit-btn">
                        <button className="edit-btn-shadow text-base w-6 h-6 rounded flex items-center justify-center border-d6d9de bg-white color-700"  onClick={(e)=>{
                           setEditFile(true);
                        }} >
                           <span className="flex items-center justify-center text-inherit w-4 h-4">
                           <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.333 16.048 16.57 3.81a2.56 2.56 0 0 1 3.62 3.619L7.951 19.667a2 2 0 0 1-1.022.547L3 21l.786-3.93a2 2 0 0 1 .547-1.022z" />
<path d="m14.5 6.5 3 3" />
</svg>
                           </span>
                        </button>
                     </div>

                     </div>

                  </td>
                  <td className="pt-1.5 pb-1.5">
                     <div className="text-sm font-normal text-2a2e34 flex items-center gap-1">
                        <span>{
                           // (file.size / 1024 / 1024).toFixed()
                           niceBytes(file.size)
                        }</span>
                        {/* <span>MB</span> */}
                     </div>
                  </td>
                  <td className="pt-1.5 pb-1.5">
                     <div className="text-sm font-normal text-2a2e34 flex items-center gap-1">
                        <span>
                           {
                              file.date =  `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
                              // console.log("new Date()", new Date())
                              // new Date()
                           } {
                              console.log("file....",file)
                           }
                        </span>
                        {/* <span>mins</span>
                        <span>ago</span> */}
                     </div>
                  </td>
                  <td className="flex items-center justify-between pe-3 pt-1.5 pb-1.5">
                     <div className="w-7 h-7 relative rounded-full overflow-hidden">
                        <Image src={profile} alt="auther profile" fill />
                     </div>
                     <div>
                        <button className="border-0 w-6 h-6 rounded flex items-center justify-center color-700 bg-transparent back-hover">
                        <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
<path d="M19 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
<path d="M5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
</svg>
                        </button>
                     </div>
                  </td>

                  {
                     editFile &&
                     <div className="absolute z-50 flex items-center attachment-edit h-full ltr:left-10 rtl:right-10">
                     <div className="grow flex items-center">
                        <input type="text" autoComplete="off" className="pt-1 pb-1 pe-1.5 ps-1.5 grow text-sm font-normal border-e4e4e4" />
                        <div className="attachment-edit__ext">.pdf</div>
                     </div>
                     <div className="attachment-edit__controls">
                        <button className="attachment-edit__control attachment-edit__control_save">
                        <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m4 12 6 6L20 6" />
</svg>
                        </button>
                        <button className="attachment-edit__control attachment-edit__control_cancel" onClick={(e)=>{
                           setEditFile(false);
                        }}>
                        <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20 20 4" />
<path d="M20 20 4 4" />
</svg>
                        </button>
                     </div>
                  </div>
                  }

               </tr>

                     );
                  })
               }

            </tbody>

         </table>
      </div>

      }
      
   </div>
   )
}
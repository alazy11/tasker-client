"use client";
import { useRef, useState, useEffect } from "react";
import TopMiddleNav from "../../component/TopMiddleNav";
import dynamic from "next/dynamic";
import FolderTree from "./model/FolderTree";

// import AddFolder from "./model/AddFolder";

const AddFolder = dynamic(() => import("./model/AddFolder"));
const AddFile = dynamic(() => import("./model/AddFile"));
const FolderOption = dynamic(() => import("./model/FolderOption"));
const SuccessNotification = dynamic(() => import("@/app/[lang]/component/SuccessNotification"));


export default function PageFolder({ user, spaceID, projectID }) {


   const [model, setModel] = useState(false);
   const [modelFile, setModelFile] = useState(false);
   const [folderInfo, setFolderInfo] = useState({});
   const [subChild, setSubChild] = useState([]);
   const [referesh, setReferesh] = useState(false);
   const [folderOptions, setFolderOptions] = useState(false);
   const [folderActive, setFolderActive] = useState(false);
   const [folderLeft, setFolderLeft] = useState('0px');
   const [folderTop, setFolderTop] = useState('0px');
   const [notification, setNotification] = useState(false)
   const [message, setMessage] = useState('')


   return(
      <>

         <TopMiddleNav
            setEmployee={setModel}
            projectID={projectID}
            spaceID={spaceID}
         >
            New Folder
         </TopMiddleNav>

         <div className="flex-1 w-full" onKeyDown={(e)=>{
                              console.log(e.key)
                              if(e.key == 't') {
                                 console.log('osdhofi')
                                 input.focus();
                              }
                           }} >

            <div className="w-full h-full flex">

               <FolderTree  user={user} spaceID={spaceID} projectID={projectID} setModelFile={setModelFile} setSubChild={setSubChild} setFolderInfo={setFolderInfo} referesh={referesh} setReferesh={setReferesh}
               folderActive={folderActive}
               setFolderActive={setFolderActive}
               setFolderOptions={setFolderOptions}
               folderOptions={folderOptions}
               setFolderLeft={setFolderLeft}
               setFolderTop={setFolderTop}
               />

               <div className="flex-1 h-full mr-2 ml-2 pt-2 pb-5 flex flex-col">
                  <div className="h-12 w-full border border-solid border-gray-200 rounded-md mb-4">
                     
                  </div>
                  <div className="border border-solid border-gray-200 rounded-md flex-1">
                     <table className="cAQuiW">
                        <thead className="h-10">
                           <tr className="back-nav-side iaPnrW font-normal">
                              <th className="w-2/4 ltr:pl-4 rtl:pr-4 ltr:rounded-t-md rtl:rounded-r-md font-medium">Name</th>
                              <th className="font-medium ltr:pl-4 rtl:pr-4">Created date</th>
                              <th className="w-32 font-medium pl-4 pr-4 text-end ltr:rounded-r-md rtl:rounded-t-md ">Sub size</th>
                           </tr>
                        </thead>
                        
                        <tbody>


                           {
                              subChild.length > 0 ?

                              <>
                              <tr className="text-sm h-10 jpIAs hover:bg-gray-100">
                              <td className="font-normal text-sm w-full px-4">
                                 <a href="#" className="" style={{color:'#636c76'}}>
                                    <div className="cRnMUY w-full flex items-center gap-2.5" style={{color:"#b0bac6"}}>
                                    <svg aria-hidden="true" focusable="false" className="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" ><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                                    ..
                                    </div>
                                 </a>
                              </td>
                           </tr>
                                 
                                 {
                              subChild?.map((item,index)=>{

                                 return (

                                    <>

                                    <tr key={item.name + index} className="text-sm h-10 jpIAs hover:bg-gray-100">
                                    <td className="font-normal text-sm text-start ltr:pl-4 rtl:pr-4 ">
                                       <div className="react-directory-filename-column" style={{color:"#b0bac6"}}>

                                       {
                                             item.kind === 'file' 
                                             ?
                                             <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>                                       
                                             :
                                             <svg aria-hidden="true" focusable="false" className="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" ><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
                                          }

                                       {/* <svg aria-hidden="true" focusable="false" className="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" ><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg> */}
                                       <div className=" overflow-hidden">
                                          <h3>
                                             <div className="react-directory-truncate">
                                                <a href="#" className="text-2a2e34 link">{item.name}</a>
                                             </div>
                                          </h3>
                                       </div>
                                       </div>
                                    </td>
         
                                    <td className="font-normal text-sm text-start ltr:pl-4 rtl:pr-4 ">
                                       <div>
                                       <div className="react-directory-commit-message">
                                          <span className="text-2a2e34" title="Feb 12, 2023, 11:50 PM GMT+3">
                                             24 day ago
                                          </span>
                                       </div>
                                       </div>
                                    </td>
         
                                    <td className="font-normal text-sm text-start  ltr:pl-4 rtl:pr-4 ">
                                       <div className="react-directory-commit-message ltr:pr-4 rtl:pl-4 text-end">
                                          <span className="text-2a2e34" >
                                             24 sub
                                          </span>
                                       </div>
                                    </td>
         
                                    </tr>
                                    </>
                                 );

                              })}
                           </>
                           : ''

                           }

                        </tbody>

                     </table>
                  </div>
               </div>
            </div>

         </div>

         {
            model && <AddFolder setModel={setModel}  user={user} spaceID={spaceID} projectID={projectID} />
         }

         {
            modelFile && <AddFile setModel={setModelFile} folderInfo={folderInfo} user={user} spaceID={spaceID} projectID={projectID} />
         }

         {
            folderOptions && <FolderOption 
            setNotification={setNotification}
            setMessage={setMessage}
            setReferesh={setReferesh}
            referesh={referesh}
            user={user} spaceID={spaceID} projectID={projectID} setFolderOptions={setFolderOptions} folderInfo={folderInfo} folderLeft={folderLeft} folderTop={folderTop} />
         }

         
         {
            notification && <SuccessNotification setNotification={setNotification} >{message}</SuccessNotification>
         }

      </>
   );

}
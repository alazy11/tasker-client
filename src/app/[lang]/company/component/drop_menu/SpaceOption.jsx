"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import AssignManager from "./space_option/AssignManager";
import CreateNew from "./space_option/CreateNew";
import { useState } from "react";

import ManagerModel from "../../space/[spaceID]/projects/component/model/ManagerModel";
import Notification from "@/app/[lang]/component/Notification";
import ChangeIconSpace from "./space_option/ChangeIcon";

async function deleteSpace(spaceId, referesh, setProgress, setSave, setModel, setReferesh) {
   setSave(true);
   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceId}`, {
      method:'DELETE',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      }
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            setSave(false);
         } else {
            setModel(false);
            setProgress(false);
            setTimeout(()=>{
               setSave(false);
               setProgress(true);
               setReferesh(!referesh);
            },2000);
         }
      })
      .catch((error) => {
         console.log(error);
         setSave(false);
      });
}



export default function SpaceOption({setSpaceOptionModel,folderLeft, folderTop,spaceID,getSpace,setGetSpace,setMessage,setProgress,setSave,setSetting,setRename}) {

   const[top, setTop] = useState("");
   const[left, setLeft] = useState("");
   const[manager,setManager] = useState([]);
   const[managerModel,setManagerModel] = useState(false);
   const[createNewModel,setCreateNewModel] = useState(false);
   const[changeIconModel,setChangeIconModel] = useState(false);
   const [notification, setNotification] = useState(false);
   const [messageNotification, setMessageNotification] = useState('');
   const [title, setTitle] = useState('');

   return (
      <>
      <DropDownModel setShowIcon={setSpaceOptionModel}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 bg-[var(--cu-background-menu)] drop-menu-shadow border-e8eaed rounded-md min-w-40 overflow-y-auto flex flex-col pt-2 pb-2"
            style={{ top:folderTop+'px',left:folderLeft+'px',width: "272px", top: "auto",bottom: "10px",
            }}
         >
            <ul>
               <li className="border-bottom-e8eaed">
                  <ul className="pb-2 flex flex-col gap-1.5">

                     <li className="min-h-3 pe-2 ps-2 ">
                        <button
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                           onClick={(e)=>{
                              setRename(true);
                              setSpaceOptionModel(false)
                           }}
                        >
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24"><path fillRule="evenodd" d="M16.503 4.413a1.41 1.41 0 0 1 1.994 0l1.092 1.092c.55.55.55 1.443 0 1.994L18.5 8.588l-3.086-3.086 1.089-1.089zM14 6.916l3.086 3.086-9.54 9.54-3.43.343.343-3.429L14 6.916zm5.911-3.917a3.41 3.41 0 0 0-4.822 0L3.045 15.042a2 2 0 0 0-.576 1.215l-.464 4.645a1 1 0 0 0 1.094 1.095l4.645-.465a2 2 0 0 0 1.215-.576L21.003 8.913a3.41 3.41 0 0 0 0-4.822L19.91 2.999z" clipRule="evenodd"></path></svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Rename
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button 
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                           >
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.843 3.743a5.95 5.95 0 1 1 8.414 8.414l-2.55 2.55a1 1 0 0 1-1.414-1.414l2.55-2.55a3.95 3.95 0 1 0-5.586-5.586l-2.55 2.55a1 1 0 1 1-1.414-1.414l2.55-2.55zm2.45 4.55a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6zm-6.586 1a1 1 0 0 1 0 1.414l-2.55 2.55a3.95 3.95 0 0 0 5.586 5.586l2.55-2.55a1 1 0 1 1 1.414 1.414l-2.55 2.55a5.95 5.95 0 1 1-8.414-8.414l2.55-2.55a1 1 0 0 1 1.414 0z" clipRule="evenodd"></path></svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Copy link
                           </span>
                        </button>
                     </li>
                  </ul>
               </li>

               <li className="border-bottom-e8eaed">
                  <ul className="pb-2 pt-2 flex flex-col gap-1.5">
                  <li className="min-h-3 pe-2 ps-2">
                        <button 
                           className={`p-2 flex items-center w-full gap-3 back-search-member rounded ${createNewModel && "nav-menu-item-active"}`}
                           onClick={(e)=>{
                              let rect = e.currentTarget.getBoundingClientRect();
                              setTop((rect.top + (rect.height / 2)) + 'px');
                              setLeft((rect.left + rect.width) + 'px');
                              setCreateNewModel(true);
                           }}
                           >
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M13 4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4z" clip-rule="evenodd"></path>                           
                           </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Create new
                           </span>
                           <div className="cu-dropdown-list-item__submenu">
                           <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 17 16">
                              <path fill-rule="evenodd" d="M7.193 3.53c.26-.26.683-.26.943 0l4 4a.667.667 0 0 1 0 .942l-4 4a.667.667 0 0 1-.943-.943L10.722 8 7.193 4.472a.667.667 0 0 1 0-.942Z" clip-rule="evenodd"></path>
                           </svg>
                           </div>
                        </button>
                     </li>

                     <li className="min-h-3 pe-2 ps-2">
                        <button 
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                           onClick={(e)=>{
                              let rect = e.currentTarget.getBoundingClientRect();
                              setTop((rect.top + (rect.height / 2)) + 'px');
                              setLeft((rect.left + rect.width) + 'px');
                              setChangeIconModel(true);
                           }}
                           >
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M11.411 2.126c.12-.047.34-.126.589-.126.248 0 .468.079.589.126.148.059.303.136.458.222.31.172.676.412 1.072.705a19.17 19.17 0 0 1 2.683 2.444c1.833 2.011 3.698 4.905 3.698 8.14C20.5 18.272 16.677 22 12 22s-8.5-3.727-8.5-8.364c0-3.234 1.865-6.128 3.698-8.14a19.173 19.173 0 0 1 2.683-2.443c.396-.293.762-.533 1.072-.705.155-.086.31-.163.458-.222zM8.677 6.844C6.968 8.719 5.5 11.144 5.5 13.636 5.5 17.134 8.393 20 12 20s6.5-2.866 6.5-6.364c0-2.492-1.468-4.917-3.177-6.792a17.18 17.18 0 0 0-2.395-2.184A8.153 8.153 0 0 0 12 4.055a8.143 8.143 0 0 0-.928.605 17.173 17.173 0 0 0-2.395 2.184zm3.495-2.867zm-.332.004zM16 12.5a1 1 0 0 1 1 1 5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3 1 1 0 0 1 1-1z" clip-rule="evenodd"></path>                           </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Color & Icon
                           </span>
                           <div className="cu-dropdown-list-item__submenu">
                           <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 17 16">
                              <path fill-rule="evenodd" d="M7.193 3.53c.26-.26.683-.26.943 0l4 4a.667.667 0 0 1 0 .942l-4 4a.667.667 0 0 1-.943-.943L10.722 8 7.193 4.472a.667.667 0 0 1 0-.942Z" clip-rule="evenodd"></path>
                           </svg>
                           </div>
                        </button>
                     </li>

                     <li className="min-h-3 pe-2 ps-2">
                        <button 
                        className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                         onClick={(e)=>{
                           setSetting(true);
                           setSpaceOptionModel(false)
                        }}>
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24"> 
                           <path fill-rule="evenodd" d="M12.002 8.429a3.571 3.571 0 1 0 0 7.143 3.571 3.571 0 0 0 0-7.143zM10.432 12a1.571 1.571 0 1 1 3.142 0 1.571 1.571 0 0 1-3.143 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M10.016 2a1 1 0 0 0-.96.718l-.714 2.428-.45.26-2.473-.586a1 1 0 0 0-1.097.473l-1.98 3.426a1 1 0 0 0 .142 1.191l1.748 1.832v.516L2.484 14.09a1 1 0 0 0-.142 1.19l1.98 3.428a1 1 0 0 0 1.097.472l2.473-.586.45.26.714 2.428a1 1 0 0 0 .96.718h3.96a1 1 0 0 0 .959-.713l.728-2.432.45-.26 2.463.597a1 1 0 0 0 1.101-.472l1.981-3.427a1 1 0 0 0-.139-1.187l-1.744-1.846v-.52l1.744-1.846a1 1 0 0 0 .139-1.187l-1.98-3.427a1 1 0 0 0-1.102-.472l-2.463.597-.45-.26-.728-2.432A1 1 0 0 0 13.977 2h-3.961zm.132 4.095L10.764 4h2.468l.629 2.1a1 1 0 0 0 .458.579l1.141.658a1 1 0 0 0 .735.105l2.125-.514 1.233 2.134-1.505 1.593a1 1 0 0 0-.273.687v1.316a1 1 0 0 0 .273.687l1.505 1.593-1.233 2.134-2.125-.514a1 1 0 0 0-.735.105l-1.14.658a1 1 0 0 0-.46.58L13.233 20h-2.468l-.616-2.095a1 1 0 0 0-.46-.584l-1.141-.658a1 1 0 0 0-.73-.107l-2.135.506-1.234-2.134 1.508-1.58a1 1 0 0 0 .276-.69v-1.316a1 1 0 0 0-.276-.69l-1.508-1.58 1.234-2.134 2.135.506a1 1 0 0 0 .73-.107l1.14-.658a1 1 0 0 0 .46-.584z" clip-rule="evenodd"></path>
                           </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Space settings
                           </span>
                           <div className="cu-dropdown-list-item__submenu">
                           <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 17 16">
                              <path fill-rule="evenodd" d="M7.193 3.53c.26-.26.683-.26.943 0l4 4a.667.667 0 0 1 0 .942l-4 4a.667.667 0 0 1-.943-.943L10.722 8 7.193 4.472a.667.667 0 0 1 0-.942Z" clip-rule="evenodd"></path>
                           </svg>
                           </div>
                        </button>
                     </li>
                     <AssignManager setSpaceOptionModel={setSpaceOptionModel}
                     setManagerModel={setManagerModel}
                     managerModel={managerModel}
                     manager={manager} spaceID={spaceID}
                     setTop={setTop} setLeft={setLeft} 
                     setMessageNotification={setMessageNotification}
                     setTitle={setTitle}
                     setNotification={setNotification}
                     />
                     
                  </ul>
               </li>


               <li className="border-bottom-e8eaed">
                  <ul className="pb-2 pt-2 flex flex-col gap-1.5">
                  <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 back-search-member rounded">
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M12 2.72a1 1 0 0 1 .901.567l2.37 4.931 5.422.73a1 1 0 0 1 .557 1.714l-3.958 3.777.982 5.383a1 1 0 0 1-1.459 1.06L12 18.283 7.185 20.88a1 1 0 0 1-1.459-1.06l.982-5.382-3.958-3.777a1 1 0 0 1 .557-1.714l5.422-.73 2.37-4.931A1 1 0 0 1 12 2.72zm0 3.31-1.701 3.54a1 1 0 0 1-.768.559l-3.894.523 2.842 2.713a1 1 0 0 1 .293.903l-.705 3.865 3.458-1.865a1 1 0 0 1 .95 0l3.458 1.865-.706-3.865a1 1 0 0 1 .294-.903l2.842-2.713-3.894-.523a1 1 0 0 1-.768-.558L12 6.029z" clip-rule="evenodd"></path>
                           </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Add to Favorites
                           </span>
                        </button>
                     </li>

                     <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 back-search-member rounded">
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z" clip-rule="evenodd"></path>
                           </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Archive
                           </span>
            
                        </button>
                     </li>

                     <li className="min-h-3 pe-2 ps-2">
                        <button
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded button-delete"
                           onClick={(e) => {
                              setMessage(
                                 "Delete Task Successfully"
                              );
                              deleteSpace(
                                 spaceID,
                                 getSpace,
                                 setProgress,
                                 setSave,
                                 setSpaceOptionModel,
                                 setGetSpace
                              );
                           }}
                        >
                           <span className="text-inherit">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M10 4h4v1h-4V4zM8 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a1 1 0 1 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 0 1 0-2h4zm6 2H7v13h10V7h-3zm-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1zm5 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5z" clip-rule="evenodd"></path>
                           </svg>
                           </span>
                           <span className="option-style text-inherit">
                              Delete
                           </span>
                        </button>
                     </li>
                     
                  </ul>
               </li>

               <li className="pe-2 ps-2 pt-2">
                  <button className="w-full h-8 button-background text-white rounded-md flex items-center justify-center text-sm font-medium">
                     View Profile
                  </button>
               </li>
            </ul>
         </div>
      </div>
   </DropDownModel>

   {
      managerModel && <ManagerModel setManagerModel={setManagerModel} setManager={setManager} manager={manager} spaceID={spaceID} top={top} left={left} />
   }
   {
      createNewModel && <CreateNew setCreateNewModel={setCreateNewModel} spaceID={spaceID} top={top} left={left} />
   }
   {
      changeIconModel && <ChangeIconSpace setChangeIconModel={setChangeIconModel} spaceID={spaceID} top={top} left={left} />
   }
   
   {
      notification && <Notification message={messageNotification} title={title}  />
   }


   </>
   );

}

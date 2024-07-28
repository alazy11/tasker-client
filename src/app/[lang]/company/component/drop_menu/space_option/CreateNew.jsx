"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import { useState } from "react";


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



export default function CreateNew({setCreateNewModel,top, left,spaceID}) {

//    const[top, setTop] = useState("");
//    const[left, setLeft] = useState("");
   const[manager,setManager] = useState([]);
   const[managerModel,setManagerModel] = useState(false);
//    const [notification, setNotification] = useState(false);
//    const [messageNotification, setMessageNotification] = useState('');
//    const [title, setTitle] = useState('');

   return (
      <>
      <DropDownModel setShowIcon={setCreateNewModel}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 drop-menu-shadow border-e8eaed rounded-md min-w-40 overflow-y-auto flex flex-col pt-2 pb-2"
            style={{ top:top,left:left,width: "224px",
               background: "var(--cu-background-menu)"
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
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4 18c-1.105 0-2-.894-2-1.999V5.998C2 4.891 2.898 4 4 4h4.609a2 2 0 0 1 1.357.53l1.925 1.778H17a2 2 0 0 1 2 2v1.846a1 1 0 1 1-2 0V8.308h-5.109a2 2 0 0 1-1.357-.53L8.61 6H4v10h7v2H4zm7 0a1 1 0 1 0 0-2v2zm7-5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1z" clipRule="evenodd"></path>
                            </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Project
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

               <li>
                  <ul className="pt-2 flex flex-col gap-1.5">
                  <li className="min-h-3 pe-2 ps-2">
                        <button 
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                           >
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M10.742 3.03a1 1 0 0 1 .728 1.213L10.656 7.5h4.938l.936-3.743a1 1 0 1 1 1.94.486L17.656 7.5H21a1 1 0 1 1 0 2h-3.844l-1.25 5H19a1 1 0 1 1 0 2h-3.594l-.936 3.742a1 1 0 1 1-1.94-.485l.814-3.257H8.406l-.936 3.742a1 1 0 1 1-1.94-.485l.814-3.257H3a1 1 0 1 1 0-2h3.844l1.25-5H5a1 1 0 1 1 0-2h3.594l.936-3.743a1 1 0 0 1 1.213-.727Zm-.586 6.47-1.25 5h4.938l1.25-5h-4.938Z" clipRule="evenodd">
                            </path>
                            </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Post
                           </span>
                        </button>
                     </li>

                     <li className="min-h-3 pe-2 ps-2">
                        <button 
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                           >
                           <span className="nav-menu-item__icon">
                           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24" fill="currentColor">
                           <path fillRule="evenodd" d="M3.17 6A2.83 2.83 0 0 1 6 3.17h12A2.83 2.83 0 0 1 20.83 6v12A2.83 2.83 0 0 1 18 20.83H6A2.83 2.83 0 0 1 3.17 18V6ZM6 4.83A1.17 1.17 0 0 0 4.83 6v12c0 .646.524 1.17 1.17 1.17h12A1.17 1.17 0 0 0 19.17 18V6A1.17 1.17 0 0 0 18 4.83H6Zm10 2.34a.83.83 0 0 1 .83.83v8a.83.83 0 1 1-1.66 0V8a.83.83 0 0 1 .83-.83Zm-4 2.5a.83.83 0 0 1 .83.83V16a.83.83 0 1 1-1.66 0v-5.5a.83.83 0 0 1 .83-.83Zm-4 2.5a.83.83 0 0 1 .83.83v3a.83.83 0 1 1-1.66 0v-3a.83.83 0 0 1 .83-.83Z" clipRule="evenodd"></path>
                           </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Vote
                           </span>
                        </button>
                     </li>
                  </ul>
               </li>

            </ul>
         </div>
      </div>
   </DropDownModel>
   </>
   );

}

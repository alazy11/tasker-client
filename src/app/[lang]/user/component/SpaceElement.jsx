"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import parse  from "html-react-parser";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";


const SpaceOption = dynamic(()=> import('./drop_menu/SpaceOption'));
// const SaveModel = dynamic(()=> import('./drop_menu/SpaceOption'));
import SaveModel from '@/app/[lang]/component/SaveModel';


export default function SpaceElement({page,recordNumber,getSpace,setGetSpace}) {

   const [newSpace, setNewSpace] = useState([]);
   const path = usePathname();
   const [folderLeft, setFolderLeft] = useState('0px');
   const [folderTop, setFolderTop] = useState('0px');
   const [spaceOptionModel, setSpaceOptionModel] = useState(false);
   const [spaceID, setSpaceID] = useState('');
   const [progress, setProgress] = useState(true);
   const [save, setSave] = useState(false);
   const [message, setMessage] = useState('');

   useEffect(()=>{

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space`, {
         credentials: "include",
         headers: {
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
               // console.log("data space faild....", data);
            } else {
               // setErrorMessage(false);
               console.log("data space dd....",[...Object.values(data.data)]);
               setNewSpace([...Object.values(data.data)]);
            }
         })
         .catch((error) => {
            console.log(error);
         });

   },[getSpace]);


   return (
      <>
      {
                  newSpace?.map(item=>{

                     return (
                  <li className={`rounded-md text-sm h-8	ltr:pr-1 rtl:pl-1 relative space-item-li hover:bg-gray-200 ${[`/en/user/space/${item.space_id}`,`/en/user/space/${item.space_id}/members`,`/en/user/space/${item.space_id}/projects`,`/en/user/space/${item.space_id}/chat`].includes(path) ? 'active-space' : ''}`} key={item.space_id}>
                  <div className="flex items-center h-8">
                     <div className="text-gray-600 w-10 ltr:pl-2.5 rtl:pr-2.5">
                        <span className={`flex hide icon-space-color-324075 items-center justify-center w-5 h-5 rounded icon-space-size ${item.color}`}>
                           {
                              item.icon_path ? <Image src={item.icon_path} alt="space logo"
                              className="h-3.5 w-3.5 item-s-color"
                              />
                              :
                              item.icon ? parse(item.icon)
                              : <span>{item.icon_text}</span>
                           }
                        </span>

                        <button className="text-base pt-0.5 hidden w-6 h-6 show hover:bg-gray-300 rounded items-center justify-center bg-transparent font-medium button-space item-s-color" data-space={item.space_id}>
                           <svg
                              className="w-3.5	h-3.5 block text-inherit rotate-270 round item-s-color"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="m4.594 8.912 6.553 7.646a1.126 1.126 0 0 0 1.708 0l6.552-7.646c.625-.73.107-1.857-.854-1.857H5.447c-.961 0-1.48 1.127-.853 1.857Z"></path>
                           </svg>
                        </button>
                     </div>
                     <div className="flex items-center justify-between flex-1 w-3/5 li-item-space">
                        <a
                           href={`/en/user/space/${item.space_id}`}
                           className={`leading-8	flex-1 max-w-32 whitespace-nowrap overflow-hidden text-ellipsis text-2a2e34 item-s-color`}
                        >
                           {item.title}
                        </a>
                        {/* <div className="hidden items-center relative z-10 item">
                           <button className="text-gray-500 rounded icon-padding flex items-center justify-center hover:bg-gray-300 item-s-color" data-space = {item.space_id} onClick={(e)=>{
                              setSpaceID(e.currentTarget.dataset.space);
                              setSpaceOptionModel(true);
                              let left = e.currentTarget.closest('.space-item-li').clientWidth;
                              setFolderLeft(left);
                           }}>
                              <svg
                                 className="block icon-size"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M17 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                                 <path d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                                 <path d="M5 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                              </svg>
                           </button>
                           <button className="text-gray-500 rounded icon-padding flex items-center justify-center hover:bg-gray-300 item-s-color">
                              <svg
                                 className="block icon-size"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M6 12h12"></path>
                                 <path d="M12 18V6"></path>
                              </svg>
                           </button>
                        </div> */}
                     </div>
                  </div>
               </li>
                     );
                  
                  })
               }
               
            {
            // spaceOptionModel &&
            // <SpaceOption 
            // setSpaceOptionModel={setSpaceOptionModel}
            // folderLeft={folderLeft}
            // folderTop={folderTop}
            // spaceID={spaceID}
            // getSpace={getSpace}
            // setGetSpace={setGetSpace}
            // setProgress={setProgress}
            // setSave={setSave}
            // setMessage={setMessage}
            // />
         }
         
         
         {
            save && <SaveModel progress={progress} >
               {message}
            </SaveModel>
         }

      
      </>
   );

}
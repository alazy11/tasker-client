"use client";
import DropDownModel from '@/app/[lang]/component/DropDownModel';
import {useEffect,useState} from 'react';
import parse  from "html-react-parser";
import AddSpace from "@/app/[lang]/company/component/AddSpace";

import SaveModel from '@/app/[lang]/component/SaveModel';


function clear(  setDescription,
setTextIcon,
setIcon,
setTitle,
setSelectColor,
setActiveModel){

   setDescription('');
   setTextIcon('M');
   setIcon(null);
   setTitle('');
   setSelectColor('');
   setActiveModel('1');

}




function spaceHandler({
   space_id,
   company_id,
   title,
   description,
   icon,
   textIcon,
   pathIconSpace,
   selectColor,
   setLoader,
   setGetSpace,
   setModel,
   setActiveModel,
   setTextIcon,
   setIcon,
   setTitle,
   setSelectColor,
   setDescription,
   getSpace,
   setReferesh,
   referesh
}
) {
   setLoader(true);
   const space = {
      spaceID: space_id,
      company_id: company_id,
      title: title,
      description: description,
      icon: icon,
      textIcon: textIcon,
      pathIconSpace: pathIconSpace,
      selectColor: selectColor
   };

   fetch("http://localhost:4040/en/company/space", {
      method: "put",
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body: JSON.stringify(space),
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            setLoader(false);
         } else {
            setLoader(false);
            // setErrorMessage(false);
            setReferesh(!referesh);
            console.log("getSpace....getSpace",getSpace)
            setDescription('');
            setTextIcon('M');
            setIcon(null);
            setTitle('');
            setSelectColor('');
            setActiveModel('1');
            setModel(false);
            console.log("data space....", data);
         }
      })
      .catch((error) => {
         console.log(error);
         setLoader(false);
      });
}


async function getSpace(spaceId,setSpaceInfo,setModel,setEditModel) {
   fetch(`http://localhost:4040/en/company/space/${spaceId}`, {
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
         } else {
            console.log("data space information....", data.data);
            setSpaceInfo(prev=>{
               return {...data.data}
            });
            setModel(false);
            setEditModel(true);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}


async function setSpaceInArchive(spaceId, setProgress, setSave, setModel) {
   setSave(true);
   fetch(`http://localhost:4040/en/company/space/archive/${spaceId}`, {
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
            },2000);
         }
      })
      .catch((error) => {
         console.log(error);
         setSave(false);
      });
}

async function deleteSpace(spaceId, referesh, setProgress, setSave, setModel, setReferesh) {
   setSave(true);
   fetch(`http://localhost:4040/en/company/space/${spaceId}`, {
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




export default function SpaceElement({page, recordNumber, setTotalSpace,pageEnd,pageStart,user}) {

   const [spaces,setSpaces] = useState([]);
   const [spaceID,setSpaceID] = useState('');
   const [model, setModel] = useState(false);
   const [editModel, setEditModel] = useState(false);
   const [spaceInfo,setSpaceInfo] = useState({});
   const [referesh,setReferesh] = useState(false);
   const [progress, setProgress] = useState(true);
   const [save, setSave] = useState(false);
   const [message, setMessage] = useState('');

   useEffect(()=>{

      const abortController = new AbortController();

      fetch(`http://localhost:4040/en/company/space?page=${page}&recordNumber=${recordNumber}`, {
         signal: abortController.signal,
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
               console.log("data space faild....", data);
            } else {
               // setErrorMessage(false);
               console.log("data space running....", data);
               // setSpaces([...Object.values(data.data)]);
               setSpaces([...Object.values(data.data.result)]);
               setTotalSpace(data.data.total);
               console.log("data space dddkcjhjsd....", spaces);
            }
         })
         .catch((error) => {
            console.log(error);
         });

         return () => {
            abortController.abort();
         };
         
   },[page,referesh]);


   return (

      <>
       {
                     spaces?.map((item,index)=>{
                        return(
                           <tr className={`border-bottom-f0f1f3 hover:bg-gray-100 ${(spaceID === item.space_id && model === true) ? 'bg-gray-100':''}`} key={item.space_id}>
                                 <td className="text-center">
                              {pageStart + index}
                           </td>
                           <td className="">
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
                           </td>
                           <td className="">
                              <a href={`/en/company/space/${item.space_id}`} className="block w-full h-full">
                              {item.title}
                              </a>
                           </td>
                           <td className="">
                              <div className='max-w-72 text-ellipsis overflow-hidden whitespace-nowrap h-full w-full' title={item.description} >
                              {item.description}
                              </div>
                           </td>
                           <td className="text-center">
                              <div className="w-full h-full flex items-center justify-center">
                              <button className="border-0 w-6 back-hover h-6 rounded color-700 bg-transparent flex items-center justify-center" data-space={item.space_id} onClick={(e)=>{
                                 let id = e.currentTarget.dataset.space;
                                 setSpaceID(prev=>{ return id});
                                 setModel(true);
                              }} >
                              <svg width="90%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
      </svg>
                              </button>

         {
            model && 
            
            <DropDownModel setShowIcon={setModel} >
                              <div className='h-full m-auto relative' style={{width:'100%', maxWidth:'100%' }}>
      <div className="absolute z-2700 ltr:right-3 rtl:left-3 drop-menu-shadow bg-white rounded-md min-w-40 min-h-80 overflow-y-auto flex flex-col pt-2 pb-2" style={{ width:"224px", top:'36%'}}>
         <ul>
            <li className="border-bottom-e8eaed">
               <ul className="pb-2 flex flex-col gap-1.5">
               <li className="min-h-3 pe-2 ps-2">
               <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded" onClick={async (e)=>{
                  await getSpace(spaceID,setSpaceInfo,setModel,setEditModel);
               }}>
                  <span className="text-656f7d">
                  <svg width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m14 6 4 4m.414-5.586 1.172 1.171a2 2 0 0 1 0 2.829L8 20H4v-4L15.586 4.414a2 2 0 0 1 2.828 0Z"></path>
      </svg>
                  </span>
                  <span className="option-style text-2a2e34">Edit</span>
               </button>
            </li>
            <li className="min-h-3 pe-2 ps-2">
               <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded">
                  <span className="text-656f7d">
                  <svg width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 4v16m-8-8h16"></path>
                     </svg>
                  </span>
                  <span className="option-style text-2a2e34">Create New</span>
               </button>
            </li>
            <li className="min-h-3 pe-2 ps-2">
               <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded">
                  <span className="text-656f7d">
                  <svg width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect width="13" height="13" x="9" y="9" rx="2"></rect>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>

                  </span>
                  <span className="option-style text-2a2e34">Duplicate</span>
               </button>
            </li>
               </ul>
            </li>

            <li className="border-bottom-e8eaed">
               <ul className='pb-2 pt-2 flex flex-col gap-1.5'>
               <li className="min-h-3 pe-2 ps-2">
               <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded" onClick={(e)=>{
                  setMessage('save in Archive');
                  setSpaceInArchive(spaceID,setProgress,setSave,setModel);
               }}>
                  <span className="text-656f7d">
                  <svg width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 3h20v6H2z"></path>
  <path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"></path>
  <path d="M10 13h4"></path>
</svg>
                  </span>
                  <span className="option-style text-2a2e34">Archive</span>
               </button>
            </li>
            <li className="min-h-3 pe-2 ps-2">
               <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded button-delete" onClick={(e)=>{
                  setMessage('Delete Space Successfully');
                  deleteSpace(spaceID,referesh,setProgress,setSave,setModel,setReferesh);
               }}>
                  <span className="text-inherit">
                  <svg width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  <path d="M14 11v6"></path>
  <path d="M10 11v6"></path>
</svg>
                  </span>
                  <span className="option-style text-inherit">Delete</span>
               </button>
            </li>
               </ul>
            </li>

            <li className="pe-2 ps-2 pt-2">
               <button className='w-full h-8 button-background text-white rounded-md flex items-center justify-center text-sm font-medium'>
                  Open Space
               </button>
            </li>

         </ul>

         </div>
         </div>
         </DropDownModel>

         }
         {
            save && <SaveModel progress={progress} >
               {message}
            </SaveModel>
         }
                              {
                                 editModel && <AddSpace user={user} referesh={referesh} setReferesh={setReferesh} spaceInfo={spaceInfo} spaceHandler={spaceHandler} setModel={setEditModel} />
                              }
                              
                              </div> 
                           </td>

                        </tr>
                        );
                     })
                  }
      </>
   );
}
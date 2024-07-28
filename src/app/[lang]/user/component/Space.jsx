"use client";

import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import AddSpace from "./AddSpace";
import SpaceElement from "./SpaceElement";
// import SpaceOption from "./drop_menu/SpaceOption";


function spaceHandler({
   company_id,
   title,
   description,
   icon,
   textIcon,
   pathIconSpace,
   selectColor,
   setLoader,
   getSpace,
   setGetSpace,
   setModel,
   setActiveModel,
   setTextIcon,
   setIcon,
   setTitle,
   setSelectColor,
   memberID
}
) {
   setLoader(true);
   const space = {
      company_id: company_id,
      title: title,
      description: description,
      icon: icon,
      textIcon: textIcon,
      pathIconSpace: pathIconSpace,
      selectColor: selectColor,
      memberID : memberID
   };

   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space`, {
      method: "post",
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

            console.log('error create space',data);

            setLoader(false);
         } else {
            setLoader(false);
            // setErrorMessage(false);
            setGetSpace(!getSpace);
            setTextIcon('M');
            setIcon(null);
            setTitle('');
            setSelectColor('');
            setActiveModel('1');
            setModel(false);
            // console.log("data space....", data);
         }
      })
      .catch((error) => {
         console.log(error);
         setLoader(false);
      });
}



export default function Space({ user }) {

   const [model, setModel] = useState(false);
   const [icon, setIcon] = useState(null);
   const [getSpace, setGetSpace] = useState(false);
   const [page,setPage] = useState(1);
   const [recordNumber,setRecordNumber] = useState(10);
   const inputRef = useRef(null);



   useEffect(() => {
      if (inputRef.current) {
         // console.log("inputRef", inputRef);
         const parser = new DOMParser();
         const parsedDocument = parser.parseFromString(icon, "text/html");
         const fragment = parsedDocument.body.firstElementChild;
         // console.log("body", fragment);
         inputRef.current.innerHTML = "";
         inputRef.current.appendChild(fragment);
      } else {
         // console.log("inputRef errror", inputRef);
      }
   }, [icon]);



   return (
      <div className="relative min-h-12 pt-2 pb-2 space-container">
         <div className="flex items-center justify-between back-nav-side leading-8 pr-3 pl-4 sticky top-0 z-10">
            <h2 className="text-gray-500 flex-1 text-sm leading-8 font-medium">
               Spaces
            </h2>
            <div className="items-center hidden h-6 space-item">
               <button className="text-gray-500 rounded icon-padding flex items-center justify-center hover:bg-gray-200">
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
               <div>
                  <button className="text-gray-500 rounded icon-padding flex items-center justify-center hover:bg-gray-200">
                     <svg
                        className="block icon-size"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"></path>
                     </svg>
                  </button>

                  <dir>
                     <input
                        type="text"
                        placeholder="Search..."
                        autoComplete="off"
                        className="input-search"
                     />
                  </dir>
               </div>
               <button
                  className="text-gray-500 rounded icon-padding flex items-center justify-center hover:bg-gray-200"
                  onClick={(e) => {
                     setModel(true);
                  }}
               >
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
            </div>
         </div>

         <div className="p-2">
            <ul className="flex flex-col gap-0.5">

               {
                  <SpaceElement
                  page={page}
                  recordNumber={recordNumber}
                  getSpace={getSpace}
                  setGetSpace={setGetSpace}
                  />
               }

            </ul>

            <div className="flex flex-col pt-0.5 gap-0.5">
               <a
                  href="/en/company/space"
                  className="flex items-center rounded-md text-sm h-8 leading-8	flex-1 overflow-hidden text-ellipsis text-2a2e34 ltr:pl-2.5 rtl:pr-2.5 relative gap-x-2.5 hover:bg-gray-200"
               >
                  <span className="text-gray-500">
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
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                     </svg>
                  </span>
                  <span>View all spaces</span>
               </a>
               <button className="flex items-center rounded-md text-sm h-8 leading-8	flex-1 overflow-hidden text-ellipsis text-2a2e34 ltr:pl-2.5 rtl:pr-2.5 relative gap-x-2.5 hover:bg-gray-200">
                  <span className="text-gray-600">
                     <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M12 5.25v13.5"></path>
                        <path d="M18.75 12H5.25"></path>
                     </svg>
                  </span>
                  <span>Create new Space</span>
               </button>
            </div>
         </div>


         { model && <AddSpace user={user} spaceInfo={{}} setGetSpace={setGetSpace} spaceHandler={spaceHandler} getSpace={getSpace} setModel={setModel} /> }



      </div>
   );
}

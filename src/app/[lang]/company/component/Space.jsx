"use client";

import { useState, useEffect, useRef,useContext } from "react";
// import Image from "next/image";
import AddSpace from "./AddSpace";
import SpaceElement from "./SpaceElement";
// import SpaceOption from "./drop_menu/SpaceOption";
import CompanyInformation from "./UserContext";

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

   console.log("company_id",company_id)

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



export default function Space({ }) {

   const [model, setModel] = useState(false);
   const [search, setSearch] = useState(false);
   const [icon, setIcon] = useState(null);
   const [getSpace, setGetSpace] = useState(false);
   const [page,setPage] = useState(1);
   const [recordNumber,setRecordNumber] = useState(10);
   const inputRef = useRef(null);

   const user = useContext(CompanyInformation)


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
         console.log("inputRef errror", inputRef);
      }
   }, [icon]);



   return (
      <div className="relative min-h-12 pt-2 pb-2 space-container">
         <div className="flex items-center justify-between back-nav-side leading-8 pr-3 pl-4 sticky top-0 z-10">
            <h2 className=" flex-1 text-sm leading-8 font-medium" style={{color:"var(--cu-content-tertiary)"}}>
               Spaces
            </h2>
            <div className={`items-center sm:flex ${search ? 'flex' : 'hidden'} h-6 space-item`}>
               <button 
                  className=" rounded icon-padding flex items-center h-6 w-6 justify-center icon-parent-space "
                  >
                        <svg viewBox="0 0 24 24" fill="currentColor" width={"1rem"} height={"1rem"} className="block">
                        <path d="M19.2 13.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z"></path>
                        </svg>
               </button>
               <div className={search&&`input-space-search`}>
                  <button 
                  className=" rounded icon-padding flex items-center h-6 w-6 justify-center icon-parent-space "
                  onClick={(e)=>{
                     setSearch(true)
                  }}
                  >

                     <svg viewBox="0 0 24 24" fill="currentColor" width={"1rem"} height={"1rem"} className="block">
                        <path  fillRule="evenodd" d="M15.59 15.924a6.889 6.889 0 1 1 .334-.334 1.002 1.002 0 0 0-.334.334Zm.837 1.918a8.889 8.889 0 1 1 1.414-1.414l3.755 3.754a1 1 0 0 1-1.414 1.414l-3.755-3.754Z" clipRule="evenodd">
                        </path>
                        </svg>

                  </button>

                  <dir>
                     <input
                        type="text"
                        autoFocus={true}
                        onBlur={(e)=>{
                           setSearch(false)
                        }}
                        placeholder="Search..."
                        autoComplete="off"
                        className="input-search"
                     />
                  </dir>
               </div>
               <button
                  className=" rounded icon-padding flex items-center h-6 w-6 justify-center icon-parent-space "
                  onClick={(e) => {
                     setModel(true);
                  }}
               >
                  <svg viewBox="0 0 24 24" width={"1rem"} height={"1rem"} className="block" fill="none">
                     <path  fill="currentColor" fillRule="evenodd" d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v5.995a1 1 0 1 0 2 0V13h5.995a1 1 0 1 0 0-2H13V5Z" clipRule="evenodd"></path>
                  </svg>

               </button>
            </div>
         </div>

         <div className="p-2">
            <ul className="flex flex-col gap-0.5 nav-item">

               {
                  <SpaceElement
                  page={page}
                  recordNumber={recordNumber}
                  getSpace={getSpace}
                  setGetSpace={setGetSpace}
                  />
               }

            </ul>

            <div className="flex flex-col pt-0.5 gap-0.5 nav-item">
               <a
                  href="/en/company/space"
                  className="flex items-center rounded-md text-sm h-8 leading-8	flex-1 overflow-hidden text-ellipsis text-2a2e34 ltr:pl-2.5 rtl:pr-2.5 relative gap-x-2.5 0"
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
               <button className="flex items-center rounded-md text-sm h-8 leading-8	flex-1 overflow-hidden text-ellipsis text-2a2e34 ltr:pl-2.5 rtl:pr-2.5 relative gap-x-2.5 ">
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

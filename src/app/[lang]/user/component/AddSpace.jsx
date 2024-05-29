"use client";


import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import { useState, useEffect, useRef } from "react";
import IconSpace from "./drop_menu/IconSpace";
// import React, { useRef } from 'react';
import profile from "@/public/project-image/user-profile.jpeg";
import Image from "next/image";
import SearchMember from "../component/drop_menu/SearchMember";

// import parse  from "html-react-parser";


function messageHandle(e, setError) {
   let viledity = e.target.validity.valid;
   let validMessage;
   if (!viledity) {
      validMessage = e.target.validationMessage;
      // setError.forEach((setfun,ind)=>{
      //    setfun(validMessage)
      // })
      setError(validMessage);
      e.target.classList.add("error");
   } else {
      setError("");
      e.target.classList.remove("error");
   }
}


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



function uploadImage(image, setPathIcon) {
   let formData = new FormData();
   formData.append("image", image);

   fetch("/api/company/upload", {
      method: "POST",
      body: formData,
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         console.log(data);
         setPathIcon(data.data.path);
      })
      .catch((err) => {
         console.log("upload err", err);
      });
}



export default function AddSpace({ user, setGetSpace,setModel, getSpace,spaceHandler,spaceInfo,setReferesh,referesh}) {


   const [errorMessage, setErrorMessage] = useState("");
   const [showIcon, setShowIcon] = useState(false);
   const [selectColor, setSelectColor] = useState("");
   const [icon, setIcon] = useState(spaceInfo.icon || null);
   const [title, setTitle] = useState(spaceInfo.title || '');
   const [description, setDescription] = useState(spaceInfo.description || '');
   const [textIcon, setTextIcon] = useState(spaceInfo.icon_text || 'M');
   const [pathIcon, setPathIcon] = useState(null);
   const [activeIcon, setActiveIcon] = useState("");
   const [searchMember, setSearchMember] = useState(false);
   const [memberID, setMemberID] = useState([user]);
   const [pathIconSpace, setPathIconSpace] = useState(spaceInfo.icon_path || null);
   const [loader, setLoader] = useState(false);
   const [activeModel, setActiveModel] = useState("1");

   const inputRef = useRef(null);

   useEffect(() => {
      if (inputRef.current) {
         if(icon) {
            const parser = new DOMParser();
            const parsedDocument = parser.parseFromString(icon, "text/html");
            const fragment = parsedDocument.body.firstElementChild;
            inputRef.current.innerHTML = "";
            inputRef.current.appendChild(fragment);
         }
      } else {
         console.log("inputRef errror", inputRef);
      }
   }, [icon]);


   return (

      <ModelOverlay showModel={setModel}>
               <div
                  className={`bg-white w-480px h-auto flex flex-col rounded-xl overflow-hidden relative z-2000  ${
                     activeModel === "1" ? "" : "hidden"
                  }`}
               >
                  <div className="p-6">
                     <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold leading-6 text-2a2e34">
                           Create Space
                        </h2>
                        <button
                           className="p-2 flex items-center justify-center bg-transparent rounded-md hover:bg-gray-100"
                           style={{ width: "26.67px", height: "26.67px" }}
                           onClick={(e) => {
                              setDescription('');
                              setTextIcon('M');
                              setIcon(null);
                              setTitle('');
                              setSelectColor('');
                              setActiveModel('1');
                              setModel(false);
                           }}
                        >
                           <svg
                              width="26.67"
                              height="26.67"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="m5 5 14 14M5 19 19 5"></path>
                           </svg>
                        </button>
                     </div>
                     <p className="text-sm leading-6	font-normal text-656f7d w-95% overflow-hidden text-ellipsis">
                        A Space represents teams, departments, or groups, each
                        with its own Projects, workflows, and settings.
                     </p>

                     <div className="mt-5	">
                        <h3 className="text-sm font-medium text-start leading-5 text-gray-600 after:content-['*'] after:ml-0.5 after:text-red-500">
                           icon & name{" "}
                        </h3>
                        <div className="mt-2 flex items-center gap-3	">
                           <div className="flex relative">
                              <button
                                 className={`w-2.125 border-d6d9de h-2.125 text-base overflow-hidden bg-transparent color-700 outline-none rounded-md	btn-icon-hover ${selectColor}`}
                                 // style={{ backgroundColor: selectColor }}
                                 onClick={(e) => {
                                    setShowIcon(true);
                                 }}
                              >
                                 <div
                                    className={`text-87909e font-medium uppercase relative w-full h-full flex items-center justify-center ${selectColor}`}
                                    ref={inputRef}
                                 >
                                    {
                                       // inputRef.current.innerHTML =
                                       icon ? (
                                          ""
                                       ) : (
                                          <span
                                             className={`font-4.9em`}
                                          >
                                             {textIcon}
                                          </span>
                                       )
                                    }
                                 </div>
                              </button>

                              {showIcon && (
                                 <IconSpace
                                    setPathIcon={setPathIcon}
                                    setTextIcon={setTextIcon}
                                    SetActiveIcon={setActiveIcon}
                                    inputRef={inputRef}
                                    setIcon={setIcon}
                                    setShowIcon={setShowIcon}
                                    setSelectColor={setSelectColor}
                                 />
                              )}
                           </div>
                           <div className="relative flex-1">
                              {console.log('title>>>',title)}
                              <input
                                 type="text"
                                 placeholder="e.g. Marketing, Engineering, HR"
                                 value={title}
                                 required
                                 className="space-input"
                                 autoComplete="off"
                                 onChange={(e) => {
                                    setSelectColor('cu-project-avatar__space-bg-black');
                                    setTitle(e.target.value);
                                    if (!icon) {
                                       setTextIcon(title[0]);
                                    } else {
                                       setTextIcon("");
                                    }
                                 }}
                                 onBlur={(e) => {
                                    messageHandle(e, setErrorMessage);
                                 }}
                              />
                              <div className="error-message ltr:left-0 rtl:right-0">
                                 <span id="userName-error-ms" className="">
                                    {errorMessage}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="mt-8">
                        <div className="mb-2 text-start">
                           <span className="text-sm font-medium leading-5 text-gray-600">
                              Description{" "}
                           </span>
                           <span className="text-xs leading-3 color-600">
                              (optional)
                           </span>
                        </div>
                        <div className="w-full relative">
                        {console.log('description>>>',description)}
                           <input
                              type="text"
                              placeholder=""
                              name="description"
                              className="space-input"
                              autoComplete="off"
                              value={description}
                              onChange={(e) => {
                                 setDescription(e.target.value);
                              }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="p-4 border-top-e9ebf0 flex items-center justify-between bg-gray-50">
                     <span>use kmkvf</span>
                     <button
                        className={`text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white ${
                           title === "" ? "button-color-disable" : ""
                        } `}
                        disabled={title === "" ? true : false}
                        onClick={(e) => {
                           setActiveModel("2");
                        }}
                     >
                        Continue
                     </button>
                  </div>
               </div>

               <div
                  className={`bg-white w-480px h-auto flex flex-col rounded-xl overflow-hidden relative z-2000  ${
                     activeModel === "2" ? "" : "hidden"
                  }`}
               >
                  <div className="p-6">
                     <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold leading-6 text-2a2e34">
                           Add Members to Space
                        </h2>
                        <button
                           className="p-2 flex items-center justify-center bg-transparent rounded-md hover:bg-gray-100"
                           style={{ width: "26.67px", height: "26.67px" }}
                           onClick={(e) => {
                                 setDescription('');
                                 setTextIcon('M');
                                 setIcon(null);
                                 setTitle('');
                                 setSelectColor('');
                                 setActiveModel('1');
                                 setModel(false);
                           }}
                        >
                           <svg
                              width="28"
                              height="28"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="m5 5 14 14M5 19 19 5"></path>
                           </svg>
                        </button>
                     </div>
                     <p className="text-sm leading-6	font-normal text-656f7d w-95% overflow-hidden text-ellipsis">
                        You can Add members right now or later.
                     </p>

                     <div className="mt-5	">
                        <div className="flex items-center w-full justify-between">
                           <h3 className="text-sm font-medium leading-5 text-gray-600">
                              Members
                           </h3>

                           <div className="cu-user-group__item">
                              <button
                                 className="bg-transparent border-none w-8 h-8 flex items-center justify-center"
                                 onClick={(e) => {
                                    setSearchMember(true);
                                 }}
                              >
                                 <svg
                                    viewBox="0 0 36 36"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlinkHref="http://www.w3.org/1999/xlink"
                                 >
                                    <g fill="none" fill-rule="evenodd">
                                       <circle
                                          cx="18"
                                          cy="18"
                                          r="17.5"
                                          stroke-dasharray="3"
                                          class="cu-stroke"
                                       ></circle>
                                       <path
                                          d="M10.35,25.65 C10.35,20.9555796 13.7836186,17.15 18,17.15 C22.2249783,17.15 25.65,20.9651318 25.65,
            25.65"
                                          stroke-linecap="round"
                                          class="cu-stroke"
                                       ></path>
                                       <circle
                                          cx="18"
                                          cy="12.9"
                                          r="4.3"
                                          class="cu-stroke"
                                       ></circle>
                                       <circle
                                          fill-rule="nonzero"
                                          cx="27.4"
                                          cy="27.4"
                                          r="7.7"
                                          class="cu-fill"
                                       ></circle>
                                       <path
                                          d="M28.2,26.5 L28.2,23.946088 C28.2,23.4873147 27.819442,23.1 27.35,23.1 C26.8772851,23.1 26.5,
            23.4788065 26.5,23.946088 L26.5,26.5 L23.946088,26.5 C23.4873147,26.5 23.1,26.880558 23.1,27.35 C23.1,
            27.8227149 23.4788065,28.2 23.946088,28.2 L26.5,28.2 L26.5,30.753912 C26.5,31.2126853 26.880558,31.6 27.35,
            31.6 C27.8227149,31.6 28.2,31.2211935 28.2,30.753912 L28.2,28.2 L30.753912,28.2 C31.2126853,28.2 31.6,
            27.819442 31.6,27.35 C31.6,26.8772851 31.2211935,26.5 30.753912,26.5 L28.2,26.5 Z"
                                          fill="#FFF"
                                          fill-rule="nonzero"
                                       ></path>
                                    </g>
                                 </svg>
                              </button>

                              {searchMember && (
                                 <SearchMember
                                    setMemberID={setMemberID}
                                    setSearchMember={setSearchMember}
                                 />
                              )}
                           </div>
                        </div>

                        <div className="border-d6d9de overflow-auto h-52 w-full p-2 mt-2 rounded-lg scroll-bar">
                           <ul className="flex items-center flex-wrap gap-1">
                              {memberID.map((member) => {
                                 return (
                                    <li>
                                       <div className="border-d6d9de flex items-center gap-2.5 w-fit p-1.5 pe-2.5 ps-1.5 rounded-3xl">
                                          <div className="w-8 h-8 rounded-full overflow-hidden">
                                             <Image
                                                src={
                                                   member?.profile_path ??
                                                   profile
                                                }
                                                alt="profile image"
                                                className="w-8"
                                             />
                                          </div>

                                          <div className="text-sm font-semibold text-gray-600">
                                             <span>{member.public_name}</span>
                                          </div>
                                       </div>
                                    </li>
                                 );
                              })}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="p-4 border-top-e9ebf0 flex items-center justify-between bg-gray-50">
                     <button
                        className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-d6d9de hover:bg-zinc-100 bg-white color-700"
                        onClick={(e) => {
                           setActiveModel("1");
                        }}
                     >
                        Back
                     </button>
                     {loader ? (
                        <button className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white">
                           <svg
                              class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                           >
                              <circle
                                 class="opacity-25"
                                 cx="12"
                                 cy="12"
                                 r="10"
                                 stroke="currentColor"
                                 stroke-width="4"
                              ></circle>
                              <path
                                 class="opacity-75"
                                 fill="currentColor"
                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                           </svg>
                           Processing...
                        </button>
                     ) : (
                        <button
                           className="text-sm font-medium h-8 pl-3 pr-3 rounded-md flex items-center justify-center border-transparent button-background text-white"
                           onClick={(e) => {
                              if (pathIcon) {
                                 uploadImage(pathIcon, setPathIconSpace);
                                 if (pathIconSpace) {

                                    spaceHandler(
                                       spaceInfo.space_id,
                                       user.company_id,
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
                                    );
                                 }
                              } else {
                                 spaceHandler(
                                    spaceInfo.space_id,
                                    user.company_id,
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
                                 );
                              }
                           }}
                        >
                           Continue
                        </button>
                     )}
                  </div>
               </div>
            </ModelOverlay>

   );


}



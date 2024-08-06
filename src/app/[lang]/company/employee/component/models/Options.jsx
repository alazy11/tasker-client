"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import SpaceModel from "./SpacesModel";
import { useState } from "react";

async function getSpace(employeeID, setEmployeeInfo, setModel, setEditModel) {
   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${employeeID}`, {
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
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
            setEmployeeInfo((prev) => {
               return { ...data.data };
            });
            setModel(false);
            setEditModel(true);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}

function addUserToSpace(spaceID,employeeID,setSpaceModel) {

   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/user`, {
      method:'POST',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body:JSON.stringify({
            memberID:employeeID,
            spaceID
      })
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            console.log("data space fails....", data);
         } else {
            console.log("data space information....", data.data);
            setSpaceModel(false);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}


async function deleteEmployee(
   employeeID,
   referesh,
   setProgress,
   setSave,
   setModel,
   setReferesh
) {
   setSave(true);
   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/employee?employeeId=${employeeID}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
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
            setTimeout(() => {
               setSave(false);
               setProgress(true);
               setReferesh(!referesh);
            }, 2000);
         }
      })
      .catch((error) => {
         console.log(error);
         setSave(false);
      });
}

export default function EmployeeOptions({employeeID,setOptions,setMessage,referesh,setReferesh,setProgress,setSave}) {

   const [spaceModel, setSpaceModel] = useState(false);
   const [spaceID, setSpaceID] = useState([]);
   const [top, setTop] = useState(0);
   const [left, setLeft] = useState(0);
   const [active, setActive] = useState("");

    return (
      <>
      <DropDownModel setShowIcon={setOptions}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 drop-menu-shadow bg-white rounded-md min-w-40 overflow-y-auto flex flex-col pt-2 pb-2"
            style={{ width: "224px", top: "36%" }}
         >
            <ul>
               <li className="border-bottom-e8eaed">
                  <ul className="pb-2 flex flex-col gap-1.5">
                     <li className="min-h-3 pe-2 ps-2">
                        <button
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded"
                           onClick={async (e) => {
                              await getSpace(
                                 employeeID,
                                 setEmployeeInfo,
                                 setModel,
                                 setEditModel
                              );
                           }}
                        >
                           <span className="text-656f7d">
                              <svg
                                 width="1rem"
                                 height="1rem"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="m14 6 4 4m.414-5.586 1.172 1.171a2 2 0 0 1 0 2.829L8 20H4v-4L15.586 4.414a2 2 0 0 1 2.828 0Z"></path>
                              </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Rejob
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button className={`p-2 flex items-center w-full gap-3 back-search-member ${active === "Add To Space" && spaceModel ? 'nav-menu-item-active' : ''} rounded`} onClick={(e)=>{
                                       let rect = e.currentTarget.getBoundingClientRect();
                                       let x = rect.left - 300;
                                       setLeft((rect.left > 300 ? x : 10) + 'px');
                                       setActive("Add To Space")
                           setSpaceModel(true);

                        }} >
                           <span className="text-656f7d">
                              <svg
                                 width="1rem"
                                 height="1rem"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M12 4v16m-8-8h16"></path>
                              </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Add To Space
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 back-search-member rounded">
                           <span className="text-656f7d">
                              <svg viewBox="0 0 24 24" width="1rem"
                                 height="1rem" fill="currentColor">
                                 <path fillRule="evenodd" d="M11.594 4.126a.983.983 0 0 1 .812 0l6.239 2.826L12 9.906 5.355 6.952l6.239-2.826ZM4 8.54v7.232c0 .403.233.768.594.932L11 19.605V11.65L4 8.539Zm9 11.066 6.406-2.902A1.02 1.02 0 0 0 20 15.77V8.54l-7 3.11v7.956Zm.218-17.341a2.948 2.948 0 0 0-2.436 0l-7 3.17A3.06 3.06 0 0 0 2 8.23v7.542a3.06 3.06 0 0 0 1.782 2.794l7 3.171a2.949 2.949 0 0 0 2.436 0l7-3.17A3.06 3.06 0 0 0 22 15.77V8.23a3.06 3.06 0 0 0-1.782-2.795l-7-3.17Z" clipRule="evenodd"></path>
                              </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Add space manager
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 back-search-member rounded">
                           <span className="text-656f7d">
                              <svg width="1rem"
                                 height="1rem" viewBox="0 0 24 24" fill="currentColor">
                                 <path fillRule="evenodd" d="M3.83 17c0 .646.524 1.17 1.17 1.17h14A1.17 1.17 0 0 0 20.17 17v-7A1.17 1.17 0 0 0 19 8.83H3.83V17Zm0-9.83h10.166L13 6.173a1.17 1.17 0 0 0-.828-.343H5A1.17 1.17 0 0 0 3.83 7v.17Zm12.514 0L14.173 5a2.83 2.83 0 0 0-2.002-.829H5A2.83 2.83 0 0 0 2.17 7v10A2.83 2.83 0 0 0 5 19.83h14A2.83 2.83 0 0 0 21.83 17v-7A2.83 2.83 0 0 0 19 7.17h-2.656Z" clipRule="evenodd"></path>
                              </svg>
                           </span>
                           <span className="option-style text-2a2e34">
                              Add project manager
                           </span>
                        </button>
                     </li>

                     <li className="min-h-3 pe-2 ps-2">
                        <button
                           className="p-2 flex items-center w-full gap-3 back-search-member rounded button-delete"
                           onClick={(e) => {
                              setMessage(
                                 "Fired Employee Successfully"
                              );
                              deleteEmployee(
                                 employeeID,
                                 referesh,
                                 setProgress,
                                 setSave,
                                 setOptions,
                                 setReferesh
                              );
                           }}
                        >
                           <span className="text-inherit">
                              <svg
                                 width="1rem"
                                 height="1rem"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                 <path d="M14 11v6"></path>
                                 <path d="M10 11v6"></path>
                              </svg>
                           </span>
                           <span className="option-style text-inherit">
                              Fired
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

   {spaceModel && (
   <SpaceModel
      setSpaceModel={setSpaceModel}
      setSpaceID={setSpaceID}
      spaceID={spaceID}
      left={left}
      employeeID={employeeID}
      addUserToSpace={addUserToSpace}
   />
)}

      </>
    );

}


// TasksElement

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "@/public/project-image/user-profile.jpeg";
import TableSkeleton from "@/app/[lang]/component/TableSkeleton";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import SaveModel from "@/app/[lang]/component/SaveModel";
// import EditEmployeeJob from "./models/EditEmployeeJob";


async function getSpace(projectID, setEmployeeInfo, setModel, setEditModel) {
   fetch(`http://localhost:4040/en/company/space/${projectID}`, {
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

async function setEmployeeInArchive(
   projectID,
   setProgress,
   setSave,
   setModel
) {
   setSave(true);
   fetch(`http://localhost:4040/en/company/space/archive/${projectID}`, {
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
            }, 2000);
         }
      })
      .catch((error) => {
         console.log(error);
         setSave(false);
      });
}

async function deleteProject(
   projectID,
   referesh,
   setProgress,
   setSave,
   setModel,
   setReferesh,
   spaceID
) {
   setSave(true);
   fetch(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}`, {
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

export default function TasksElement({
   page,
   recordNumber,
   setTotalSpace,
   pageStart,
   user,
   spaceID,
   projectElement,
   setProjectElement,
   referesh,
   setReferesh
}) {
   // const [employee, setProjectElement] = useState([]);
   const [projectID, setProjectID] = useState("");
   const [model, setModel] = useState(false);
   const [editModel, setEditModel] = useState(false);
   const [spaceInfo, setEmployeeInfo] = useState({});
   const [progress, setProgress] = useState(true);
   const [save, setSave] = useState(false);
   const [message, setMessage] = useState("");
   const [skeleton, setSkeleton] = useState(true)

   useEffect(() => {
      setSkeleton(true);
      fetch(
         `http://localhost:4040/en/company/space/${spaceID}/project?spaceID=${spaceID}&page=${page}&recordNumber=${recordNumber}`,
         {
            credentials: "include",
            headers: {
               "cache-control": "no-cache",
            },
         }
      )
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("data space faild....", data);
               setSkeleton(false);
            } else {
               // setErrorMessage(false);
               console.log("data space dd....", data);
               // setProjectElement([...Object.values(data.data)]);
               setProjectElement([...Object.values(data.data.result)]);
               setTotalSpace(data.data.total);
               setSkeleton(false);
            }
         })
         .catch((error) => {
            console.log(error);
            setSkeleton(false);
         });
   }, [page, referesh]);

   return (
      <>

      {
      skeleton ? <TableSkeleton length={6} /> : projectElement.length > 0 ? 
         projectElement?.map((item, index) => {
            return (

               <tr
               className={`border-bottom-f0f1f3 hover:bg-gray-50`}
               key={item.project_id}
            >
               <td className="text-center">{pageStart + index}</td>
               <td className="">
                  <a
                     href={`/en/company/space/${spaceID}/projects/${item.project_id}`}
                     className="flex font-medium items-center gap-2 max-w-72 text-ellipsis overflow-hidden whitespace-nowrap h-full w-full"
                  >
                     <div className="flex items-center justify-center w-4 h-4 rounded-full relative todo-state">
                     <svg width={'100%'} height={'100%'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
 <path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5ZM12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z" />
</svg>
                     </div>
                     <span className="text-2a2e34 link-hover">
                     {item.title}
                     </span>
                  </a>
               </td>
               <td className="">
                  <div className="w-full h-full flex items-center gap-1">
                  <span
                     className={`flex hide items-center justify-center w-5 h-5 rounded-full overflow-hidden`}
                  >
                      {item.profile_path ? (
                           <Image
                              src={item.profile_path}
                              alt="manager logo"
                              className="w-full"
                           />
                        ) : (
                           <Image
                              src={profile}
                              alt="manager logo"
                              className="w-full"
                           />
                        )}
                  </span>
                  <span className="text-xs flex-1">
                     <span className="block w-full max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.public_name}
                     </span>
                  </span>
                  </div>
               </td>
               <td className="">
                  <div
                     className=" h-full w-full"
                     // title={item.email}
                  >
                     <span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
                        {item.start_date.replaceAll('-','/')+'-'+item.end_date.replaceAll('-','/')}
                     </span>
                  </div>
               </td>
               <td className="">
                  <div
                     className="max-w-72 text-ellipsis overflow-hidden whitespace-nowrap h-full w-full"
                     // title={item.email}
                  >
                     <button className="border-0 bg-transparent underline font-medium cursor-pointer link-hover underline-offset-2">
                        View
                     </button>
                  </div>
               </td>
               <td className="">
                  <div className="flex items-center gap-1 h-6 rounded pt-1 ltr:pr-2 rtl:pl-2 pb-1 ltr:pl-1 rtl:pr-1 back-todo-state ">
                     <div className="w-4 h-4 flex items-center justify-center">
                     <svg width={'100%'} height={'100%'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
 <path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5ZM12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z" />
</svg>
                     </div>
                     <span className="whitespace-nowrap overflow-hidden text-ellipsis text-xs font-medium leading-4 uppercase text-inherit">
                        {item.state}
                     </span>
                  </div>
               </td>
               <td className="">
                  <div className="flex items-center h-6 rounded">
                  <div className="text-sm font-normal capitalize leading-5 flex items-center gap-1 w-full border-none rounded-md text-2a2e34">
                                             <span
                                                className={` text-sm color-${item.priority} w-4 h-4 flex items-center justify-center`}
                                             >
                                                <svg
                                                   width={"100%"}
                                                   height={"100%"}
                                                   fill="currentColor"
                                                   stroke="currentColor"
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   strokeWidth={2}
                                                   viewBox="0 0 24 24"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                >
                                                   <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
                                                </svg>
                                             </span>
                                             {item.priority}
                                          </div>
                  </div>
               </td>
               <td className="text-center">
                  <div className="w-full h-full flex items-center justify-center">
                  <button
                           className="border-0 w-6 back-hover h-6 rounded color-700 bg-transparent flex items-center justify-center"
                           data-project={item.project_id}
                           onClick={(e) => {
                              let id = e.currentTarget.dataset.project;
                              setProjectID((prev) => {
                                 return id;
                              });
                              setModel(true);
                           }}
                        >
                           <svg
                              width="90%"
                              height="100%"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                           </svg>
                        </button>

                        {model && (
                           <DropDownModel setShowIcon={setModel}>
                              <div
                                 className="h-full m-auto relative"
                                 style={{ width: "100%", maxWidth: "100%" }}
                              >
                                 <div
                                    className="absolute z-2700 ltr:right-3 rtl:left-3 drop-menu-shadow bg-white rounded-md min-w-40 min-h-80 overflow-y-auto flex flex-col pt-2 pb-2"
                                    style={{ width: "224px", top: "36%" }}
                                 >
                                    <ul>
                                       <li className="border-bottom-e8eaed">
                                          <ul className="pb-2 flex flex-col gap-1.5">
                                             <li className="min-h-3 pe-2 ps-2">
                                                <button
                                                   className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded"
                                                   onClick={async (e) => {
                                                      await getSpace(
                                                         projectID,
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
                                                <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded">
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
                                                <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded">
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
                                                         <rect
                                                            width="13"
                                                            height="13"
                                                            x="9"
                                                            y="9"
                                                            rx="2"
                                                         ></rect>
                                                         <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="option-style text-2a2e34">
                                                      Create new Task
                                                   </span>
                                                </button>
                                             </li>
                                             <li className="min-h-3 pe-2 ps-2">
                                                <button className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded">
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
                                                         <rect
                                                            width="13"
                                                            height="13"
                                                            x="9"
                                                            y="9"
                                                            rx="2"
                                                         ></rect>
                                                         <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="option-style text-2a2e34">
                                                      Add as a manager
                                                   </span>
                                                </button>
                                             </li>
                                          </ul>
                                       </li>

                                       <li className="border-bottom-e8eaed">
                                          <ul className="pb-2 pt-2 flex flex-col gap-1.5">
                                             <li className="min-h-3 pe-2 ps-2">
                                                <button
                                                   className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded"
                                                   onClick={(e) => {
                                                      setMessage(
                                                         "save in Archive"
                                                      );
                                                      setEmployeeInArchive(
                                                         projectID,
                                                         setProgress,
                                                         setSave,
                                                         setModel
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
                                                         <path d="M2 3h20v6H2z"></path>
                                                         <path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"></path>
                                                         <path d="M10 13h4"></path>
                                                      </svg>
                                                   </span>
                                                   <span className="option-style text-2a2e34">
                                                      Archive
                                                   </span>
                                                </button>
                                             </li>
                                             <li className="min-h-3 pe-2 ps-2">
                                                <button
                                                   className="p-2 flex items-center w-full gap-3 hover:bg-gray-100 rounded button-delete"
                                                   onClick={(e) => {
                                                      setMessage(
                                                         "Fired Employee Successfully"
                                                      );
                                                      deleteProject(
                                                         projectID,
                                                         referesh,
                                                         setProgress,
                                                         setSave,
                                                         setModel,
                                                         setReferesh,
                                                         spaceID
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
                        )}
                  </div>
               </td>
            </tr>

            );

         }) : ''
      }

{
            save && <SaveModel progress={progress} >
               {message}
            </SaveModel>
         }

      </>
   );
}

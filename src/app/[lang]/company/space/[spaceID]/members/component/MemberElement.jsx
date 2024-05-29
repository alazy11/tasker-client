// EmployeeElement
"use client";
import { useEffect, useState } from "react";
import profile from "@/public/project-image/user-profile.jpeg";
import Image from "next/image";
import TableSkeleton from "@/app/[lang]/component/TableSkeleton";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import SaveModel from "@/app/[lang]/component/SaveModel";
// import EditEmployeeJob from "./models/EditEmployeeJob";


// const DropDownModel = 


async function getSpace(employeeID, setEmployeeInfo, setModel, setEditModel) {
   fetch(`http://localhost:4040/en/company/space/${employeeID}`, {
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
   employeeID,
   setProgress,
   setSave,
   setModel
) {
   setSave(true);
   fetch(`http://localhost:4040/en/company/space/archive/${employeeID}`, {
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

async function deleteMember(
   employeeID,
   referesh,
   setProgress,
   setSave,
   setModel,
   setReferesh,
   spaceID
) {
   setSave(true);
   fetch(`http://localhost:4040/en/company/space/${spaceID}/members?spaceID=${spaceID}&employeeID=${employeeID}`, {
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

export default function MemberElement({
   page,
   recordNumber,
   setTotalSpace,
   pageStart,
   user,
   spaceID,
   employee,
   setEmployees,
   referesh,
   setReferesh
}) {
   // const [employee, setEmployees] = useState([]);
   const [employeeID, setEmployeeID] = useState("");
   const [model, setModel] = useState(false);
   const [editModel, setEditModel] = useState(false);
   const [spaceInfo, setEmployeeInfo] = useState({});
   const [progress, setProgress] = useState(true);
   const [save, setSave] = useState(false);
   const [message, setMessage] = useState("");

   useEffect(() => {
      fetch(
         `http://localhost:4040/en/company/space/${spaceID}/members?page=${page}&recordNumber=${recordNumber}`,
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
            } else {
               // setErrorMessage(false);
               console.log("data space dd....", data);
               // setEmployees([...Object.values(data.data)]);
               setEmployees([...Object.values(data.data.result)]);
               setTotalSpace(data.data.total);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   }, [page, referesh]);

   return (
      <>

      {
         employee.length <= 0 ? <TableSkeleton length={6} /> :

         employee?.map((item, index) => {
            return (
               <tr
                  className={`border-bottom-f0f1f3 hover:bg-gray-100 ${
                     employeeID === item.user_id && model === true
                        ? "bg-gray-100"
                        : ""
                  }`}
                  key={item.user_id}
               >
                  <td className="text-center">{pageStart + index}</td>
                  <td className="">
                     <span
                        className={`flex hide items-center justify-center w-5 h-5 rounded-full overflow-hidden`}
                     >
                        {item.profile_path ? (
                           <Image
                              src={item.profile_path}
                              alt="space logo"
                              className="w-full"
                           />
                        ) : (
                           <Image
                              src={profile}
                              alt="space logo"
                              className="w-full"
                           />
                        )}
                     </span>
                  </td>
                  <td className="">
                     <a
                        href={`/en/company/profile/${item.user_id}`}
                        className="block w-full h-full"
                     >
                        {item.public_name}
                     </a>
                  </td>
                  <td className="">
                     <div
                        className="max-w-72 text-ellipsis overflow-hidden whitespace-nowrap h-full w-full"
                        title={item.email}
                     >
                        {item.email}
                     </div>
                  </td>
                  <td className="">
                     <div className="max-w-72 text-ellipsis overflow-hidden whitespace-nowrap h-full w-full">
                        {item.job_for}
                     </div>
                  </td>
                  <td className="text-center">
                     <div className="w-full h-full flex items-center justify-center">
                        <button
                           className="border-0 w-6 back-hover h-6 rounded color-700 bg-transparent flex items-center justify-center"
                           data-employee={item.employee_id}
                           onClick={(e) => {
                              let id = e.currentTarget.dataset.employee;
                              setEmployeeID((prev) => {
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
                                                         employeeID,
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
                                                      deleteMember(
                                                         employeeID,
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
                        )}
                        {save && (
                           <SaveModel progress={progress}>{message}</SaveModel>
                        )}
                        {editModel && (
                           <EditEmployeeJob setModel={setEditModel} />
                        )}
                     </div>
                  </td>
               </tr>
            );
         })
      }
      </>
   );
}

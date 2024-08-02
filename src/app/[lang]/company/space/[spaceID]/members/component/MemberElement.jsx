// EmployeeElement
"use client";
import { useEffect, useState } from "react";
import profile from "@/public/project-image/user-profile.jpeg";
import Image from "next/image";
import TableSkeleton from "@/app/[lang]/component/skeletons/TableSkeleton";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import SaveModel from "@/app/[lang]/component/SaveModel";
// import EditEmployeeJob from "./models/EditEmployeeJob";
import MemberOptions from "./Options";

// const DropDownModel = 


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
   // const [model, setModel] = useState(false);
   const [editModel, setEditModel] = useState(false);
   const [spaceInfo, setEmployeeInfo] = useState({});
   const [progress, setProgress] = useState(true);
   const [save, setSave] = useState(false);
   const [message, setMessage] = useState("");
   const [options, setOptions] = useState(false);


   useEffect(() => {
      fetch(
         `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/members?page=${page}&recordNumber=${recordNumber}`,
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
                              setOptions(true);
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
      
      
      {
            options && <MemberOptions employeeID={employeeID} setOptions={setOptions} />
         }

      </>
   );
}

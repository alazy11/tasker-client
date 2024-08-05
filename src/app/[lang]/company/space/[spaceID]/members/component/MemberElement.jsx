// EmployeeElement
"use client";
import { useEffect, useState } from "react";
import profile from "@/public/project-image/user-profile.jpeg";
import Image from "next/image";
import TableSkeleton from "@/app/[lang]/component/skeletons/TableSkeleton";
import SaveModel from "@/app/[lang]/component/SaveModel";
// import EditEmployeeJob from "./models/EditEmployeeJob";
import MemberOptions from "./Options";




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
<div role="rowgroup" className="w-full" key={item.user_id}>
<div role="row" aria-rowindex="2" className="w-full flex items-center table-grid-body_row cursor-default" style={{height:'28px'}}>

    <div role="gridcell" aria-colindex="1" className="table-grid-body_row-cell justify-center" style={{width:'5%',justifyContent:'center'}}>
    {pageStart + index}
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'10%'}}>
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
    </div>


     <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'30%'}}>
     <div className="w-full h-full flex items-center gap-1">
<span className="flex-1">
<span className="block w-full max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
{item.public_name}
</span>
</span>
</div>
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'30%'}}>
    <div
className=" h-full w-full"
title={item.email}
>
<span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
{item.email}
</span>
</div>
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'20%'}}>
    <div
className=" h-full w-full"
>
<span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
{item.job_for}
</span>
</div>
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'5%'}}>
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
    <div className="flex items-center justify-center w-4 h-4">
    <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor">
    <path  d="M19.2 13.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z"></path>
   </svg>
    </div>
</button>
</div>
    </div>



</div>
</div>

            );
         })
      }
      
      
      {
            options && <MemberOptions employeeID={employeeID} setOptions={setOptions} />
         }

{save && (
                           <SaveModel progress={progress}>{message}</SaveModel>
                        )}
                        {editModel && (
                           <EditEmployeeJob setModel={setEditModel} />
                        )}

      </>
   );
}

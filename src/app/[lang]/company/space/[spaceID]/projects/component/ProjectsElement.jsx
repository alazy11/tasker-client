// EmployeeElement
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "@/public/project-image/user-profile.jpeg";
import TableSkeleton from "@/app/[lang]/component/skeletons/TableSkeleton";
import SaveModel from "@/app/[lang]/component/SaveModel";
// import EditEmployeeJob from "./models/EditEmployeeJob";
import ProjectOptions from "./model/Options";



function handleDate(date) {
   // let d = new Date(date).toLocaleDateString();
   let d = new Date(date).toDateString();
   return d;
}


export default function ProjectsElement({
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
   // const [model, setModel] = useState(false);
   const [editModel, setEditModel] = useState(false);
   const [spaceInfo, setEmployeeInfo] = useState({});
   const [progress, setProgress] = useState(true);
   const [save, setSave] = useState(false);
   const [message, setMessage] = useState("");
   const [skeleton, setSkeleton] = useState(true);
   const [options, setOptions] = useState(false);

   useEffect(() => {
      setSkeleton(true);
      fetch(
         `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project?spaceID=${spaceID}&page=${page}&recordNumber=${recordNumber}`,
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
      skeleton ? <TableSkeleton length={15} /> : projectElement.length > 0 ? 
         projectElement?.map((item, index) => {
            return (
<div role="rowgroup" className="w-full" key={item.project_id}>
<div role="row" aria-rowindex="2" className="w-full flex items-center table-grid-body_row cursor-default" style={{height:'28px'}}>

    <div role="gridcell" aria-colindex="1" className="table-grid-body_row-cell justify-center" style={{width:'5%',justifyContent:'center'}}>
    {pageStart + index}
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'18%'}}>
    <Link
                     href={`/en/company/space/${spaceID}/projects/${item.project_id}`}
className="flex items-center font-medium gap-2 text-ellipsis overflow-hidden whitespace-nowrap h-full w-full"
>
<div className="flex items-center justify-center table-grid-icon-status rounded-full relative todo-state">
<svg width={'100%'} height={'100%'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
<path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5ZM12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z" />
</svg>
</div>
<span className="text-inherit link-hover leading-4 " style={{marginTop:"-3px"}} >
{item.title}
</span>
</Link>
    </div>


     <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'12%'}}>
     <div className="w-full h-full flex items-center gap-1">
<span className="flex-1">
<span className="block w-full max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
{item.public_name}
</span>
</span>
</div>
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'12%'}}>
    <div
className=" h-full w-full"
title={handleDate(item.start_date)}
>
<span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
{handleDate(item.start_date)}
</span>
</div>
    </div>

    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'12%'}}>
    <div
className=" h-full w-full"
title={handleDate(item.end_date)}
>
<span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
{handleDate(item.end_date)}
</span>
</div>
    </div>


    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'12%'}}>
    <div
className="text-ellipsis overflow-hidden whitespace-nowrap h-full w-full"
// title={item.email}
>
<button className="border-0 bg-transparent underline font-medium cursor-pointer link-hover underline-offset-2">
View
</button>
</div>
    </div>


    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'12%'}}>
    <div className="table-grid-status back-todo-state">
<div className="icon-status flex items-center justify-center">
<svg width={'100%'} height={'100%'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
<path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5ZM12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z" />
</svg>
</div>
<span className="whitespace-nowrap overflow-hidden text-ellipsis font-medium uppercase text-inherit">
{item.state}
</span>
</div>
    </div>


    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'12%'}}>
    <div className="flex items-center h-full w-full rounded">
<div className="font-normal capitalize flex items-center gap-2 w-full border-none rounded-md">
                     <span
                        className={`color-${item.priority} table-grid-icon-priority flex items-center justify-center`}
                     >

                        <svg width={"100%"}
                           height={"100%"} className="block fill-inherit" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-6h13a1 1 0 0 0 .858-1.514L17.166 9l2.692-4.486A1 1 0 0 0 19 3H6Z" clipRule="evenodd"></path>
                        </svg>

                     </span>
                     {item.priority}
                  </div>
</div>
    </div>


    <div role="gridcell" aria-colindex="2" className="table-grid-body_row-cell" style={{width:'5%'}}>
    <div className="w-full h-full flex items-center justify-center">
<button
   className="border-0 w-6 back-hover h-6 rounded color-700 bg-transparent flex items-center justify-center"
   data-project={item.project_id}
   onClick={(e) => {
      let id = e.currentTarget.dataset.project;
      setProjectID((prev) => {
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

         }) : ''
      }

{
            save && <SaveModel progress={progress} >
               {message}
            </SaveModel>
         }

         {
            options && <ProjectOptions projectID={projectID} setOptions={setOptions} />
         }

      </>
   );
}

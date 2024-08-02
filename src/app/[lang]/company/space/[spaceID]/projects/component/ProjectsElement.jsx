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
      skeleton ? <TableSkeleton length={6} /> : projectElement.length > 0 ? 
         projectElement?.map((item, index) => {
            return (

               <tr
               className={`border-bottom-f0f1f3 hover:bg-gray-50`}
               key={item.project_id}
            >
               <td className="text-center">{pageStart + index}</td>
               <td className="">
                  <Link
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
                  </Link>
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
               {/* <td className="">
                  <div
                     className=" h-full w-full"
                     // title={item.email}
                  >
                     <span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
                        {item.start_date.replaceAll('-','/')+'-'+item.end_date.replaceAll('-','/')}
                     </span>
                  </div>
               </td> */}
                <td className="">
                  <div
                     className=" h-full w-full"
                     title={handleDate(item.start_date)}
                  >
                     <span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
                        {handleDate(item.start_date)}
                     </span>
                  </div>
               </td>
               <td className="">
                  <div
                     className=" h-full w-full"
                     title={handleDate(item.end_date)}
                  >
                     <span className="text-ellipsis overflow-hidden whitespace-nowrap inline-block " style={{maxWidth:"90%"}}>
                        {handleDate(item.end_date)}
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

         {
            options && <ProjectOptions projectID={projectID} setOptions={setOptions} />
         }

      </>
   );
}

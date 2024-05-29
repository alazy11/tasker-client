"use client";

// import ProjectsElement from "./ProjectsElement";
import { Suspense } from "react";
import { useState,useTransition } from "react";
// import AddMember from "./AddMember";
// import AddProject from './AddProject';
import TopMiddleNav from './TopMiddleNav';
import profile from "@/public/project-image/user-profile.jpeg";
import Image from "next/image";

// const SuccessNotification = dynamic(() => import("@/app/[lang]/component/SuccessNotification"));

function inputHandler(value, setUser,spaceID) {
   fetch(`http://localhost:4040/en/company/space/${spaceID}/members/search?member=${value}&spaceID=${spaceID}`, {
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
            console.log("employee faaaaaaa.....", data.data);
         } else {
            console.log("employee user.....", [...Object.values(data.data)]);
            setUser([...Object.values(data.data)]);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}





export default function PageProject({ user,spaceID, projectID }) {
   
   const [page, setPage] = useState(1);
   const [recordNumber, setRecordNumber] = useState(10);
   const [totalSpace, setTotalSpace] = useState(0);
   const [pageStart, setPageStart] = useState((page - 1) * recordNumber + 1);
   const [pageEnd, setPageEnd] = useState(page * recordNumber);
   const [projectModel, setProjectModel] = useState(false);
   const [projectElement, setProjectElement] = useState([]);
   const [member, setMember] = useState("");
   const [isPending, startTransition] = useTransition({
      // timeoutMs: 1000,
   });
   const [referesh, setReferesh] = useState(false);


   return (
<>


<TopMiddleNav setEmployee={setProjectModel} projectID={projectID} spaceID={spaceID} >Create Project</TopMiddleNav>

<div className='ps-4 pe-4 h-12 w-full'>
      <div className='flex items-center justify-between pt-2 pb-2'>
      <ul className='flex items-center gap-1 flex-1'>
         <li>
            <button className='flex items-center gap-0.5 pt-1 pb-1 pe-2 ps-2 rounded-xl border-e8eaed text-656f7d text-xs font-medium tag active hover:bg-gray-200'>
               <span className='w-4 h-4'>
                  <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1 0-1.748l9-5ZM5.06 8 12 11.856 18.94 8 12 4.144 5.06 8Z"></path>
<path d="M2.126 11.514a1 1 0 0 1 1.36-.388L12 15.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36Z"></path>
<path d="M2.126 15.514a1 1 0 0 1 1.36-.388L12 19.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36Z"></path>
</svg>
               </span>
All
            </button>
         </li>
         <li>
            <button className='flex items-center gap-0.5 pt-1 pb-1 pe-2 ps-2 rounded-xl border-e8eaed text-656f7d text-xs font-medium tag hover:bg-gray-200'>
               <span className='w-4 h-4'>
                                    <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-1.017 1.742c.011.084.017.17.017.258v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-.087.006-.174.017-.258A2 2 0 0 1 2 7V5Zm18 2V5H4v2h16ZM5 9v10h14V9H5Zm3 3a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Z"></path>
</svg>
               </span>
Archive
            </button>
         </li>
      </ul>

      <div className='flex items-center'>
         <div>
            <button>

            </button>
         </div>
         <div>
         <input type="text" className='text-sm w-52 h-8 rounded-md min-w-0 ps-3 pe-3 border-0 box-shadow-search outline-none' placeholder='Search Space By Name...'
         value={member}
         autoComplete="off"
         onChange={(e) => {
            setMember(e.target.value);
            startTransition(() => {
               inputHandler(e.target.value, setProjectElement,spaceID);
            });
         }}
         />
         </div>
      </div>
      </div>
   </div>

      <div className="relative grow min-h-0 grid grid-container-spaces">
         <div className={`grow overflow-auto mr-0 scroll-bar relative`}>
            <table className="min-w-800 space-table w-full">
               <thead className="sticky top-0">
                  <tr className="h-8 back-nav-side text-656f7d text-xs border-bottom-f0f1f3">
                     <th className="font-medium w-5%">#</th>
                     <th className="font-medium w-40% text-start">TITLE</th>
                     <th className="font-medium w-1/5 text-start">MANAGER</th>
                     <th className="font-medium w-10% text-start">DESCRIPTION</th>
                     <th className="font-medium w-10% text-start">STATE</th>
                     <th className="font-medium w-10% text-start">PRIORITY</th>
                     <th className="font-medium w-5% text-center">ACTION</th>
                  </tr>
               </thead>
               <tbody>
                  <Suspense fallback={<p>Loading feed...</p>}>
                     {/* <ProjectsElement
                        user={user}
                        pageStart={pageStart}
                        pageEnd={pageEnd}
                        page={page}
                        recordNumber={recordNumber}
                        setTotalSpace={setTotalSpace}
                        spaceID={spaceID}
                        projectElement={projectElement}
                        setProjectElement={setProjectElement}
                        referesh={referesh}
                        setReferesh={setReferesh}
                     /> */}

                  </Suspense>
               </tbody>
            </table>
         </div>
         <div className={`flex items-center justify-end pe-12 ps-12`}>
            <div className="flex items-center gap-1">
               <p className="flex items-center gap-1 color-544dc9 font-semibold">
                  <span className="flex items-center ">
                     <span>{page * recordNumber - recordNumber + 1}</span>
                     <span>-</span>
                     <span>
                        {page * recordNumber > totalSpace
                           ? totalSpace
                           : page * recordNumber}
                     </span>
                  </span>

                  <span>of</span>

                  <span>{totalSpace}</span>
               </p>
               <div className="flex items-center gap-1.5">
                  <button
                     className={`w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 bg-gray-200 color-544dc9 ${
                        page == 1 ? "cursor-not-allowed" : "cursor-pointer"
                     }`}
                     disabled={page == 1 ? true : false}
                     onClick={(e) => {
                        setPage((prev) => {
                           setPageStart((prev - 1 - 1) * recordNumber + 1);
                           setPageEnd((prev - 1) * recordNumber);
                           return prev - 1;
                        });
                     }}
                  >
                     <svg
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"></path>
                     </svg>
                  </button>
                  <button
                     className={`w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 bg-gray-200 color-544dc9 ${
                        page * recordNumber > totalSpace
                           ? "cursor-not-allowed"
                           : "cursor-pointer"
                     }`}
                     disabled={page * recordNumber > totalSpace ? true : false}
                     onClick={(e) => {
                        setPage((prev) => {
                           setPageStart((prev + 1 - 1) * recordNumber + 1);
                           setPageEnd((prev + 1) * recordNumber);
                           return prev + 1;
                        });
                     }}
                  >
                     <svg
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0Z"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>

{
   // projectModel && <AddProject setModel={setProjectModel} spaceID={spaceID}  referesh={referesh} setReferesh={setReferesh} />
}
         
         
         {

         }

      </div>
      </>
   );
}

"use client";

import { Suspense,lazy } from "react";
import { useState,useTransition } from "react";
import AddMember from "./AddMember";
import TopMiddleNav from '../../component/TopMiddleNav';
// import MemberElement from "./MemberElement";

const MemberElement = lazy(()=>import('./MemberElement'));

function inputHandler(value, setUser,spaceID) {
   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/members/search?member=${value}&spaceID=${spaceID}`, {
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





export default function PageMember({ user,spaceID }) {
   
   const [page, setPage] = useState(1);
   const [recordNumber, setRecordNumber] = useState(10);
   const [totalSpace, setTotalSpace] = useState(0);
   const [pageStart, setPageStart] = useState((page - 1) * recordNumber + 1);
   const [pageEnd, setPageEnd] = useState(page * recordNumber);
   const [employee, setEmployee] = useState(false);
   const [employeeElement, setEmployeeElement] = useState([]);
   const [member, setMember] = useState("");
   const [isPending, startTransition] = useTransition({
      // timeoutMs: 1000,
   });
   const [referesh, setReferesh] = useState(false);

   return (
<>

      
<TopMiddleNav setEmployee={setEmployee} spaceID={spaceID} >
   <span className="vs:hidden">
   Add Member
   </span>
   </TopMiddleNav>

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
               inputHandler(e.target.value, setEmployeeElement,spaceID);
            });
         }}
         />
         </div>
      </div>
      </div>
   </div>

      <div className="relative grow min-h-0 grid grid-container-spaces">
         <div className={`grow overflow-auto mr-0 scroll-bar relative ${employee ? 'animation-margin-assign' : ''}`}>
            <div className="flex flex-col relative h-full table-grid-container" role="grid">
                        {/* table header */}
                     <div role="presentation" className="h-7 min-h-7 flex w-full whitespace-nowrap relative overflow-hidden border-b border-solid table-grid-container_header">
                        <div role="presentation" className="relative h-full flex-1 overflow-hidden">
                            <div role="row" aria-rowindex="1" className="h-full w-full flex">

                                <div role="columnheader" col-id="name" aria-colindex="2" tabIndex={"-1"} className="inline-flex items-center h-full justify-center overflow-hidden cursor-default table-grid-header-cell" style={{width:'5%'}}>
                                    <div className="table-grid-header-cell_text justify-center">
                                        <div className="table-grid-header-cell_text-title text-center">
                                            #
                                        </div>

                                    </div>
                                </div>


                                <div role="columnheader" col-id="profile" aria-colindex="3" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'10%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg  viewBox="0 0 448 512">
                                          <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            profile
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="name" aria-colindex="2" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'30%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.685.245A1 1 0 0 0 7.376.242L2.408 4.524a1 1 0 0 0-.105 1.41l1.139 1.321a1 1 0 0 0 1.41.105L8.02 4.629l3.135 2.724a1 1 0 0 0 1.41-.099l1.144-1.316a1 1 0 0 0-.098-1.41L8.685.245zM3.06 5.282 8.03 1l4.926 4.282-1.144 1.316L8.35 3.59a.5.5 0 0 0-.654-.001L4.199 6.602 3.06 5.282zm1.91 4.331a1.022 1.022 0 0 0-1.395-.156l-1.384 1.06a.984.984 0 0 0-.164 1.412c1.659 1.983 3.683 3.07 6.003 3.07 2.327 0 4.336-1.093 5.95-3.091a.983.983 0 0 0-.188-1.41l-1.404-1.034a1.023 1.023 0 0 0-1.391.18c-.948 1.14-1.915 1.611-2.967 1.611-1.064 0-2.064-.482-3.06-1.642zm-.787.637h.004a.036.036 0 0 1 .024.014c1.134 1.321 2.392 1.991 3.819 1.991 1.417 0 2.647-.662 3.736-1.972a.04.04 0 0 1 .024-.014h.005l1.394 1.027C11.73 13.094 9.994 14 8.03 14c-1.96 0-3.716-.902-5.221-2.695l1.375-1.054z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            Name
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Date" aria-colindex="5" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'30%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 18 14">
                                          <path fillRule="evenodd" d="M4 2h10c.628 0 1.174.347 1.459.86a.83.83 0 0 0-.292.14L9 7.625 2.833 3a.83.83 0 0 0-.292-.14C2.826 2.347 3.372 2 4 2zM2.333 4.708v5.625C2.333 11.253 3.08 12 4 12h10c.92 0 1.667-.746 1.667-1.667V4.708L9.5 9.333a.833.833 0 0 1-1 0L2.333 4.708zM.667 3.667A3.333 3.333 0 0 1 4 .333h10a3.333 3.333 0 0 1 3.333 3.334v6.666A3.333 3.333 0 0 1 14 13.667H4a3.333 3.333 0 0 1-3.333-3.334V3.667z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            Email
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Date" aria-colindex="5" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'20%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg id="svg-sprite-field-attachment" viewBox="0 0 14 18">
                                          <path fillRule="evenodd" d="M8.875 2.333A3.125 3.125 0 0 0 5.75 5.458v5.209a1.25 1.25 0 0 0 2.5 0v-5a.833.833 0 1 1 1.667 0v5a2.917 2.917 0 0 1-5.834 0V5.458a4.792 4.792 0 0 1 9.584 0v5.209a6.667 6.667 0 0 1-13.334 0v-5a.833.833 0 1 1 1.667 0v5a5 5 0 0 0 10 0V5.458c0-1.726-1.4-3.125-3.125-3.125z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            job
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Action" aria-colindex="7" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden justify-center cursor-default table-grid-header-cell" style={{width:'5%'}}>
                                    <div className="table-grid-header-cell_text justify-center">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-4.889a1 1 0 0 1 1 1V11h3.111a1 1 0 1 1 0 2H13v3.111a1 1 0 1 1-2 0V13H8.111a1 1 0 1 1 0-2H11V8.111a1 1 0 0 1 1-1z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div role="presentation" className="table-grid-body">
                    <MemberElement
                        user={user}
                        pageStart={pageStart}
                        pageEnd={pageEnd}
                        page={page}
                        recordNumber={recordNumber}
                        setTotalSpace={setTotalSpace}
                        spaceID={spaceID}
                        employee={employeeElement}
                        setEmployees={setEmployeeElement}
                        referesh={referesh}
                        setReferesh={setReferesh}
                     />
                    </div>
</div>
         </div>
         <div className={`flex items-center justify-end pe-12 ps-12 ${employee ? 'mr-60' : ''}`}>
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
            employee && 
            <Suspense fallback={<p>Loading feed...</p>}>
            <AddMember company={user} spaceID={spaceID} setEmployee={setEmployee}  referesh={referesh}  setReferesh={setReferesh} />
            </Suspense>

         }
         
      </div>
      </>
   );
}

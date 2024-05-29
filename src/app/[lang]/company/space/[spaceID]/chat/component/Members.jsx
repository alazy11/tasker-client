"use client";
import { useState } from "react";


export default function Members() {

   const [scroll, setScroll] = useState(0);


   return (
      <aside
      className={`w-64 h-full border-r border-solid border-r-gray-200 pt-2 pb-2 flex flex-col`}
      >
              <div>
            <div className="ml-4 mr-4 mb-3">
               <span className="text-sm text-2a2e34 border border-solid gap-2 outline-none input-search-shadow border-gray-200 rounded-md flex items-stretch min-h-8 overflow-hidden ps-3 pe-3 ">
                  <span
                     style={{ color: "#636c76" }}
                     className="self-center shrink-0"
                  >
                     <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                        <path d="m21 21-4.35-4.35"></path>
                     </svg>
                  </span>
                  <input
                     type="text"
                     placeholder="Go to file"
                     className="border-0 outline-0 w-full"
                  />
                  <span
                     className="self-center shrink-0"
                     style={{ color: "#636c76" }}
                  >
                     <div className="ltr:-mr-1.5 rtl:-ml-1.5">
                        <kbd>t</kbd>
                     </div>
                  </span>
               </span>
            </div>
         </div>


         <div className="flex-1" style={{ maxHeight: "395px" }}>
            {scroll > 0 && <div className="duPwcy"></div>}
            <div
               className="max-h-full overflow-auto scroll-bar"
               onScroll={(e) => {
                  setScroll(e.target.scrollTop);
               }}
            >
               <ul className="ps-4 pe-4 pb-2">

               <li
                           className={`flex items-center relative p-5px cursor-pointer h-38px w-full w-search employee-item `}
                           // data-user={item.user_name}
                           // data-userid={item.employee_id}
                           onClick={(e)=>{

                           }}
                        >
                           <div className="w-7 h-7 ltr:mr-2.5 rtl:ml-2.5">
                              <div
                                 className="flex items-center justify-center w-full h-full icon rounded-full overflow-hidden"
                                 style={{ fill: "#b9bec7" }}
                              >
                                 {/* {item.profile_path ? (
                                    <Image
                                       src={item.profile_path}
                                       alt="profile"
                                       className="w-full object-cover"
                                    />
                                 ) : ( */}
                                    <svg
                                       fill="currentColor"
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M20.062 18.697A10.492 10.492 0 1 0 1.5 12c0 2.45.864 4.82 2.438 6.697l-.015.013c.053.063.113.117.167.18.067.077.14.15.21.225.21.227.426.446.652.652.07.063.14.121.21.181.24.207.487.403.743.587.033.023.062.052.096.075v-.01a10.426 10.426 0 0 0 12 0v.01c.033-.024.062-.052.095-.076.256-.183.503-.379.743-.586.07-.06.141-.119.21-.18.227-.207.442-.426.652-.653.07-.076.142-.148.21-.226.054-.062.114-.116.167-.18l-.016-.012ZM12 6a3.375 3.375 0 1 1 0 6.75A3.375 3.375 0 0 1 12 6ZM6.005 18.697A3.746 3.746 0 0 1 9.75 15h4.5a3.747 3.747 0 0 1 3.745 3.697 8.955 8.955 0 0 1-11.99 0Z" />
                                    </svg>
                                 {/* )} */}
                              </div>
                           </div>
                           <div className="flex-1">
                              <div className="max-w-full whitespace-nowrap text-ellipsis overflow-hidden font-normal leading-4 font-13px employee-name">
                                 {/* {item.public_name} */}
                                 alazy alhimeari
                              </div>
                              <div className="font-10px font-normal text-b9bec7">
                                 {/* {item.job_for} */}
                                 software 
                              </div>
                           </div>
                           <div className="icon w-5 h-5 flex items-center justify-center ltr:mr-1 rtl:ml-1 ltr:ml-2 rtl:mr-2 opacity-30 fill-7f77f1 employee-check flex-shrink-0 rounded-full ">
                              <svg
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm-1.781 14.643L6.44 12.694l1.115-1.003 2.625 2.916 6.225-7.414 1.15.963-7.337 8.737Z" />
                              </svg>
                           </div>
                        </li>

               </ul>
            </div>
         </div>

      </aside>
   );

}
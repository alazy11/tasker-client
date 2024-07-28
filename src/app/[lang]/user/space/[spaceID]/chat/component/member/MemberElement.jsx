"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MemberElement({member,setLeft, setTop, setOption,option,setEmployee}) {

    const [active, setActive] = useState(false);

    useEffect(()=>{

        if(!option)
            setActive(false);

    },[option])


    return (
        <li
                           className={` ${active && "employee-active"} flex items-center relative p-5px cursor-pointer h-38px w-full employee-item `}
                        >
                           <div className="w-7 h-7 ltr:mr-2.5 rtl:ml-2.5 relative">

                           {member.profile_path ? (

<div>
                                    <div className="w-7 h-7 relative flex items-center justify-center rounded-full">
                                    <Image
                                       src={member.profile_path}
                                       alt="profile"
                                       className="w-full object-cover"
                                    />
                                    </div>
                                </div>
                                    
                                 ) : (
                                    <div>
                                    <div className="w-7 h-7 relative flex items-center justify-center text-xs font-normal rounded-full color-avatar uppercase " style={{backgroundColor:'rgb(123, 104, 238)'}} >
                                        {member.public_name[0]}
                                    </div>
                                </div>
                                 )}

                           </div>
                           <div className="flex-1">
                              <div className="max-w-full whitespace-nowrap text-ellipsis overflow-hidden font-normal leading-4 font-13px employee-name">
                                 {member.public_name}
                                 {/* alazy alhimeari */}
                              </div>
                              <div className="font-10px font-normal text-b9bec7">
                                 {member.job_for}
                                 {/* software  */}
                              </div>
                           </div>

                           <div className="ltr:mr-1 rtl:ml-1 ltr:ml-2 rtl:mr-2">
                           <button className="flex flex-nowrap shrink-0 items-center justify-center border-transparent text-base leading-5 font-medium h-6
                           w-6 rounded cursor-pointer member-list-btn relative
                           "
                           data-user = {member.employee_id}
                           data-userid = {member.user_id}
                           data-username = {member.public_name}
                           onClick={(e)=>{
                              const rect = e.currentTarget.getBoundingClientRect();
                              const left = rect.left + rect.width;
                              const top = rect.top;
                              setLeft(left);
                              setTop(top);
                              setOption(true);
                              setEmployee({
                                employee_id:e.currentTarget.dataset.user,
                                user_id:e.currentTarget.dataset.userid,
                                public_name:e.currentTarget.dataset.username
                            });
                              setActive(true);
                           }}

                           >
                           <div className="flex items-center justify-center w-4 h-4 color-700">
                                 <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  d="M19.2 13.6a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm-7.2 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" style={{color: "inherit"}}></path></svg>
                                 </div>
                              </button>
                           </div>

               </li>
    );
}
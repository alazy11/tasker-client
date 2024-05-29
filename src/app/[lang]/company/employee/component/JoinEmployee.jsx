"use client";
import Image from "next/image";
import Profile from "@/public/project-image/user-profile.jpeg";
import { useState, useTransition } from "react";
import UserInformation from "./UserInformation";
import SuccessNotification from "@/app/[lang]/component/SuccessNotification";


function inputHandler(value, setUser) {
   fetch(`http://localhost:4040/en/company/search?user=${value}`, {
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

export default function JoinEmployee({ setEmployee,company }) {
   const [member, setMember] = useState("");
   const [isPending, startTransition] = useTransition({
      // timeoutMs: 1000,
   });

   const [user, setUser] = useState([]);
   const [model, setModel] = useState(false)
   const [notification,setNotification] = useState(false);
   const [message,setMessage] = useState('');
   const [active, setActive] = useState('');


   return (
      <div className="absolute -right-full top-0 h-full animation-assign bg-white z-50 w-60 border-top-e8eaed border-left-e8eaed">
         <div className="flex flex-col h-full">
            <div className="pt-4 pe-2.5 ps-2.5">
               <div className="font-15px font-medium text-292d34 flex items-center justify-between">
                  Assignees
                  <div
                     className="flex items-center justify-center ltr:rotate-0 rtl:rotate-180 h-26px w-26px  p-1 ml-1 cursor-pointer rounded color-7f77f1 backgroung-hover-f2f2f2"
                     onClick={(e) => {
                        setEmployee(false);
                     }}
                  >
                     <svg
                        width={"100%"}
                        height={"100%"}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="m13 5 7 7-7 7" />
                        <path d="m5 5 7 7-7 7" />
                     </svg>
                  </div>
               </div>
               <div className="w-full relative h-8 mt-4 mb-2">
                  <div
                     className="absolute ltr:left-3 rtl:right-3 top-2 h-4 w-4"
                     style={{ color: "#b9bec7" }}
                  >
                     <svg
                        width={"100%"}
                        height={"100%"}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="m21 21-6-6m2-5a7.001 7.001 0 0 1-11.95 4.95A7 7 0 1 1 17 10Z" />
                     </svg>
                  </div>
                  <input
                     type="text"
                     placeholder="Search name"
                     value={member}
                     autoComplete="off"
                     className="text-sm font-normal w-full ps-9 pe-5 h-8 border-none rounded text-292d34 background-f6f7f9 outline-none shadow-input"
                     onChange={(e) => {
                        setMember(e.target.value);

                        startTransition(() => {
                           inputHandler(e.target.value, setUser);
                        });
                     }}
                  />
               </div>
            </div>

            <div className="w-full overflow-auto flex-1 scroll-bar pb-2.5 h-5/6">
               <ul className="flex flex-col gap-1">
                  {user?.map((item) => {
                     return (
                        <li
                           className={`flex items-center relative p-5px cursor-pointer h-38px ms-3 me-3 w-search employee-item  ${model ? 'employee-active' : '' } `}
                           data-user={item.user_id}
                           onClick={(e)=>{
                              setModel(true);
                           }}
                        >
                           <div className="w-7 h-7 ltr:mr-2.5 rtl:ml-2.5">
                              <div
                                 className="flex items-center justify-center w-full h-full icon rounded-full overflow-hidden"
                                 style={{ fill: "#b9bec7" }}
                              >
                                 {item.profile_path ? (
                                    <Image
                                       src={item.profile_path}
                                       alt="profile"
                                       className="w-full object-cover"
                                    />
                                 ) : (
                                    <svg
                                       fill="currentColor"
                                       viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path d="M20.062 18.697A10.492 10.492 0 1 0 1.5 12c0 2.45.864 4.82 2.438 6.697l-.015.013c.053.063.113.117.167.18.067.077.14.15.21.225.21.227.426.446.652.652.07.063.14.121.21.181.24.207.487.403.743.587.033.023.062.052.096.075v-.01a10.426 10.426 0 0 0 12 0v.01c.033-.024.062-.052.095-.076.256-.183.503-.379.743-.586.07-.06.141-.119.21-.18.227-.207.442-.426.652-.653.07-.076.142-.148.21-.226.054-.062.114-.116.167-.18l-.016-.012ZM12 6a3.375 3.375 0 1 1 0 6.75A3.375 3.375 0 0 1 12 6ZM6.005 18.697A3.746 3.746 0 0 1 9.75 15h4.5a3.747 3.747 0 0 1 3.745 3.697 8.955 8.955 0 0 1-11.99 0Z" />
                                    </svg>
                                 )}
                              </div>
                           </div>
                           <div className="flex-1">
                              <div className="max-w-full whitespace-nowrap text-ellipsis overflow-hidden font-normal leading-4 font-13px employee-name">
                                 {item.public_name}
                              </div>
                              <div className="font-10px font-normal text-b9bec7">
                                 {item.job}
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
                     );
                  })}

                  {
                     model && <UserInformation company={company} user={user} setModel={setModel} setNotification={setNotification} setMessage={setMessage} />
                  }

                  {
                     notification && <SuccessNotification setNotification={setNotification} >{message}</SuccessNotification>
                  }

               </ul>
            </div>
         </div>
      </div>
   );
}

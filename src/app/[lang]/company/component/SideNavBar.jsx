"use client";

// import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import logo from '../../../../../public/project-image/logo.svg';
import { usePathname } from 'next/navigation'
import Space from './Space';
import socket from "@/app/MainSocket";
import SuccessNotification from "../../component/SuccessNotification";

export default function SideNavBar({lang, dic,setShowMenu, showMenu, setShowOverlay, showOverlay,user}) {

   const pathname = usePathname()
   const [notification,setNotification] = useState(false);
   const [message, setMessage] = useState('');

   useEffect(()=>{

      socket.on('accept join',(msg)=>{

         setMessage(msg);
         setNotification(true);
         setTimeout(() => {
            setNotification(false);
         }, 5000);
      });

      socket.on("reject join",(msg)=>{

         setMessage(msg);
         setNotification(true);
         setTimeout(() => {
            setNotification(false);
         }, 5000);
      });

   },[socket])


   return (
      <>
      <div className="fixed side-height z-50">
         <nav className="sidebar border-right-e9ebf0  h-full top-0 bottom-0 w-[260px] z-50 transition-all duration-300 ">
            <div className="back-nav-side pb-6 dark:bg-black h-full flex flex-col">
               <div className="flex justify-between items-center p-2 border-bottom-e9ebf0">
                  <a
                     aria-current="page"
                     className="main-logo flex items-center shrink-0 active"
                     href="/"
                  >
                     <div>
                     <Image
                        className="w-8 ml-[5px] flex-none"
                        src={logo}
                        alt="logo"
                     />
                     </div>
                     <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                        VRISTO
                     </span>
                  </a>
                  <button
                     type="button"
                     className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                     onClick={(e)=>{
                        if(showMenu === '') {
                           setShowMenu('toggle-sidebar');
                        } else {
                           setShowMenu('');
                        }
                        if(showOverlay === '') {
                           setShowOverlay('hidden')
                        } else {
                           setShowOverlay('')
                        }
                     }}
                  >
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-auto rotate-90"
                     >
                        <path
                           d="M19 11L12 17L5 11"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           opacity="0.5"
                           d="M19 7L12 13L5 7"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        ></path>
                     </svg>
                  </button>
               </div>
               <div className="scrollbar-container relative scroll-bar overflow-y-auto ps--active-y">
                  <ul className="relative font-normal space-y-0.5 p-2 flex flex-col gap-y-0.5 border-bottom-e9ebf0">
                     <li className="nav-item">
                        <a href="/en/company"
                           type="button"
                           className={`nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200 ${pathname === '/en/company' ? 'active' : ''}`}
                        >
                           <span className="text-gray-600">
                           <svg _ngcontent-ng-c2501398817="" className="h-5 w-5 text-xl" id="cu3-icon-sidebarHome" viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path _ngcontent-ng-c2501398817="" fillRule="evenodd" d="M10.397 3.095a2.83 2.83 0 0 1 3.206 0l6 4.125a2.83 2.83 0 0 1 1.227 2.332V18A2.83 2.83 0 0 1 18 20.83H6A2.83 2.83 0 0 1 3.17 18V9.552A2.83 2.83 0 0 1 4.397 7.22l6-4.125Zm2.266 1.368a1.17 1.17 0 0 0-1.326 0l-6 4.125a1.17 1.17 0 0 0-.507.964V18c0 .646.524 1.17 1.17 1.17h2.17V16a3.83 3.83 0 0 1 7.66 0v3.17H18A1.17 1.17 0 0 0 19.17 18V9.552c0-.385-.19-.746-.507-.964l-6-4.125ZM14.17 19.17V16a2.17 2.17 0 0 0-4.34 0v3.17h4.34Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Home
                              </span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="/en/company/employee"
                           type="button"
                           className={`nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200 ${pathname === '/en/company/employee' ? 'active' : ''}`}
                        >
                           <span className="text-gray-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-xl" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M21 19.75c0-2.09-1.67-5.068-4-5.727m-2 5.727c0-2.651-2.686-6-6-6s-6 3.349-6 6"/>
        <circle cx="9" cy="7.25" r="3"/>
        <path d="M15 10.25a3 3 0 1 0 0-6"/>
    </g>
</svg>
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Employees
                              </span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-gray-600">

                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 20h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3v13a1 1 0 0 0 1 1Z" />
 <path d="m12 6-1.707-1.707A1 1 0 0 0 9.586 4H4a1 1 0 0 0-1 1v1" />
</svg>
                        
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Projects
                              </span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-gray-600">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
</svg>        
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Notifications
                              </span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-gray-600">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
 <path d="m22 6-10 7L2 6" />
</svg>                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Email
                              </span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           {/* <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinejoin="round"><path d="M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z"></path><path d="M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z"></path></svg> */}
                           <span className="text-gray-600">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 12h-6l-2 3h-4l-2-3H2" />
  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
</svg>              
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Employment applications
                              </span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-gray-600">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m23 7-7 5 7 5V7z" />
  <rect width={15} height={14} x={1} y={5} rx={2} ry={2} />
</svg>                         
</span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Clips
                              </span>
                        </a>
                     </li>

                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-gray-600">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
</svg>                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Notepade
                              </span>
                        </a>
                     </li>

                     <li className="nav-item">
                        <a href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-gray-600">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
</svg>                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Contacts
                              </span>
                        </a>
                     </li>
                     
                  </ul>

                  <Suspense fallback={<div>loading.....</div>}>
                  <Space user={user} />
                  </Suspense>
                  
               </div>
            </div>
         </nav>
      </div>

{
   notification && <SuccessNotification setNotification={setNotification} >{message}</SuccessNotification>
}

      </>
   );
}

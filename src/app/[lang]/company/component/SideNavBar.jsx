"use client";

import Link from "next/link";
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
      <div className="fixed sidebar side-height z-50">
         <nav className="border-main-right h-full top-0 bottom-0 w-[260px] z-50 transition-all duration-300 ">
            <div className="back-nav-side pb-6 dark:bg-black h-full flex flex-col">
               <div className="flex justify-between items-center p-2 border-main-bottom">
                  <Link
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
                     <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline text-white">
                        VRISTO
                     </span>
                  </Link>
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
                  <ul className="relative font-normal space-y-0.5 p-2 flex flex-col gap-y-0.5 border-main-bottom">
                     <li className="nav-item">
                        <Link href="/en/company"
                           type="button"
                           className={`nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5  ${pathname === '/en/company' ? 'active' : ''}`}
                        >
                           <span className="text-icon">
                           <svg _ngcontent-ng-c2501398817="" className="h-5 w-5 text-xl" id="cu3-icon-sidebarHome" viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path _ngcontent-ng-c2501398817="" fillRule="evenodd" d="M10.397 3.095a2.83 2.83 0 0 1 3.206 0l6 4.125a2.83 2.83 0 0 1 1.227 2.332V18A2.83 2.83 0 0 1 18 20.83H6A2.83 2.83 0 0 1 3.17 18V9.552A2.83 2.83 0 0 1 4.397 7.22l6-4.125Zm2.266 1.368a1.17 1.17 0 0 0-1.326 0l-6 4.125a1.17 1.17 0 0 0-.507.964V18c0 .646.524 1.17 1.17 1.17h2.17V16a3.83 3.83 0 0 1 7.66 0v3.17H18A1.17 1.17 0 0 0 19.17 18V9.552c0-.385-.19-.746-.507-.964l-6-4.125ZM14.17 19.17V16a2.17 2.17 0 0 0-4.34 0v3.17h4.34Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Home
                              </span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/en/company/employee"
                           type="button"
                           className={`nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5  ${pathname === '/en/company/employee' ? 'active' : ''}`}
                        >
                           <span className="text-icon flex items-center justify-center w-5 h-5">
                          <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 24 24" fill="currentColor" >
                          <path fillRule="evenodd" d="M15.5 5c-.703 0-1.34.272-1.816.718a1 1 0 0 1-1.368-1.46 4.656 4.656 0 0 1 6.399 6.766 7.51 7.51 0 0 1 4.277 5.851 1 1 0 1 1-1.984.25c-.34-2.707-2.672-4.813-5.508-4.813a1 1 0 1 1 0-2A2.656 2.656 0 1 0 15.5 5Zm-7 3a2.656 2.656 0 1 0 0 5.312A2.656 2.656 0 0 0 8.5 8Zm3.215 6.024a4.656 4.656 0 1 0-6.43 0 7.51 7.51 0 0 0-4.277 5.851 1 1 0 0 0 1.984.25c.34-2.707 2.672-4.813 5.508-4.813s5.168 2.106 5.508 4.813a1 1 0 1 0 1.984-.25c-.326-2.598-1.988-4.779-4.277-5.85Z" clipRule="evenodd"></path>
</svg>
                           </span>

                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm">
                                 Employees
                              </span>
                        </Link>
                     </li>
                     {/* <li className="nav-item">
                        <Link href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-icon flex items-center justify-center w-5 h-5">
                           <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 24 24" fill="currentColor" >
                              <path  fillRule="evenodd" d="M3.83 17c0 .646.524 1.17 1.17 1.17h14A1.17 1.17 0 0 0 20.17 17v-7A1.17 1.17 0 0 0 19 8.83H3.83V17Zm0-9.83h10.166L13 6.173a1.17 1.17 0 0 0-.828-.343H5A1.17 1.17 0 0 0 3.83 7v.17Zm12.514 0L14.173 5a2.83 2.83 0 0 0-2.002-.829H5A2.83 2.83 0 0 0 2.17 7v10A2.83 2.83 0 0 0 5 19.83h14A2.83 2.83 0 0 0 21.83 17v-7A2.83 2.83 0 0 0 19 7.17h-2.656Z" clipRule="evenodd"></path>
                           </svg>
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Projects
                              </span>
                        </Link>
                     </li> */}

                     <li className="nav-item">
                        <Link href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 0"
                        >
                           <span className="text-icon flex items-center justify-center w-4 h-4">
                           <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 24 24" fill="currentColor" >
                              <path fillRule="evenodd" d="M5.5 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2 5a3.5 3.5 0 1 1 4.5 3.355v7.29a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855v-7.29A3.502 3.502 0 0 1 2 5Zm12.707-3.207a1 1 0 0 1 0 1.414L13.914 4H15.5a4 4 0 0 1 4 4v7.645a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855V8a2 2 0 0 0-2-2h-1.586l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0ZM5.5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" clipRule="evenodd"></path>
                           </svg>
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm">
                                 Pull Requests
                              </span>
                        </Link>
                     </li>
{/* 
                     <li className="nav-item">
                        <Link href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 hover:bg-gray-200"
                        >
                           <span className="text-icon">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
</svg>        
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">
                                 Notifications
                              </span>
                        </Link>
                     </li> */}
                     <li className="nav-item">
                        <Link href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5"
                        >
                           <span className="text-icon">
                           <svg className="h-5 w-5 text-xl" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
 <path d="m22 6-10 7L2 6" />
</svg>                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm">
                                 Email
                              </span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 "
                        >
                           <span className="text-icon flex items-center justify-center w-5 h-5">
                          <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 24 24" fill="currentColor" >
   <path  fillRule="evenodd" d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Zm4-2a2 2 0 0 0-2 2v1h16V8a2 2 0 0 0-2-2H6Zm14 5H4v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5ZM6 15a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z" clipRule="evenodd"></path>
</svg>
                           </span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm ">
                                 Employment applications
                              </span>
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="/en/company/clip"
                           type="button"
                           className={`nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5  ${pathname === '/en/company/clip' ? 'active' : ''}`}
                        >
                          <span className="text-icon flex items-center justify-center w-5 h-5">
                          <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 24 24" fill="currentColor" >
   <path  fillRule="evenodd" d="M5.55 5.163a3.264 3.264 0 0 0-1.023.364c-.29.171-.829.71-1 1a3.175 3.175 0 0 0-.366 1.057c-.053.373-.053 9.059 0 9.432.093.639.341 1.124.82 1.603.486.486.983.737 1.628.821.385.05 8.997.05 9.382 0 .38-.055.747-.179 1.082-.367.29-.171.829-.71 1-1 .303-.516.405-1.002.406-1.942l.001-.609 1.53.761c1.719.855 1.822.89 2.355.802a1.67 1.67 0 0 0 .977-.502c.269-.271.429-.57.495-.925.059-.321.059-6.395 0-6.716a1.719 1.719 0 0 0-.495-.925 1.69 1.69 0 0 0-.972-.504c-.527-.09-.64-.051-2.36.804l-1.53.761-.001-.609c-.001-.94-.103-1.426-.406-1.942-.171-.29-.71-.829-1-1a3.175 3.175 0 0 0-1.057-.366c-.339-.048-9.131-.047-9.466.002Zm9.46 1.797c.27.101.527.358.631.633.077.202.079.324.079 4.707s-.002 4.505-.079 4.707a1.153 1.153 0 0 1-.631.633c-.208.078-.318.08-4.71.08s-4.502-.002-4.71-.08a1.153 1.153 0 0 1-.631-.633c-.077-.202-.079-.324-.079-4.706 0-4.393.002-4.503.08-4.711a1.17 1.17 0 0 1 .623-.629c.19-.075.351-.077 4.705-.079 4.406-.002 4.514 0 4.722.078Zm6.11 5.34c0 1.683-.009 3.06-.02 3.06-.011 0-.83-.405-1.82-.9l-1.8-.9v-2.52l1.79-.898c.603-.307 1.21-.607 1.82-.9.017-.001.03 1.375.03 3.058Z" clipRule="evenodd"></path>
</svg>

</span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm ">
                                 Clips
                              </span>
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link href="#"
                           type="button"
                           className=" nav-link group w-full py-1.5 px-2.5 rounded-md flex items-center gap-x-2.5 "
                        >
                        <span className="text-icon flex items-center justify-center w-5 h-5">
                          <svg width={'100%'} height={'100%'} className="block" viewBox="0 0 24 24" fill="currentColor" >
   <path fillRule="evenodd" d="M4 12a8 8 0 0 0 8 8 7.96 7.96 0 0 0 3.53-.819 2.1 2.1 0 0 1 1.29-.185c.92.16 1.84.328 2.657.481a223.22 223.22 0 0 1-.481-2.657 2.1 2.1 0 0 1 .185-1.29A7.96 7.96 0 0 0 20 12a8 8 0 1 0-16 0Zm17.589 7.88c-.186-.977-.411-2.19-.623-3.403a.1.1 0 0 1 .01-.062A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 4.415-1.025.1.1 0 0 1 .062-.009c1.214.212 2.426.437 3.404.623l.109.02a274.083 274.083 0 0 1 1.864.362.1.1 0 0 0 .117-.117l-.047-.236c-.069-.352-.18-.925-.315-1.628l-.02-.11Z" clipRule="evenodd"></path>
</svg>

</span>
                              <span className="text-2a2e34  whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-sm ">
                                 Contacts
                              </span>
                        </Link>
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

"use client";


import Image from "next/image";
import logo from '../../../../../public/project-image/logo.svg';
import languageIcon from '../../../../../public/project-image/EN.svg';
import userProfile from '../../../../../public/project-image/user-profile.jpeg';
import { useEffect, useState } from "react";
import ProfileDropMenu from './drop_menu/ProfileDropMenu';
import socket from "@/app/MainSocket";
import SuccessNotification from "../../component/SuccessNotification";


export default function TopNavBar({lang, dic,setShowMenu, showMenu, setShowOverlay, showOverlay,user}) {

   const [showProfileMenu, setShowProfileMenu] = useState(false);
   const [notification,setNotification] = useState(false);

   useEffect(()=>{
      socket.on('new order',(user)=>{
         console.log('server order...',user)
         setNotification(true);
      })
   },[socket])


   return (
      <header className="z-200">
         <div className="back-nav h-12 flex items-center">
            <div className="relative flex w-full items-center px-2  dark:bg-black">
               <div className="horizontal-logo flex justify-between items-center ltr:mr-2 rtl:ml-2">
                  <a className="main-logo flex items-center shrink-0" href="/">
                     <div>
                     <Image
                        className="w-6 inline"
                        src={logo}
                        alt="logo"
                     />
                     </div>

                     <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 text-white font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                        VRISTO
                     </span>
                  </a>

               </div>
               <div className="ltr:mr-2 rtl:ml-2 hidden sm:block">
                  <ul className="flex items-center space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                     <li>
                        <a
                           className="block p-2 rounded-full bg-transparent text-white dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                           href="/apps/calendar"
                        >
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                              ></path>
                              <path
                                 opacity="0.5"
                                 d="M7 4V2.5"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                              <path
                                 opacity="0.5"
                                 d="M17 4V2.5"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                              <path
                                 opacity="0.5"
                                 d="M2 9H22"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a
                           className="block p-2 rounded-full bg-transparent text-white dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                           href="/apps/todolist"
                        >
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 opacity="0.5"
                                 d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                              <path
                                 d="M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                              ></path>
                              <path
                                 opacity="0.5"
                                 d="M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                              ></path>
                           </svg>
                        </a>
                     </li>
                     <li>
                        <a
                           className="block p-2 rounded-full bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                           href="/apps/chat"
                        >
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <circle
                                 r="3"
                                 transform="matrix(-1 0 0 1 19 5)"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                              ></circle>
                              <path
                                 opacity="0.5"
                                 d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                  <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
                     <form className="false sm:relative absolute inset-x-0 sm:top-0 top-1/2 sm:translate-y-0 -translate-y-1/2 sm:mx-0 mx-4 z-10 hidden sm:block">
                        <div className="relative">
                           <input
                              type="text"
                              className="form-input ltr:pl-9 rtl:pr-9 ltr:sm:pr-4 rtl:sm:pl-4 ltr:pr-9 rtl:pl-9 pb-1 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
                              placeholder="Search..."
                           />
                           <button
                              type="button"
                              className="absolute w-9 h-9 inset-0 ltr:right-auto rtl:left-auto appearance-none peer-focus:text-primary"
                           >
                              <svg
                                 width="16"
                                 height="16"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="mx-auto"
                              >
                                 <circle
                                    cx="11.5"
                                    cy="11.5"
                                    r="9.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    opacity="0.5"
                                 ></circle>
                                 <path
                                    d="M18.5 18.5L22 22"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                 ></path>
                              </svg>
                           </button>
                           <button
                              type="button"
                              className="hover:opacity-80 sm:hidden block absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2"
                           >
                              <svg
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <circle
                                    opacity="0.5"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                 ></circle>
                                 <path
                                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                 ></path>
                              </svg>
                           </button>
                        </div>
                     </form>
                     <button
                        type="button"
                        className="search_btn sm:hidden p-2 rounded-full bg-transparent text-white  dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60"
                     >
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className="w-4.5 h-4.5 mx-auto dark:text-[#d0d2d6]"
                        >
                           <circle
                              cx="11.5"
                              cy="11.5"
                              r="9.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              opacity="0.5"
                           ></circle>
                           <path
                              d="M18.5 18.5L22 22"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                        </svg>
                     </button>
                  </div>
                  <div>
                     <button className="flex items-center p-2 rounded-full bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <circle
                              cx="12"
                              cy="12"
                              r="5"
                              stroke="currentColor"
                              stroke-width="1.5"
                           ></circle>
                           <path
                              d="M12 2V4"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              d="M12 20V22"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              d="M4 12L2 12"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              d="M22 12L20 12"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M19.7778 4.22266L17.5558 6.25424"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M4.22217 4.22266L6.44418 6.25424"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M6.44434 17.5557L4.22211 19.7779"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M19.7778 19.7773L17.5558 17.5551"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                        </svg>
                     </button>
                  </div>
                  <div className="dropdown shrink-0">
                     <button
                        type="button"
                        className="block p-2 rounded-full bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                     >
                        <Image
                           className="w-5 h-5 object-cover rounded-full"
                           src={languageIcon}
                           alt="flag"
                        />{" "}
                     </button>
                     <div
                        style={{position: "absolute", inset: "0px 0px auto auto", transform: "translate(0px, 44px)"}}
                        className="z-50"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-end"
                     ></div>
                  </div>
                  <div className="dropdown shrink-0">
                     <button
                        type="button"
                        className="block p-2 rounded-full bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                     >
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              opacity="0.5"
                              d="M22 10C22.0185 10.7271 22 11.0542 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <circle
                              cx="19"
                              cy="5"
                              r="3"
                              stroke="currentColor"
                              stroke-width="1.5"
                           ></circle>
                        </svg>
                     </button>
                     <div
                        style={{position: "absolute", inset: "0px 0px auto auto", transform: "translate(0px, 44px)"}}
                        className="z-50"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-end"
                     ></div>
                  </div>
                  <div className="dropdown shrink-0">
                     <button
                        type="button"
                        className="relative block p-2 rounded-full bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                     >
                        <span>
                           <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                              ></path>
                              <path
                                 opacity="0.5"
                                 d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                              <path
                                 opacity="0.5"
                                 d="M12 6V10"
                                 stroke="currentColor"
                                 stroke-width="1.5"
                                 stroke-linecap="round"
                              ></path>
                           </svg>
                           <span className="flex absolute w-3 h-3 ltr:right-0 rtl:left-0 top-0">
                              <span className="animate-ping absolute ltr:-left-[3px] rtl:-right-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-success/50 opacity-75"></span>
                              <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-success"></span>
                           </span>
                        </span>
                     </button>
                     <div
                        style={{position: "absolute", inset: "0px 0px auto auto", transform: "translate(0px, 44px)"}}
                        className="z-50"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-end"
                     ></div>
                  </div>
                  <div className="dropdown shrink-0 flex">
                     <button type="button" className="relative group block"  onClick={(e)=>{
                     setShowProfileMenu(!showProfileMenu)
                  }}>
                        <Image
                           className="w-8 h-8 rounded-full object-cover saturate-50 group-hover:saturate-100"
                           src={userProfile}
                           alt="userProfile"
                        />
                     </button>
                     {
                     showProfileMenu && <ProfileDropMenu user={user} userProfile={userProfile} dic={dic} lang={lang} />
                     }
                     {
                        notification &&
                        <SuccessNotification setNotification={setNotification} >
                           you are have new join order.
                        </SuccessNotification>
                     }
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

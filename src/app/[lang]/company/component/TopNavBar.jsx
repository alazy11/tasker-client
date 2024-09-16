"use client";

import Image from "next/image";
import logo from '../../../../../public/project-image/logo.svg';
import languageIcon from '../../../../../public/project-image/EN.svg';
import userProfile from '../../../../../public/project-image/user-profile.jpeg';
import { useState, useEffect, useReducer } from "react";
import dynamic from "next/dynamic";
import socket from "@/app/socket";
// import RecordScreen from "./record-screen/RecordScreen";
import RecordScreen from "./record-screen/RecordScreenA";
import sideBarReducer,{initialState} from '@/state-management/sideBarReducer';


const Profile = dynamic(()=> import("./profile/Profile"));
const Theme = dynamic(()=> import("./profile/Theme"));
const ProfileDropMenu = dynamic(()=> import("./drop_menu/ProfileDropMenu"));
const NoteList = dynamic(()=> import("./note/NoteList"));




export default function TopNavBar({lang, dic,setShowMenu, showMenu, setShowOverlay, showOverlay,user}) {

   const [showProfileMenu, setShowProfileMenu] = useState(false);
   const [profileModel, setProfileModel] = useState(false);
   const [themeModel, setThemeModel] = useState(false);
   const [noteModel, setNoteModel] = useState(false);
   const [isConnected, setIsConnected] = useState(false);
   const [transport, setTransport] = useState("N/A");
   const [state,dispatch] = useReducer(sideBarReducer,initialState)

   console.log('state.value--top',state);
   // console.log('dispatch',dispatch);

   useEffect(() => {
      socket.connect();
  
      if (socket.connected) {
        onConnect();
      }
  
      function onConnect() {
        setIsConnected(true);
        setTransport(socket.io.engine.transport.name);
  
        socket.io.engine.on("upgrade", (transport) => {
          setTransport(transport.name);
        });
      }
  
      function onDisconnect() {
        setIsConnected(false);
        setTransport("N/A");
      }
  
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);
  
      socket.on("new order",(ms)=>{
        console.log('server.....',ms)
      })
  
      return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
      };
    }, []);



   return (
      <>
      <header className="lg:z-[40!important] z-200 back-nav">
         <div className="back-nav h-12 flex items-center">
            <div className="relative flex w-full items-center px-2 justify-between">

               <div className="horizontal-logo flex items-center flex-1 ltr:mr-2 rtl:ml-2">
                  <a className="main-logo flex items-center shrink-0" href="/en/company">
                     <div>
                     <Image
                        className="w-6 inline"
                        src={logo}
                        alt="logo"
                     />
                     </div>

                     {/* <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 text-white font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                        VRISTO
                     </span> */}
                  </a>

                  <div className="hidden items-center ps-3 lg:flex">
            <button type="button" className="collapse-icon w-8 h-8  text-white rounded-md flex items-center btn-top-nav dark:text-white-light" onClick={(e)=>{
                        if(showMenu === '') {
                           setShowMenu('toggle-sidebar');
                           dispatch("show");
                        } else {
                           setShowMenu('');
                           dispatch("close");
                        }
                        if(showOverlay === '') {
                           setShowOverlay('hidden')
                        } else {
                           setShowOverlay('')
                        }
                     }} >
            {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto rotate-270">
            <path d="M19 11L12 17L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               </path><path opacity="0.5" d="M19 7L12 13L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
               
               </svg> */}

               <svg width="23" height="23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}  className="m-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 10H3" />
  <path d="M21 6H3" />
  <path d="M21 14H3" />
  <path d="M17 18H3" />
</svg>

               </button>
            </div>

               </div>



               <div className="flex w-1/4 search-top-nav">

<button className="flex items-center w-full h-8 relative border border-solid border-transparent rounded-ss-md rounded-es-md justify-start ps-2 search-modal-toggle__search-button">
   <div _nghost-ng-c4133689536="" className="leading-icon">
   <svg viewBox="0 0 24 24" width={"1rem"} height={"1rem"} fill="currentColor" className="block">
      <path fillRule="evenodd" d="M15.59 15.924a6.889 6.889 0 1 1 .334-.334 1.002 1.002 0 0 0-.334.334Zm.837 1.918a8.889 8.889 0 1 1 1.414-1.414l3.755 3.754a1 1 0 0 1-1.414 1.414l-3.755-3.754Z" clipRule="evenodd"></path>
   </svg>
   </div>

   <span _ngcontent-ng-c2871122969="">
   Search...
   </span>

</button>

<div className="search-modal-toggle__separator"></div>

   <button className="ai-button 
   flex items-center w-full h-8 relative border border-solid border-transparent flex-1 rounded-se-md rounded-ee-md justify-center
   ">
      <div _nghost-ng-c4133689536="" className="text-base me-1 ai-button__icon">
      <svg viewBox="0 0 24 24" fill="none"  width={"1rem"} height={"1rem"} className="block">
         <path fill="currentColor" fillRule="evenodd" d="M16.36 1.613c-.236-.817-1.484-.817-1.721 0l-.336 1.158c-.723 2.496-1.711 4.445-4.397 5.117L8.66 8.2a.815.815 0 0 0 0 1.6l1.246.312c2.686.672 3.674 2.621 4.397 5.117l.336 1.158c.237.817 1.485.817 1.722 0l.336-1.158c.723-2.496 1.711-4.445 4.397-5.117L22.34 9.8a.815.815 0 0 0 0-1.6l-1.246-.312c-2.686-.672-3.675-2.621-4.397-5.117l-.336-1.158ZM6.017 13.383c-.143-.51-.892-.51-1.034 0l-.201.724c-.434 1.56-1.027 2.778-2.638 3.198l-.748.195a.514.514 0 0 0 0 1l.748.195c1.611.42 2.204 1.638 2.638 3.198l.201.724c.142.51.891.51 1.034 0l.201-.724c.434-1.56 1.027-2.778 2.638-3.198l.748-.195a.514.514 0 0 0 0-1l-.748-.195c-1.611-.42-2.204-1.638-2.638-3.198l-.201-.724Z" clipRule="evenodd"></path>
      </svg>
      </div>

      <div _nghost-ng-c4133689536="" className="text-base me-1 ai-button__icon-default">
      <svg viewBox="0 0 24 24" fill="none"  width={"1rem"} height={"1rem"} className="block">
      <path fill="url('#cu3-icon-aiDefault-paint0_linear_11031_666')" fillRule="evenodd" d="M10.906 1.076c-.157-.545-.99-.545-1.148 0l-.223.772c-.482 1.664-1.141 2.963-2.931 3.41l-.831.209a.543.543 0 0 0 0 1.067l.83.207c1.79.448 2.45 1.748 2.932 3.411l.223.772c.158.545.99.545 1.149 0l.223-.772c.482-1.663 1.141-2.963 2.931-3.41l.831-.208a.543.543 0 0 0 0-1.067l-.83-.208c-1.79-.448-2.45-1.747-2.932-3.41l-.224-.773Z"></path>
      </svg>
      </div>
AI
   </button>
</div>



               {/* <div className="ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto ms-1 flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]"> */}
               <div className=" ms-2 flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                  
                  {/* <div>
                     <button className="flex items-center p-2 gap-1 font-medium rounded-full bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60">
                        <div>
                        <svg width={18} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path d="M8 12h8" />
    <path d="M12 16V8" />
</svg>
                        </div>
New
                     </button>
                  </div> */}

{/* 
                  <div className="nav-seperate ">

                  </div> */}

                  <div>
                  <button className="flex items-center p-2 btn-top-nav rounded-md bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" 
                     >
                     <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 17H9v1a3 3 0 1 0 6 0v-1Z"/>
    <path d="M21 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#ff1717" stroke="#ff1717"  />
    <path d="M14.047 3.304A7 7 0 0 0 5 10v3.722a.67.67 0 0 1-.196.474l-.511.511a1 1 0 0 0-.293.707V16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707l-.51-.51a.67.67 0 0 1-.197-.475V10c0-.176-.006-.351-.02-.524" />
</svg>

                     </button>
                  </div>
                  <div>
                  <button className="flex items-center p-2 btn-top-nav rounded-md bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" 
                     onClick={(e)=>{
                        setNoteModel(true)
                     }}>
                     <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5" />
    <path d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
</svg>
                     </button>
                  </div>
                  
                  <RecordScreen />
                  {/* <div className="dropdown shrink-0">
                  <button className="flex items-center p-2 btn-top-nav rounded-md bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" 
                        type="button"
                     >
<svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5a8 8 0 1 0 0 16 8 8 0 1 0 0-16z" />
    <path d="M12 9v4l2 2" />
    <path d="M5 3 2 6" />
    <path d="m22 6-3-3" />
    <path d="m6 19-2 2" />
    <path d="m18 19 2 2" />
</svg>
                     </button>
                     <div
                        style={{position: "absolute", inset: "0px 0px auto auto", transform: "translate(0px, 44px)"}}
                        className="z-50"
                        data-popper-reference-hidden="false"
                        data-popper-escaped="false"
                        data-popper-placement="bottom-end"
                     ></div>
                  </div> */}


                  {/* <div className="dropdown shrink-0">
                  <button className="flex items-center p-2 btn-top-nav rounded-md bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" 
                        type="button"
                     >
                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z" />
    <path d="M9 13h6" />
    <path d="M9 17h3" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
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
                  <button className="flex items-center p-2 btn-top-nav rounded-md bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" 
                        type="button"
                     >
                        <span>
                        <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm6-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" clipRule="evenodd" />
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
                  </div> */}


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
                  </div>
               </div>
            </div>
         </div>
      </header>
      
      {
      showProfileMenu && <ProfileDropMenu user={user} setShowProfileMenu={setShowProfileMenu} setProfileModel={setProfileModel} setThemeModel={setThemeModel} userProfile={userProfile}  dic={dic} lang={lang} />
      }

      {
      profileModel && <Profile user={user} setProfileModel={setProfileModel} userProfile={userProfile} dic={dic} lang={lang} />
      }
      {
      themeModel && <Theme user={user} setThemeModel={setThemeModel} dic={dic} lang={lang} />
      }
      {
      noteModel && <NoteList user={user} setNoteModel={setNoteModel} dic={dic} lang={lang} />
      }

      </>
   );
}

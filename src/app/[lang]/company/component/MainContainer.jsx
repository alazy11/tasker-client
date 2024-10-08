"use client";

import TopNavBar from './TopNavBar'
import SideNavBar from './SideNavBar';
import { useState, useReducer } from 'react';
import sideBarReducer,{initialState} from '@/state-management/sideBarReducer';

import CompanyInformation, { CompanyProvider } from './UserContext';

export default function MainContainer({ children,lang,dic,user }) {

   const [state,dispatch] = useReducer(sideBarReducer,initialState)

   console.log('state.value',state);


   const [showMenu, setShowMenu] = useState('');
   const [showOverlay, setShowOverlay] = useState('hidden');

   return (
      <CompanyProvider>
      <div className={` vertical ${showMenu} flex flex-col min-h-svh ` + "full ltr main-section antialiased relative text-sm font-normal"}>
         <div className={`overlay fixed inset-0 bg-[black]/60 z-50  ${showOverlay}`} onClick={(e)=>{

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

         }} ></div>

         <TopNavBar  lang={lang} dic={dic} setShowMenu={setShowMenu} user={user} showMenu={showMenu} setShowOverlay={setShowOverlay} showOverlay={showOverlay}  />
         <div className='navbar-sticky text-black dark:text-white-dark'>
         <SideNavBar lang={lang} dic={dic} user={user} setShowMenu={setShowMenu} showMenu={showMenu} setShowOverlay={setShowOverlay} showOverlay={showOverlay} />
         <div className={`main-company-container bg-white dark:bg-gray-950 h-full overflow-auto`}>
         <div className=" animate__animated flex flex-col h-full">
         {/* <TopInlineNav /> */}
         <main className='main-content-style text-black h-full'>
            {children}
         </main>
         </div>
         {/* <Footer /> */}
      </div>
      </div>
      </div>
      </CompanyProvider>

   );
}
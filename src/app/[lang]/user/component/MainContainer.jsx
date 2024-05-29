"use client";

import TopNavBar from './TopNavBar'
import SideNavBar from './SideNavBar';
import Footer from '../../component/Footer'
import { useState } from 'react';
import TopInlineNav from './TopInlineNav';

export default function MainContainer({ children,lang,dic,user }) {

   console.log('user....main',user);

   const [showMenu, setShowMenu] = useState('');
   const [showOverlay, setShowOverlay] = useState('hidden');

   return (
      <div className={` vertical ${showMenu} flex flex-col min-h-svh ` + "full ltr main-section antialiased relative text-sm font-normal"}>
         <div className={`overlay  fixed inset-0 bg-[black]/60 z-50 lg:hidden ${showOverlay}`} onClick={(e)=>{

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

         }} ></div>

         <TopNavBar  lang={lang} dic={dic} setShowMenu={setShowMenu} user={user} showMenu={showMenu} setShowOverlay={setShowOverlay} showOverlay={showOverlay}  />
         <div className='navbar-sticky text-black dark:text-white-dark'>
         <SideNavBar lang={lang} dic={dic} user={user} setShowMenu={setShowMenu} showMenu={showMenu} setShowOverlay={setShowOverlay} showOverlay={showOverlay} />
         <div className={`main-company-container bg-white ltr:ml-260 rtl:mr-260 h-full overflow-auto`}>
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
   );
}
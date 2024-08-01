"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import Image from "next/image";
import profile from "@/public/project-image/user-profile.jpeg";
import { useState } from "react";



async function deleteSpace(spaceId, referesh, setProgress, setSave, setModel, setReferesh) {
   setSave(true);
   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceId}`, {
      method:'DELETE',
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      }
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            setSave(false);
         } else {
            setModel(false);
            setProgress(false);
            setTimeout(()=>{
               setSave(false);
               setProgress(true);
               setReferesh(!referesh);
            },2000);
         }
      })
      .catch((error) => {
         console.log(error);
         setSave(false);
      });
}

async function logout() {

   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/logout`, {
      credentials: "include",
      headers: {
         "cache-control": "no-cache",
      }
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
         } else {
            let a = document.createElement('a');
            a.href = '/en/login';
            a.click();
         }
      })
      .catch((error) => {
         console.log(error);
      });
}


export default function ProfileDropMenu({user, setShowProfileMenu,setProfileModel, setThemeModel, userProfile, dic, lang}) {


   return (
      <DropDownModel setShowIcon={setShowProfileMenu}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 top-14 box-shadow-profile menu-style border-e8eaed rounded-md min-w-72 w-72 overflow-y-auto flex flex-col pt-2 pb-2"
            // style={{ top:'53px',left:'10px'}}
         >
            <ul>

               <li className="">
                  <div className="flex items-center py-2 px-4 gap-3">
                     <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image src={profile} alt={'profile image'} className="w-full" />
                        </div>
                        <div className="absolute ">

                        </div>
                     </div>

                     <div>
                        <div className="text-sm font-medium mb-0.5 text-2a2e34">Alazy Alhimeari</div>
                        <div className="text-xs"
                        style={{color:" var(--cu-content-tertiary)"}}
                        >Online</div>
                     </div>

                  </div>
               </li>

               <div className="w-full my-2 border-bottom-e8eaed" style={{height:'1px'}}></div>

               <li className="border-bottom-e8eaed">
                  <ul className="pb-2 flex flex-col gap-1.5">
                     <li className="min-h-3 pe-2 ps-2">
                        <button
                           className="p-2 flex items-center w-full gap-3 menu-style_item rounded"
                           onClick={(e)=>{
                              setProfileModel(true);
                              setShowProfileMenu(false);
                           }}
                        >
                           <span className="menu-style_item-icon">
                           <svg width={'1rem'} height={'1rem'} fill="currentColor"                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M12 1.842a5.558 5.558 0 0 0-1.543 10.9c-1.83.222-3.401.87-4.584 2.036-1.506 1.484-2.268 3.693-2.268 6.575a.728.728 0 1 0 1.457 0c0-2.637.694-4.415 1.833-5.538C8.037 14.69 9.741 14.108 12 14.108c2.259 0 3.963.582 5.105 1.707 1.139 1.123 1.833 2.9 1.833 5.538a.728.728 0 1 0 1.457 0c0-2.882-.762-5.091-2.268-6.575-1.183-1.166-2.753-1.814-4.584-2.037A5.558 5.558 0 0 0 12 1.841ZM7.898 7.4a4.102 4.102 0 1 1 8.204 0 4.102 4.102 0 0 1-8.204 0Z" clipRule="evenodd" />
</svg>
                           </span>
                           <span className="option-style menu-style_item-text">
                              Profile
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 menu-style_item rounded"
                           onClick={(e)=>{
                           setThemeModel(true);
                           setShowProfileMenu(false);
                        }}
                        >
                           <span className="menu-style_item-icon">
                           <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2.5H3V10h14V2.5Z" />
    <path d="M17.013 6H21.5v8.05l-12 1.55v5.9" />
</svg>


{/* <svg width={34} height={34} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5v3h14V5H5ZM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1Zm11.732 1.732 1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0Z" />
</svg> */}


                           </span>
                           <span className="option-style menu-style_item-text">
                              Themes
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 menu-style_item rounded">
                           <span className="menu-style_item-icon">
                           <svg width="1rem" height="1rem" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.296 9.015a3 3 0 1 0-.59 5.97 3 3 0 0 0 .59-5.97v0ZM19.518 12a7.238 7.238 0 0 1-.072.975l2.12 1.662a.507.507 0 0 1 .114.644l-2.005 3.469a.507.507 0 0 1-.615.215l-2.105-.847a.753.753 0 0 0-.711.082 7.703 7.703 0 0 1-1.01.588.747.747 0 0 0-.413.569l-.316 2.244a.519.519 0 0 1-.5.43h-4.01a.52.52 0 0 1-.501-.415l-.315-2.242a.753.753 0 0 0-.422-.573 7.278 7.278 0 0 1-1.006-.59.75.75 0 0 0-.708-.08l-2.105.848a.507.507 0 0 1-.616-.215L2.32 15.295a.506.506 0 0 1 .114-.644l1.792-1.406a.752.752 0 0 0 .28-.66 6.392 6.392 0 0 1 0-1.165.75.75 0 0 0-.284-.654L2.431 9.36a.507.507 0 0 1-.111-.641L4.325 5.25a.507.507 0 0 1 .616-.215l2.105.847a.755.755 0 0 0 .71-.082 7.71 7.71 0 0 1 1.01-.587.747.747 0 0 0 .414-.57L9.495 2.4a.52.52 0 0 1 .5-.43h4.01a.52.52 0 0 1 .502.416l.315 2.241a.753.753 0 0 0 .421.573c.351.17.687.366 1.006.59a.75.75 0 0 0 .709.08l2.104-.848a.507.507 0 0 1 .616.215l2.005 3.469a.506.506 0 0 1-.115.644l-1.791 1.406a.752.752 0 0 0-.284.66c.016.195.026.39.026.585Z"></path>
</svg>
                           </span>
                           <span className="option-style menu-style_item-text">
                              Settings
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button className="p-2 flex items-center w-full gap-3 menu-style_item rounded">
                           <span className="menu-style_item-icon">
                           <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
</svg>
                           </span>
                           <span className="option-style menu-style_item-text">
                              Notification Settings
                           </span>
                        </button>
                     </li>
                  </ul>
               </li>

               <li className="">
                  <ul className="pt-2 flex flex-col gap-1.5">
                     <li className="min-h-3 pe-2 ps-2">
                        <button
                           className="p-2 flex items-center w-full gap-3 menu-style_item rounded"
                           onClick={(e) => {
                              // setMessage(
                              //    "save in Archive"
                              // );

                           }}
                        >
                           <span className="menu-style_item-icon">
                           <svg width={'1rem'} height={'1rem'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6a3.94 3.94 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8c1.066 0 1.934.867 1.934 1.934 0 .598-.48 1.032-1.216 1.626-.24.188-.47.388-.69.599-.999.997-1.028 2.056-1.028 2.174V15h2v-.633c0-.016.032-.386.44-.793.15-.15.34-.3.535-.458.78-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6Zm-1 10h2v2h-2v-2Z" />
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8Z" />
</svg>
                           </span>
                           <span className="option-style menu-style_item-text">
                              Help
                           </span>
                        </button>
                     </li>
                     <li className="min-h-3 pe-2 ps-2">
                        <button
                           className="p-2 flex items-center w-full gap-3 menu-style_item rounded button-delete"
                           onClick={(e) => {
                              logout();
                           }}
                        >
                           <span className="text-inherit">
                           <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 12H4m8 3 3-3-3 3Zm3-3-3-3 3 3Z" />
    <path d="M9 7V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-2" />
</svg>
                           </span>
                           <span className="option-style text-inherit">
                              Log out
                           </span>
                        </button>
                     </li>
                  </ul>
               </li>
{/* 
               <li className="pe-2 ps-2 pt-2">
                  <button className="w-full h-8 button-background text-white rounded-md flex items-center justify-center text-sm font-medium">
                     View Profile
                  </button>
               </li> */}
            </ul>
         </div>
      </div>
   </DropDownModel>



   );

}
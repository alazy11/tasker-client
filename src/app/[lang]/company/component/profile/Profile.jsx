"use client";


import DropDownModel from "@/app/[lang]/component/DropDownModel";
import { useState } from "react";
import Image from "next/image";
import profile from "@/public/project-image/user-profile.jpeg";
import BasicInfo from './BasicInfo';
import AboutInfo from './AboutInfo';



export default function Profile({user,setProfileModel, userProfile, dic, lang}) {


   const[active, setActive] = useState('info');
   const time = new Date().getHours() +':'+ new Date().getSeconds();

   return (
      <DropDownModel setShowIcon={setProfileModel}>
      <div
         className="h-full absolute top-0 ltr:right-0 rtl:left-0 z-2700"
         style={{width:'100%', maxWidth:"700px"}}
      >
         <div
            className="h-full w-full bg-white border-solid relative border-t-4 border-top-color-7f77f1 profile-sidebar side-animation  overflow-y-auto flex flex-col pt-2 pb-2"
            // style={{ top:'53px',left:'10px'}}
         >
            <div className="close-profile-btn absolute w-9 h-9 p-2.5 top-1 left-auto right-1 cursor-pointer" style={{stroke:"#979797"}} onClick={(e)=>{
               setProfileModel(false)
            }}>
            <svg className="w-full h-full block" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2.5"><path d="m2 2 20 20M22 2 2 22"></path></g></svg>
            </div>

            <div className="h-full w-full flex flex-col">

               <div className="py-6 px-8 pb-0 border-bottom-e9ebf0">

                  <div className="w-full h-full flex flex-col">

                  <div className="flex gap-2 pb-8">

                     <div>
                        <div className="relative">
                           <div className="w-16 h-16 rounded-full overflow-hidden relative">
                              <Image src={profile} alt="profile image" fill className="object-cover" />
                           </div>
                           <div className="absolute w-2.5 h-2.5 rounded-full top-0 left-auto right-0 border border-solid border-white color-online"></div>
                        </div>
                     </div>

                     <div className="flex w-full flex-col justify-center">

                        <div className="flex justify-between w-full mb-3">

                           <div className="cursor-pointer">
                              <div className="whitespace-nowrap overflow-hidden text-ellipsis p-1 ltr:pl-2 rtl:pr-2 text-lg font-medium leading-6 text-2a2e34">
                                 {user.public_name}
                              </div>
                           </div>

                           <div className="flex items-center">
                              <p className="px-2 online text-xs font-medium flex items-center self-start py-1.5 mt-1 ml-2 rounded">
                                 Online
                              </p>
                           </div>

                        </div>

                        <div className="grid gap-2 profile-details">

                           <div>
                              <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium ltr:pl-2 rtl:pr-2 text-2a2e34">
                                 User Name
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 relative rounded h-6 ltr:pr-1 rtl:pl-1 ltr:pl-2 rtl:pr-2 text-xs font-medium">
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis color-600">
                                    @{user.company_name}
                                    </span>
                                    <button className="border-white w-6 h-6 rounded text-base inline-flex items-center justify-center color-700">
                                    <span className="border-0 w-6 h-6 rounded text-base inline-flex items-center justify-center color-700">
                                    <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width={13} height={13} x={9} y={9} rx={2} ry={2} />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
</svg>
</span>
                                    </button>
                                 </div>
                              </div>
                           </div>

                           <div>
                              <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium ltr:pl-2 rtl:pr-2 text-2a2e34">
                                 Email
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 relative rounded h-6 ltr:pr-1 rtl:pl-1 ltr:pl-2 rtl:pr-2 text-xs font-medium">
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis color-600">
                                    {user.email}
                                    </span>
                                    <button className="border-0 w-6 h-6 rounded text-base inline-flex items-center justify-center color-700">
                                    <span className="border-0 w-6 h-6 rounded text-base inline-flex items-center justify-center color-700">
                                    <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width={13} height={13} x={9} y={9} rx={2} ry={2} />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
</svg>
</span>
                                    </button>
                                 </div>
                              </div>
                           </div>

                           <div>
                              <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium ltr:pl-2 rtl:pr-2 text-2a2e34">
                                 Job
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 relative rounded h-6 ltr:pr-1 rtl:pl-1 ltr:pl-2 rtl:pr-2 text-xs font-medium">
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis color-600">
                                       {user.job}
                                    </span>
                                    <button className="border-0 w-6 h-6 rounded text-base inline-flex items-center justify-center color-700">
                                       <span className="border-0 w-6 h-6 rounded text-base inline-flex items-center justify-center color-700">
                                    <svg width={'1rem'} height={'1rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width={13} height={13} x={9} y={9} rx={2} ry={2} />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
</svg>
</span>
                                    </button>
                                 </div>
                              </div>
                           </div>

                           <div>
                              <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium ltr:pl-2 rtl:pr-2 text-2a2e34">
                                 Local Time
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 relative rounded h-6 ltr:pr-1 rtl:pl-1 ltr:pl-2 rtl:pr-2 text-xs font-medium">
                                    <span className="whitespace-nowrap overflow-hidden text-ellipsis color-600">
                                    {time} 
                                    </span>
                                 </div>
                              </div>
                           </div>

                        </div>

                     </div>



                  </div>


                  <div className="flex justify-between">
                        <div className="flex self-stretch gap-8">
                           <div className={` ${active  === 'info' ? "active-profile-option" : ''}  profile-menu-hover flex items-center cursor-pointer text-center border-0 border-b-2 border-solid border-transparent pb-2.5`} onClick={(e)=>{
                              setActive('info');
                           }}>
                              <div className="text-sm whitespace-nowrap text-2a2e34">
                                 Account
                              </div>
                           </div>

                           <div className={` ${active  === 'info' ? "" : 'active-profile-option'}  profile-menu-hover flex items-center cursor-pointer text-center border-0 border-b-2 border-solid border-transparent pb-2.5`} onClick={(e)=>{
                           setActive('about');
                           }}>
                              <div className="text-sm whitespace-nowrap text-2a2e34">
                                 About
                              </div>
                           </div>

                        </div>
                  </div>

                  </div>
               </div>

               {
                  active === 'info' ? <BasicInfo user={user} /> : <AboutInfo />
               }

               
               {/*  */}

            </div>

         </div>
         </div>
      </DropDownModel>
   );

}
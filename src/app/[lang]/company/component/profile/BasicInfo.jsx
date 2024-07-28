

export default function BasicInfo({user}) {



   return (
      <>
                  <div className="flex-1 scroll-bar overflow-auto back-nav-side">
                  <div className="  min-h-full">
                     <div className="my-6 mx-8">
                        <div className="flex items-center justify-between h-6">
                           <h2 className="text-sm font-semibold cursor-default text-2a2e34">
                           Basic Information
                           </h2>
                        </div>

                        <div className="w-full mt-2">
                           <div className="w-full profile-info-grid">

                              <div
                                    className="grid grid-project gap-1 cursor-default"
                                 >
                                    <div className="grid gap-2 label items-center min-h-9">
                                       <span className=" w-4 h-4 flex items-center justify-center color-600">
                                       <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
</svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          UserName
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                          {
                                             <div className="text-sm font-normal leading-5 flex whitespace-nowrap overflow-hidden text-ellipsis items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                {user.company_name}
                                             </div>
                                          }
                                       </div>
                                    </div>
                                 </div>
                              
                              <div
                                    className="grid grid-project gap-1 cursor-default"
                                 >
                                    <div className="grid gap-2 label items-center min-h-9">
                                       <span className=" w-4 h-4 flex items-center justify-center color-600">
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
                                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                             <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                                          </svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          PublicName
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                          {
                                             <div className="text-sm font-normal leading-5 flex whitespace-nowrap overflow-hidden text-ellipsis items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                {user.public_name}
                                             </div>
                                          }
                                       </div>
                                    </div>
                              </div>

                              <div
                                    className="grid grid-project gap-1 cursor-default"
                                 >
                                    <div className="grid gap-2 label items-center min-h-9">
                                       <span className=" w-4 h-4 flex items-center justify-center color-600">
                                       <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          Phone Number
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                          {
                                             <div className="text-sm font-normal capitalize leading-5 flex whitespace-nowrap overflow-hidden text-ellipsis items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                {user.phone_number}
                                             </div>
                                          }
                                       </div>
                                    </div>
                              </div>

                              <div
                                    className="grid grid-project gap-1 cursor-default"
                                 >
                                    <div className="grid gap-2 label items-center min-h-9">
                                       <span className=" w-4 h-4 flex items-center justify-center color-600">
                                       <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="m22 6-10 7L2 6" />
</svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          Email
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                          {
                                             <div className="text-sm font-normal leading-5 flex whitespace-nowrap overflow-hidden text-ellipsis items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                {user.email}
                                             </div>
                                          }
                                       </div>
                                    </div>
                              </div>

                              <div
                                    className="grid grid-project gap-1 cursor-default"
                                 >
                                    <div className="grid gap-2 label items-center min-h-9">
                                       <span className=" w-4 h-4 flex items-center justify-center color-600">
                                       <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Z" />
    <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
    <path d="M22 12H2" />
    <path d="M7 12v2" />
    <path d="M17 12v2" />
</svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          Job
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                          {
                                             <div className="text-sm font-normal leading-5 flex whitespace-nowrap overflow-hidden text-ellipsis items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                {user.job}
                                             </div>
                                          }
                                       </div>
                                    </div>
                              </div>

                              <div
                                    className="grid grid-project gap-1 cursor-default"
                                 >
                                    <div className="grid gap-2 label items-center min-h-9">
                                       <span className=" w-4 h-4 flex items-center justify-center color-600">
                                       <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.032 15.287 12 22l5.968-6.713C22.545 10.14 18.889 2 12 2 5.11 2 1.455 10.139 6.032 15.287Z" />
    <path d="M12 7a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
</svg>
                                       </span>
                                       <p className="text-sm leading-4 font-normal color-600">
                                          Location
                                       </p>
                                    </div>

                                    <div>
                                       <div className="w-full flex items-center text-sm font-normal min-h-9 color-700 rounded-md pl-1.5 pr-1.5 select-none hover:bg-gray-50">
                                          {
                                             <div className="text-sm font-normal capitalize leading-5 flex whitespace-nowrap overflow-hidden text-ellipsis items-center gap-2 w-full border-none rounded-md text-2a2e34">
                                                {user.city}, {user.country}
                                             </div>
                                          }
                                       </div>
                                    </div>
                              </div>

                           </div>
                        </div>

                     </div>

                     <div className="my-6 mx-8">
                        <div className="flex items-center justify-between h-6">
                           <h2 className="text-sm font-semibold cursor-default text-2a2e34">
                           About
                           </h2>
                        </div>

                        <div className="w-full mt-2">
                           <div className="w-full">
                              <div>
                              {user.about}
                              </div>
                           </div>
                        </div>

                     </div>

                  </div>
               </div>
      </>
   );

}
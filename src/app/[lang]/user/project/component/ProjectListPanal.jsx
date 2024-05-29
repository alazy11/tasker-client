export default function ProjectListPanal() {
   return (
      <div className="panel border-e9ebf0 p-0 flex-1 overflow-auto h-full">
         <div className="flex flex-col h-full">
            <div className="p-4 flex sm:flex-row flex-col w-full sm:items-center gap-4">
               <div className="ltr:mr-3 rtl:ml-3 flex items-center">
                  <button
                     type="button"
                     className="xl:hidden hover:text-primary block ltr:mr-3 rtl:ml-3"
                  >
                     <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M20 7L4 7"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                        ></path>
                        <path
                           opacity="0.5"
                           d="M20 12L4 12"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                        ></path>
                        <path
                           d="M20 17L4 17"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                        ></path>
                     </svg>
                  </button>
                  <div className="relative group flex-1">
                     <input
                        type="text"
                        className="form-input peer ltr:!pr-10 rtl:!pl-10"
                        placeholder="Search Task..."
                        value=""
                     />
                     <div className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                        <svg
                           width="16"
                           height="16"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
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
                     </div>
                  </div>
               </div>
               <div className="flex items-center justify-center sm:justify-end sm:flex-auto flex-1">
                  <p className="ltr:mr-3 rtl:ml-3">1-10 of 24</p>
                  <button
                     type="button"
                     disabled=""
                     className="bg-[#f4f4f4] rounded-md p-1 enabled:hover:bg-primary-light dark:bg-white-dark/20 enabled:dark:hover:bg-white-dark/30 ltr:mr-3 rtl:ml-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 rtl:-rotate-90 rotate-90"
                     >
                        <path
                           d="M19 9L12 15L5 9"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        ></path>
                     </svg>
                  </button>
                  <button
                     type="button"
                     className="bg-[#f4f4f4] rounded-md p-1 enabled:hover:bg-primary-light dark:bg-white-dark/20 enabled:dark:hover:bg-white-dark/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 rtl:rotate-90 -rotate-90"
                     >
                        <path
                           d="M19 9L12 15L5 9"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        ></path>
                     </svg>
                  </button>
               </div>
            </div>
            <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b]"></div>
            <div className="table-responsive grow overflow-y-auto sm:min-h-[300px] min-h-[400px]">
               <table className="table-hover">
                  <tbody>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-1"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Meeting with Shaun Park at 4:50pm
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-primary hover:bg-primary">
                                       medium
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, 35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="false"
                                    data-popper-escaped="false"
                                    data-popper-placement="bottom-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-success hover:bg-success">
                                       team
                                    </span>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: " 0px 0px auto auto",
                                       transform: "translate(0px, 35px)",
                                    }}
                                    className="z-50"
                                    dataPopperReferenceHidden="false"
                                    dataPopperEscaped="false"
                                    dataPopperPlacement="bottom-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 07 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div className="grid place-content-center h-8 w-8 rounded-full bg-primary text-white text-sm font-semibold">
                                    JS
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, 25px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="false"
                                    data-popper-escaped="false"
                                    data-popper-placement="bottom-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-2"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Team meet at Starbucks
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-warning hover:bg-warning">
                                       low
                                    </span>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "0px 0px auto auto",
                                       transform: "translate(0px, 35px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="false"
                                    data-popper-escaped="false"
                                    data-popper-placement="bottom-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-success hover:bg-success">
                                       team
                                    </span>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "0px 0px auto auto",
                                       transform: "translate(0px, 35px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="false"
                                    data-popper-escaped="false"
                                    data-popper-placement="bottom-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 06 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-15.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, 25px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="false"
                                    data-popper-escaped="false"
                                    data-popper-placement="bottom-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer bg-white-light/30 dark:bg-[#1a2941]">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-3"
                              className="form-checkbox"
                              checked=""
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap line-through">
                                 Meet Lisa to discuss project details
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 line-through">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-primary hover:bg-primary">
                                       medium
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-info hover:bg-info">
                                       update
                                    </span>
                                 </button>
                                 <div
                                                                     style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium line-through">
                              Aug, 05 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-1.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                                                      style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -25px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-4"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Download Complete
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-warning hover:bg-warning">
                                       low
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 04 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-16.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: " auto 0px 0px auto",
                                       transform: "translate(0px, -25px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-5"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Conference call with Marketing Manager
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-danger hover:bg-danger">
                                       high
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-info hover:bg-info">
                                       update
                                    </span>
                                 </button>
                                 <div
                                                                      style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 03 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-5.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                                                      style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -25px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-6"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 New User Registered
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-primary hover:bg-primary">
                                       medium
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 02 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div className="border border-gray-300 dark:border-gray-800 rounded-full grid place-content-center h-8 w-8">
                                    <svg
                                       width="18"
                                       height="18"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="w-4.5 h-4.5"
                                    >
                                       <circle
                                          cx="12"
                                          cy="6"
                                          r="4"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <path
                                          opacity="0.5"
                                          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></path>
                                    </svg>
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "auto 0px 0px auto",
                                       transform: "translate(0px, -25px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-7"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Fix issues in new project
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-primary hover:bg-primary">
                                       medium
                                    </span>
                                 </button>
                                 <div
                                                                    style={{
                                                                     position: "absolute",
                                                                     inset: "auto 0px 0px auto",
                                                                     transform: "translate(0px, -35px)",
                                                                  }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-success hover:bg-success">
                                       team
                                    </span>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "auto 0px 0px auto",
                                       transform: "translate(0px, -35px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 01 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-17.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "auto 0px 0px auto",
                                       transform: "translate(0px, -25px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-8"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Check All functionality
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-primary hover:bg-primary">
                                       medium
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-info hover:bg-info">
                                       update
                                    </span>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -35px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Aug, 07 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-18.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                                                       style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -25px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer bg-white-light/30 dark:bg-[#1a2941]">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-9"
                              className="form-checkbox"
                              checked=""
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap line-through">
                                 Check Repository
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 line-through">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse">
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-primary hover:bg-primary">
                                       medium
                                    </span>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "auto 0px 0px auto",
                                       transform: "translate(0px, -35px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <span className="badge rounded-full capitalize hover:top-0 hover:text-white badge-outline-success hover:bg-success">
                                       team
                                    </span>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "auto 0px 0px auto",
                                       transform: "translate(0px, -35px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium line-through">
                              Aug, 07 2020
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-20.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                    style={{
                                       position: "absolute",
                                       inset: "auto 0px 0px auto",
                                       transform: "translate(0px, -25px)",
                                    }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                     <tr className="group cursor-pointer ">
                        <td className="w-1">
                           <input
                              type="checkbox"
                              id="chk-13"
                              className="form-checkbox"
                           />
                        </td>
                        <td>
                           <div>
                              <div className="group-hover:text-primary font-semibold text-base whitespace-nowrap ">
                                 Do something nice for someone I care about
                              </div>
                              <div className="text-white-dark overflow-hidden min-w-[300px] line-clamp-1 ">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Morbi pulvinar feugiat
                                 consequat. Duis lacus nibh, sagittis id varius
                                 vel, aliquet non augue. Vivamus sem ante,
                                 ultrices at ex a, rhoncus ullamcorper tellus.
                                 Nunc iaculis eu ligula ac consequat. Orci
                                 varius natoque penatibus et magnis dis
                                 parturient montes, nascetur ridiculus mus.
                                 Vestibulum mattis urna neque, eget posuere
                                 lorem tempus non. Suspendisse ac turpis dictum,
                                 convallis est ut, posuere sem. Etiam imperdiet
                                 aliquam risus, eu commodo urna vestibulum at.
                                 Suspendisse malesuada lorem eu sodales aliquam.
                              </div>
                           </div>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center ltr:justify-end rtl:justify-start space-x-2 rtl:space-x-reverse"></div>
                        </td>
                        <td className="w-1">
                           <p className="whitespace-nowrap text-white-dark font-medium ">
                              Sep, 10 2022
                           </p>
                        </td>
                        <td className="w-1">
                           <div className="flex items-center justify-between w-max ltr:ml-auto rtl:mr-auto">
                              <div className="ltr:mr-2.5 rtl:ml-2.5 flex-shrink-0">
                                 <div>
                                    <img
                                       src="/assets/images/profile-25.jpeg"
                                       className="h-8 w-8 rounded-full object-cover"
                                       alt="avatar"
                                    />
                                 </div>
                              </div>
                              <div className="dropdown">
                                 <button type="button" className="align-middle">
                                    <svg
                                       width="20"
                                       height="20"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                       className="rotate-90 opacity-70"
                                    >
                                       <circle
                                          cx="5"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          opacity="0.5"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                       <circle
                                          cx="19"
                                          cy="12"
                                          r="2"
                                          stroke="currentColor"
                                          stroke-width="1.5"
                                       ></circle>
                                    </svg>
                                 </button>
                                 <div
                                                                      style={{
                                                                        position: "absolute",
                                                                        inset: "auto 0px 0px auto",
                                                                        transform: "translate(0px, -25px)",
                                                                     }}
                                    className="z-50"
                                    data-popper-reference-hidden="true"
                                    data-popper-escaped="true"
                                    data-popper-placement="top-end"
                                 ></div>
                              </div>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}

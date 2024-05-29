export default function ProjectListOption() {
   return (
      <div className="panel p-4 border-e9ebf0 flex-none w-[240px] max-w-full absolute xl:relative z-10 space-y-4 xl:h-auto h-full xl:block ltr:xl:rounded-r-md ltr:rounded-r-none rtl:xl:rounded-l-md rtl:rounded-l-none hidden false">
         <div className="flex flex-col h-full pb-16">
            <div className="pb-5">
               <div className="flex text-center items-center">
                  <div className="shrink-0">
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           opacity="0.5"
                           d="M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V10.0002C3 7.17179 3 5.75757 3.87868 4.87889C4.64706 4.11051 5.82497 4.01406 8 4.00195"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                        <path
                           d="M8 14H16"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                        ></path>
                        <path
                           d="M7 10.5H17"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                        ></path>
                        <path
                           d="M9 17.5H15"
                           stroke="currentColor"
                           stroke-width="1.5"
                           stroke-linecap="round"
                        ></path>
                        <path
                           d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                     </svg>
                  </div>
                  <h3 className="text-lg font-semibold ltr:ml-3 rtl:mr-3">
                     Todo list
                  </h3>
               </div>
            </div>
            <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b] mb-5"></div>
            <div className="scrollbar-container relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow overflow-y-auto">
               <div className="space-y-1">
                  <button
                     type="button"
                     className="w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]"
                  >
                     <div className="flex items-center">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className="w-4.5 h-4.5 shrink-0"
                        >
                           <path
                              d="M2 5.5L3.21429 7L7.5 3"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M2 12.5L3.21429 14L7.5 10"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M2 19.5L3.21429 21L7.5 17"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M22 19L12 19"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M22 12L12 12"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              d="M22 5L12 5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                        </svg>
                        <div className="ltr:ml-3 rtl:mr-3">Inbox</div>
                     </div>
                     <div className="bg-primary-light dark:bg-[#060818] rounded-md py-0.5 px-2 font-semibold whitespace-nowrap">
                        24
                     </div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 false"
                  >
                     <div className="flex items-center">
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className="w-5 h-5 shrink-0"
                        >
                           <path
                              d="M20.9751 12.1852L20.2361 12.0574L20.9751 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93776 20.4771L6.19055 20.5417H6.19055L6.93776 20.4771ZM6.1256 11.0844L6.87281 11.0198L6.1256 11.0844ZM13.9949 5.22142L14.7351 5.34269V5.34269L13.9949 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69813 9.67749L6.20854 9.10933H6.20854L6.69813 9.67749ZM8.13687 8.43769L8.62646 9.00585H8.62646L8.13687 8.43769ZM10.518 4.78374L9.79207 4.59542L10.518 4.78374ZM10.9938 2.94989L11.7197 3.13821L11.7197 3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.0419 1.39687L13.0419 1.39687L12.8126 2.11093ZM9.86194 6.46262L10.5235 6.81599V6.81599L9.86194 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675L11.3486 1.45675L11.6742 2.13239ZM20.2361 12.0574L19.5306 16.1371L21.0086 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59634V22.75H13.245V21.25ZM7.68497 20.4125L6.87281 11.0198L5.37839 11.149L6.19055 20.5417L7.68497 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0086 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18772 10.2456L8.62646 9.00585L7.64728 7.86954L6.20854 9.10933L7.18772 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79207 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.0419 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79207 4.59542C9.65572 5.12107 9.45698 5.62893 9.20041 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6306 3.05921C14.4252 2.26719 13.819 1.64648 13.0419 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7547 3.0032 11.8522 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3872 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM14.7351 5.34269C14.8596 4.58256 14.824 3.80477 14.6306 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59634 21.25C8.12243 21.25 7.726 20.887 7.68497 20.4125L6.19055 20.5417C6.29851 21.7902 7.34269 22.75 8.59634 22.75V21.25ZM8.62646 9.00585C9.30632 8.42 10.0391 7.72267 10.5235 6.81599L9.20041 6.10924C8.85403 6.75767 8.30249 7.30493 7.64728 7.86954L8.62646 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87281 11.0198C6.84739 10.7258 6.96474 10.4378 7.18772 10.2456L6.20854 9.10933C5.62021 9.61631 5.31148 10.3753 5.37839 11.149L6.87281 11.0198Z"
                              fill="currentColor"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M3.9716 21.4709L3.22439 21.5355L3.9716 21.4709ZM3 10.2344L3.74721 10.1698C3.71261 9.76962 3.36893 9.46776 2.96767 9.48507C2.5664 9.50239 2.25 9.83274 2.25 10.2344L3 10.2344ZM4.71881 21.4063L3.74721 10.1698L2.25279 10.299L3.22439 21.5355L4.71881 21.4063ZM3.75 21.5129V10.2344H2.25V21.5129H3.75ZM3.22439 21.5355C3.2112 21.383 3.33146 21.2502 3.48671 21.2502V22.7502C4.21268 22.7502 4.78122 22.1281 4.71881 21.4063L3.22439 21.5355ZM3.48671 21.2502C3.63292 21.2502 3.75 21.3686 3.75 21.5129H2.25C2.25 22.1954 2.80289 22.7502 3.48671 22.7502V21.2502Z"
                              fill="currentColor"
                           ></path>
                        </svg>
                        <div className="ltr:ml-3 rtl:mr-3">Done</div>
                     </div>
                     <div className="bg-primary-light dark:bg-[#060818] rounded-md py-0.5 px-2 font-semibold whitespace-nowrap">
                        2
                     </div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 false"
                  >
                     <div className="flex items-center">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className="shrink-0"
                        >
                           <path
                              d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                           ></path>
                        </svg>
                        <div className="ltr:ml-3 rtl:mr-3">Important</div>
                     </div>
                     <div className="bg-primary-light dark:bg-[#060818] rounded-md py-0.5 px-2 font-semibold whitespace-nowrap">
                        3
                     </div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 false"
                  >
                     <div className="flex items-center">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           className="shrink-0"
                        >
                           <path
                              d="M20.5001 6H3.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M9.5 11L10 16"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M14.5 11L14 16"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                           ></path>
                           <path
                              opacity="0.5"
                              d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                           ></path>
                        </svg>
                        <div className="ltr:ml-3 rtl:mr-3">Trash</div>
                     </div>
                  </button>
                  <div className="h-px w-full border-b border-white-light dark:border-[#1b2e4b]"></div>
                  <div className="text-white-dark px-1 py-3">Tags</div>
                  <button
                     type="button"
                     className="w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-success ltr:hover:pl-3 rtl:hover:pr-3 duration-300 false"
                  >
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-success shrink-0"
                     >
                        <path
                           d="M8.01731 8.01736C11.3506 4.68402 13.0173 3.01736 15.0884 3.01736C17.1594 3.01736 18.8261 4.68402 22.1594 8.01736C25.4927 11.3507 27.1595 13.0174 27.1594 15.0884C27.1594 17.1595 25.4928 18.8262 22.1594 22.1595C18.8261 25.4928 17.1594 27.1595 15.0884 27.1594C13.0173 27.1595 11.3506 25.4928 8.01731 22.1595C4.68397 18.8262 3.01731 17.1595 3.01734 15.0884C3.01729 13.0174 4.68401 11.3507 8.01731 8.01736Z"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                     </svg>
                     <div className="ltr:ml-3 rtl:mr-3">Team</div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-warning ltr:hover:pl-3 rtl:hover:pr-3 duration-300 false"
                  >
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-warning shrink-0"
                     >
                        <path
                           d="M8.01731 8.01736C11.3506 4.68402 13.0173 3.01736 15.0884 3.01736C17.1594 3.01736 18.8261 4.68402 22.1594 8.01736C25.4927 11.3507 27.1595 13.0174 27.1594 15.0884C27.1594 17.1595 25.4928 18.8262 22.1594 22.1595C18.8261 25.4928 17.1594 27.1595 15.0884 27.1594C13.0173 27.1595 11.3506 25.4928 8.01731 22.1595C4.68397 18.8262 3.01731 17.1595 3.01734 15.0884C3.01729 13.0174 4.68401 11.3507 8.01731 8.01736Z"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                     </svg>
                     <div className="ltr:ml-3 rtl:mr-3">Low</div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-primary ltr:hover:pl-3 rtl:hover:pr-3 duration-300 false"
                  >
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-primary shrink-0"
                     >
                        <path
                           d="M8.01731 8.01736C11.3506 4.68402 13.0173 3.01736 15.0884 3.01736C17.1594 3.01736 18.8261 4.68402 22.1594 8.01736C25.4927 11.3507 27.1595 13.0174 27.1594 15.0884C27.1594 17.1595 25.4928 18.8262 22.1594 22.1595C18.8261 25.4928 17.1594 27.1595 15.0884 27.1594C13.0173 27.1595 11.3506 25.4928 8.01731 22.1595C4.68397 18.8262 3.01731 17.1595 3.01734 15.0884C3.01729 13.0174 4.68401 11.3507 8.01731 8.01736Z"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                     </svg>
                     <div className="ltr:ml-3 rtl:mr-3">Medium</div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-danger ltr:hover:pl-3 rtl:hover:pr-3 duration-300 false"
                  >
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-danger shrink-0"
                     >
                        <path
                           d="M8.01731 8.01736C11.3506 4.68402 13.0173 3.01736 15.0884 3.01736C17.1594 3.01736 18.8261 4.68402 22.1594 8.01736C25.4927 11.3507 27.1595 13.0174 27.1594 15.0884C27.1594 17.1595 25.4928 18.8262 22.1594 22.1595C18.8261 25.4928 17.1594 27.1595 15.0884 27.1594C13.0173 27.1595 11.3506 25.4928 8.01731 22.1595C4.68397 18.8262 3.01731 17.1595 3.01734 15.0884C3.01729 13.0174 4.68401 11.3507 8.01731 8.01736Z"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                     </svg>
                     <div className="ltr:ml-3 rtl:mr-3">High</div>
                  </button>
                  <button
                     type="button"
                     className="w-full flex items-center h-10 p-1 hover:bg-white-dark/10 rounded-md dark:hover:bg-[#181F32] font-medium text-info ltr:hover:pl-3 rtl:hover:pr-3 duration-300 false"
                  >
                     <svg
                        width="15"
                        height="15"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-info shrink-0"
                     >
                        <path
                           d="M8.01731 8.01736C11.3506 4.68402 13.0173 3.01736 15.0884 3.01736C17.1594 3.01736 18.8261 4.68402 22.1594 8.01736C25.4927 11.3507 27.1595 13.0174 27.1594 15.0884C27.1594 17.1595 25.4928 18.8262 22.1594 22.1595C18.8261 25.4928 17.1594 27.1595 15.0884 27.1594C13.0173 27.1595 11.3506 25.4928 8.01731 22.1595C4.68397 18.8262 3.01731 17.1595 3.01734 15.0884C3.01729 13.0174 4.68401 11.3507 8.01731 8.01736Z"
                           stroke="currentColor"
                           stroke-width="1.5"
                        ></path>
                     </svg>
                     <div className="ltr:ml-3 rtl:mr-3">Update</div>
                  </button>
               </div>
               <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                  <div
                     className="ps__thumb-x"
                     tabindex="0"
                     style={{left: "0px", width: "0px"}}
                  ></div>
               </div>
               <div className="ps__rail-y" style={{left: "0px", right: "0px"}}>
                  <div
                     className="ps__thumb-y"
                     tabindex="0"
                     style={{left: "0px", height: "0px"}}
                  ></div>
               </div>
            </div>
            <div className="ltr:left-0 rtl:right-0 absolute bottom-0 p-4 w-full">
               <button className="btn btn-primary w-full" type="button">
                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="1.5"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     className="ltr:mr-2 rtl:ml-2 shrink-0"
                  >
                     <line x1="12" y1="5" x2="12" y2="19"></line>
                     <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add New Task
               </button>
            </div>
         </div>
      </div>
   );
}

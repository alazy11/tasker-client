"use client";


export default function Notification({message,title}) {
   return (
      <div>
         <div className="ltr:left-6 rtl:right-6 fixed bottom-3 z-notification animation-notification">
            <div className="flex flex-col items-end relative z-10">
               <div className="relative bg-white min-w-80 rounded border-normal mb-3 py-4 px-6 cu-toast-new__item">
                  <div className="flex items-center justify-center cu-toast-new__close absolute h-6 w-6 ltr:right-3 rtl:left-3 top-3 cursor-pointer rounded">
                  <svg className="block" width={'100%'} height={"100%"} viewBox="0 0 10 10"><path fillRule="evenodd" d="M.293.293a1 1 0 0 1 1.414 0L5 3.586 8.293.293a1 1 0 0 1 1.414 1.414L6.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414L5 6.414 1.707 9.707A1 1 0 0 1 .293 8.293L3.586 5 .293 1.707a1 1 0 0 1 0-1.414z" clipRule="evenodd"></path></svg>
                  </div>

                  {/* <div>
                     <div className="text-sm leading-4 cu-view-changed-toast__text-title p-1.5">
                     This view has unsaved changes
                     </div>

                     <div className="text-xs font-normal leading-5 cu-view-changed-toast__text-body">
                        <div className="text-xs font-normal leading-5 cu-view-changed-toast__text-body"> To save, press <strong>Ctrl + Enter</strong> or click the <strong>Save</strong> button. </div> Saving updates the view for everyone.
                     </div>

                     <div className="cu-view-changed-toast__btn-container">
                        <button className="cu-view-changed-toast__btn cu-view-changed-toast__btn_grey">
                           Revert
                        </button>

                        <button className="cu-view-changed-toast__btn ltr:mr-4 rtl:ml-4 relative">
                        Autosave view

                        <div className="cu-view-changed-toast__btn-tooltip ">
                           <div className="cu-view-changed-toast__btn-tooltip-text">
                           When enabled, we'll always save changes you make to this view without asking you each time. 
                           </div>
                        </div>

                        </button>

                        <button className="cu-view-changed-toast__btn cu-view-changed-toast__btn-save">
                           Save
                           <div className="flex items-center ms-2">
                              <div className="cu-view-changed-toast__keyboard-key-tag-control-txt">
                              Ctrl 
                              </div>
                              <div className="flex items-center justify-center cu-view-changed-toast__keyboard-key-tag-enter-icon">
                              <svg className="block" width={"100%"} height={"100%"} viewBox="0 0 24 24"><path fillRule="evenodd" d="M21 4a1 1 0 0 1 1 1v5a5 5 0 0 1-5 5H5.414l3.293 3.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.414 13H17a3 3 0 0 0 3-3V5a1 1 0 0 1 1-1Z" clipRule="evenodd"></path></svg>
                              </div>
                           </div>
                        </button>

                     </div>

                  </div> */}

                  <div>

                  <div className="text-sm leading-4 cu-view-changed-toast__text-title p-1.5">
                     {title}
                  </div>

                  <div className="text-xs font-normal leading-5 cu-view-changed-toast__text-body">
                        <div className="text-xs font-normal leading-5 cu-view-changed-toast__text-body">
                            {message} 
                           </div>
                  </div>
                  </div>

               </div>
            </div>

         </div>
      </div>
   )
}
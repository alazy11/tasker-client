

// .cu-toast-new__item {
   // position: relative;
   // background: #fff;
   // min-width: 320px;
   // max-width: 400px;
   // min-height: 80px;
   // border-left: 4px solid var(--theme-main-color);
   // box-shadow: 0 24px 38px #00000024, 0 11px 15px #0003;
   // border-radius: 4px;
   // margin-bottom: 12px;
   // padding: 16px 24px;

export default function SaveModel({children,progress}) {
   return (
      // min-w-80 max-w-96 min-h-20
      // <div className="fixed bg-slate-800 bottom-4 -left-12 save-animation text-white z-1000 h-14 min-w-28 ps-2 pe-2 rounded-md font-medium text-base flex items-center justify-center gap-2">
      //    <span>
      //       {children}
      //    </span>

      //       {
               
      //          progress ? 
      //          <span className="w-5 h-5">
      //          <svg
      //          class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      //          fill="none"
      //          viewBox="0 0 24 24"
      //       >
      //          <circle
      //             class="opacity-25"
      //             cx="12"
      //             cy="12"
      //             r="10"
      //             stroke="currentColor"
      //             stroke-width="4"
      //          ></circle>
      //          <path
      //             class="opacity-75"
      //             fill="currentColor"
      //             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      //          ></path>
      //       </svg>
      //       </span> : 
      //                <span className="w-5 h-5 rounded-full border-white border border-solid">
      //                <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      //                <path d="m3 12 6 6L21 6"></path>
      //              </svg>
      //              </span>
      //       }
      // </div>
      <div className="cu-dashboard__float-container_v3">
         <div>
            <div className="cu-view-saving-status__banner">
               <div className="cu-view-saving-status__loader ">

               {
               
                        progress ? 
                  <div className="cu-loader__circle">
                  </div> :

<svg className="w-5 h-5 block" viewBox="0 0 24 24" fill="none" >
   <path  fill="var(--cu-background-success)" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"></path>
   <path  fill="#fff" fillRule="evenodd" d="M17.207 9.707a1 1 0 0 0-1.414-1.414L10.5 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6Z" clipRule="evenodd"></path>
</svg>

}
               </div>

               <div className="cu-view-saving-status__text">
               {children}
               </div>

            </div>
         </div>
      </div>
   );
}




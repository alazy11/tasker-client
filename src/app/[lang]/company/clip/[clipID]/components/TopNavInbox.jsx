"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopNavInbox({setPage}) {


    return(
        <div>
        <div className='pe-4 ps-4 min-h-12 border-bottom-e8eaed flex'>
           <div className='flex items-center flex-grow'>
              <div className='flex self-stretch items-center justify-between w-full flex-1'>

              <div className='flex items-center'>
                 <Link href={`/en/company/clip`} _ngcontent-ng-c1750199349="" className="item-btn">
                 <div _nghost-ng-c4133689536="" className="cu3-icon">
                                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                            <path  fill="currentColor" fill-rule="evenodd" d="M12.001 4a63.27 63.27 0 0 0-3.514.122l-.058-.999.058.999a4.629 4.629 0 0 0-4.364 4.365A64.01 64.01 0 0 0 4 12c0 1.048.051 2.296.122 3.513a4.629 4.629 0 0 0 4.364 4.365A63.82 63.82 0 0 0 12 20c1.049 0 2.297-.051 3.515-.122a4.628 4.628 0 0 0 4.363-4.362A63.6 63.6 0 0 0 20.001 12c0-1.049-.05-2.298-.122-3.516a4.628 4.628 0 0 0-4.363-4.362A63.835 63.835 0 0 0 12 4Zm-3.63-1.875A65.755 65.755 0 0 1 12.002 2c1.105 0 2.397.054 3.63.125a6.628 6.628 0 0 1 6.245 6.243c.072 1.235.125 2.527.125 3.632s-.053 2.397-.125 3.632a6.628 6.628 0 0 1-6.245 6.243 65.695 65.695 0 0 1-3.63.125c-1.104 0-2.396-.053-3.63-.125a6.629 6.629 0 0 1-6.245-6.247A65.931 65.931 0 0 1 2 12c0-1.104.054-2.395.125-3.628a6.629 6.629 0 0 1 6.246-6.247ZM8 9.349c0-1.81 1.976-2.93 3.53-1.997l4.415 2.65c1.508.905 1.508 3.09 0 3.996l-4.416 2.65C9.976 17.58 8 16.462 8 14.65v-5.3Zm2.5-.282a.33.33 0 0 0-.5.282v5.301c0 .257.28.415.5.283l4.415-2.65a.33.33 0 0 0 0-.566L10.5 9.067Z" clip-rule="evenodd"></path>
                                             </svg>
                                            </div>

                                            Clips
                 </Link>

                 <div className="divider">/</div>

                 <div _ngcontent-ng-c1750199349="">
                 screen-recording-2024-07-13-07:07
                 </div>

                 </div>




<div className="flex items-center sm:hidden">
                    <div>
                  <button className="btn-normal clip-new-btn">

                  <div _nghost-ng-c4133689536="">
                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                            <path fill-rule="evenodd" d="M11.843 3.743a5.95 5.95 0 1 1 8.414 8.414l-2.55 2.55a1 1 0 0 1-1.414-1.414l2.55-2.55a3.95 3.95 0 1 0-5.586-5.586l-2.55 2.55a1 1 0 1 1-1.414-1.414l2.55-2.55Zm2.45 4.55a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6Zm-6.586 1a1 1 0 0 1 0 1.414l-2.55 2.55a3.95 3.95 0 0 0 5.586 5.586l2.55-2.55a1 1 0 1 1 1.414 1.414l-2.55 2.55a5.95 5.95 0 1 1-8.414-8.414l2.55-2.55a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"></path>
                            </svg>
                            </div>

                  Copy link
                  </button>
                 </div>

<div className="clip-header__divider"></div>

</div>


              </div>
              <div>
  
              </div>
           </div>

        </div>

     </div>
     );
  
}
"use client";

import { useState } from "react";


export default function TopNavInbox({setPage}) {

    const[active, setActive] = useState('project')

    return(
        <div>
        <div className='pe-4 ps-4 min-h-12 border-bottom-e8eaed flex'>
           <div className='flex items-center flex-grow'>
              <ul className='flex self-stretch items-center'>


              <li className='flex items-center'>
                    <div className='relative w-full h-8 rounded-md ps-1.5 pe-1.5 flex top-item items-center gap-1'>
                       <span className='w-4 h-4 text-656f7d'>
  <svg  width="100%" height="100%" className="block" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M5.703 5.596A2.83 2.83 0 0 1 8.161 4.17h7.678a2.83 2.83 0 0 1 2.457 1.426l3.425 5.992a.83.83 0 0 1 .109.412v5A2.83 2.83 0 0 1 19 19.83H5A2.83 2.83 0 0 1 2.17 17v-5a.83.83 0 0 1 .11-.412l3.423-5.992Zm2.458.234c-.42 0-.808.225-1.016.59L4.43 11.17H8a.83.83 0 0 1 .587.243l1.757 1.757h3.312l1.757-1.757A.83.83 0 0 1 16 11.17h3.57l-2.715-4.75a1.17 1.17 0 0 0-1.016-.59H8.161Zm12.009 7h-3.826l-1.757 1.757a.83.83 0 0 1-.587.243h-4a.83.83 0 0 1-.587-.243L7.656 12.83H3.83V17c0 .646.524 1.17 1.17 1.17h14A1.17 1.17 0 0 0 20.17 17v-4.17Z" clip-rule="evenodd"></path>
  </svg>
                       </span>
                       <span className='text-ellipsis cursor-default whitespace-nowrap text-sm font-medium text-656f7d'>
                          Inbox
                       </span>
                    </div>
                 </li>


                <div className="m ms-4 me-2.5 h-4 nav-menu-item-active" style={{width:'1px'}}>

                </div>

                <li>
                    <ul className='flex items-center  gap-2 px-2'>
                    <li className='flex items-center' onClick={(e)=>{
                    setPage('project')
                    setActive('project')
                }}>
                    <button aria-label="button" className={`relative border-0 w-full h-8 rounded-md ps-1.5 pe-1.5 flex top-item items-center gap-1 hover:bg-gray-100 ${active == 'project' ? 'active' : ''}`} >

                       <span className='text-ellipsis whitespace-nowrap text-sm font-medium text-656f7d'>
                          Projects
                       </span>
                    </button>
                 </li>
  
                 <li className='flex items-center' onClick={(e)=>{
                    setPage('task')
                    setActive('task')
                }}>
                    <button className={`relative w-full border-0 h-8 rounded-md ps-1.5 pe-1.5 flex top-item items-center gap-1 hover:bg-gray-100 ${active == 'task' ? 'active' : ''}`} >
                       <span className='text-ellipsis whitespace-nowrap text-sm font-medium text-656f7d'>
                          Tasks
                       </span>

                       {/* <div className="h-full flex items-center">
                       <span className="h-5 w-5 rounded-full flex items-center justify-center not-span">
                        <span>
                        12
                        </span>
                       </span>
                       </div> */}

                       <div className="inline-flex">
                        <div className="px-1.5 text-xs font-semibold text-white not-span">
                            13
                        </div>
                       </div>

                    </button>
                 </li>

                 <li className='flex items-center'>
                    <a href="#" className='relative h-8 w-full rounded-md ps-1.5 pe-1.5 flex top-item items-center gap-1 hover:bg-gray-100'>
                       <span className='text-ellipsis whitespace-nowrap text-sm font-medium text-656f7d'>
                          Events
                       </span>
                    </a>
                 </li>

                    </ul>
                </li>
  
              </ul>
              <div>
  
              </div>
           </div>


           {/* <div className='flex items-center' >
              <ul className='flex self-stretch gap-1'>
  
                 <li className='flex items-center'>
                    <button className='relative bg-transparent border-0 h-7 w-full rounded-md ps-1.5 pe-1.5 flex items-center gap-1 hover:bg-gray-100 '>
                       <span className='w-4 h-4 text-656f7d'>
                       <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
  <path d="m21 21-4.35-4.35"></path>
  </svg>
                       </span>
                       <span className='text-ellipsis whitespace-nowrap text-sm font-medium text-656f7d'>
                          Search
                       </span>
                    </button>
                 </li>
  
                 <li className='flex items-center'>
                    <button className='relative backgroung-f2f1fe border-0 h-7 w-full rounded-md ps-1.5 pe-1.5 flex items-center gap-1 hover:bg-gray-100'>
                       <span className='w-4 h-4 color-544dc9'>
                       <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 19H9"></path>
  <path d="M7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
  <path d="M3 19h2"></path>
  <path d="M21 12h-2"></path>
  <path d="M17 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
  <path d="M3 12h12"></path>
  <path d="M21 5H11"></path>
  <path d="M9 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
  <path d="M3 5h4"></path>
  </svg>
                       </span>
                       <span className='text-ellipsis whitespace-nowrap text-sm font-medium color-544dc9'>
                          Hide
                       </span>
                    </button>
                 </li>
  
                 <li className='flex items-center'>
                    <button className='relative bg-transparent border-0 h-7 w-full rounded-md ps-1.5 pe-1.5 flex items-center gap-1 hover:bg-gray-100'>
                       <span className='w-4 h-4 text-656f7d'>
                       <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.296 9.015a3 3 0 1 0-.59 5.97 3 3 0 0 0 .59-5.97v0ZM19.518 12a7.238 7.238 0 0 1-.072.975l2.12 1.662a.507.507 0 0 1 .114.644l-2.005 3.469a.507.507 0 0 1-.615.215l-2.105-.847a.753.753 0 0 0-.711.082 7.703 7.703 0 0 1-1.01.588.747.747 0 0 0-.413.569l-.316 2.244a.519.519 0 0 1-.5.43h-4.01a.52.52 0 0 1-.501-.415l-.315-2.242a.753.753 0 0 0-.422-.573 7.278 7.278 0 0 1-1.006-.59.75.75 0 0 0-.708-.08l-2.105.848a.507.507 0 0 1-.616-.215L2.32 15.295a.506.506 0 0 1 .114-.644l1.792-1.406a.752.752 0 0 0 .28-.66 6.392 6.392 0 0 1 0-1.165.75.75 0 0 0-.284-.654L2.431 9.36a.507.507 0 0 1-.111-.641L4.325 5.25a.507.507 0 0 1 .616-.215l2.105.847a.755.755 0 0 0 .71-.082 7.71 7.71 0 0 1 1.01-.587.747.747 0 0 0 .414-.57L9.495 2.4a.52.52 0 0 1 .5-.43h4.01a.52.52 0 0 1 .502.416l.315 2.241a.753.753 0 0 0 .421.573c.351.17.687.366 1.006.59a.75.75 0 0 0 .709.08l2.104-.848a.507.507 0 0 1 .616.215l2.005 3.469a.506.506 0 0 1-.115.644l-1.791 1.406a.752.752 0 0 0-.284.66c.016.195.026.39.026.585Z"></path>
  </svg>
                       </span>
                       <span className='text-ellipsis whitespace-nowrap text-sm font-medium text-656f7d'>
                          Settings
                       </span>
                    </button>
                 </li>
  
                 <li className='flex items-center'>
                    <div className='seperate'></div>
                 </li>
  
                 <li className='flex items-center'>
                    <button className='flex items-center h-6 ps-2 pe-2 rounded text-xs button-background text-white font-medium gap-1' onClick={(e)=>{
                       setModel(true);
                    }}>
                       Add Space
                       <span className='w-4 h-4 text-white'>
                       <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 5.25v13.5"></path>
  <path d="M18.75 12H5.25"></path>
  </svg>
                       </span>
                    </button>
  
                 </li>
  
              </ul>
           </div> */}


        </div>

     </div>
     );
  
}
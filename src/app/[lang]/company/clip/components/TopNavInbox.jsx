"use client";

import { useState } from "react";


export default function TopNavInbox({setPage}) {

    const[active, setActive] = useState('project')

    return(
        <div>
        <div className='pe-4 ps-4 min-h-12 border-bottom-e8eaed flex'>
           <div className='flex items-center flex-grow'>
              <ul className='flex self-stretch items-center justify-between w-full flex-1'>


              <li className='flex items-center'>
                    <div className='relative w-full h-8 rounded-md ps-1.5 pe-1.5 flex top-item items-center gap-1'>
                       <span className='w-4 h-4 text-656f7d'>
  <svg  width="100%" height="100%" className="block" viewBox="0 0 24 24" fill="currentColor">
   <path  fill-rule="evenodd" d="M5.55 5.163a3.264 3.264 0 0 0-1.023.364c-.29.171-.829.71-1 1a3.175 3.175 0 0 0-.366 1.057c-.053.373-.053 9.059 0 9.432.093.639.341 1.124.82 1.603.486.486.983.737 1.628.821.385.05 8.997.05 9.382 0 .38-.055.747-.179 1.082-.367.29-.171.829-.71 1-1 .303-.516.405-1.002.406-1.942l.001-.609 1.53.761c1.719.855 1.822.89 2.355.802a1.67 1.67 0 0 0 .977-.502c.269-.271.429-.57.495-.925.059-.321.059-6.395 0-6.716a1.719 1.719 0 0 0-.495-.925 1.69 1.69 0 0 0-.972-.504c-.527-.09-.64-.051-2.36.804l-1.53.761-.001-.609c-.001-.94-.103-1.426-.406-1.942-.171-.29-.71-.829-1-1a3.175 3.175 0 0 0-1.057-.366c-.339-.048-9.131-.047-9.466.002Zm9.46 1.797c.27.101.527.358.631.633.077.202.079.324.079 4.707s-.002 4.505-.079 4.707a1.153 1.153 0 0 1-.631.633c-.208.078-.318.08-4.71.08s-4.502-.002-4.71-.08a1.153 1.153 0 0 1-.631-.633c-.077-.202-.079-.324-.079-4.706 0-4.393.002-4.503.08-4.711a1.17 1.17 0 0 1 .623-.629c.19-.075.351-.077 4.705-.079 4.406-.002 4.514 0 4.722.078Zm6.11 5.34c0 1.683-.009 3.06-.02 3.06-.011 0-.83-.405-1.82-.9l-1.8-.9v-2.52l1.79-.898c.603-.307 1.21-.607 1.82-.9.017-.001.03 1.375.03 3.058Z" clip-rule="evenodd"></path>
  </svg>

                       </span>
                       <span className='text-ellipsis cursor-default whitespace-nowrap text-sm font-medium text-656f7d'>
                          Clip
                       </span>
                    </div>
                 </li>

                 <li>
                  <button className="btn-normal clip-new-btn">
                  New Clip
                  </button>

                 </li>

              </ul>
              <div>
  
              </div>
           </div>

        </div>

     </div>
     );
  
}
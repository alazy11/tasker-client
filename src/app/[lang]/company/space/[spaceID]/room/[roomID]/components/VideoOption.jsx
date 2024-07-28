"use client";
import socket from "@/app/MainSocket";
import { useState } from "react";

export default function VideoOption({user,roomId}) {

  const[active,setActive] = useState(true);

    return (
        <div className="absolute z-50 video-option flex items-center gap-2 top-4 ltr:left-auto ltr:right-4 rtl:left-4 rtl:right-auto">

<div className=" w-10 h-10 rounded-full video-control_item video-control_item-no-shadow flex items-center justify-center text-white cursor-pointer" onClick={(e)=>{
socket.emit('firedUser',roomId,user.room_ID);
                }}>

                <svg  width={"1.3rem"} height={"1.3rem"} className="block relative z-10"  viewBox="0 0 24 24" fill="currentColor">
                  <path  fill-rule="evenodd" d="M3.044 7.555A10 10 0 0 1 12.004 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-8.96-5.555 1 1 0 1 1 1.791-.89 8 8 0 1 0 0-7.11 1 1 0 0 1-1.79-.89Zm7.189-.264a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l2.293-2.293H2.94a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path>
                </svg>

                </div>


                <div className={` w-10 h-10 rounded-full ${active ? "video-control_item" : "video-control_item-no-voice" } video-control_item-no-shadow flex items-center justify-center text-white cursor-pointer`} onClick={(e)=>{

setActive(!active)
socket.emit('stopUser',roomId,user.room_ID,!active)

                }}>

{
  active ? 
  <svg width={"1.2rem"} height={"1.2rem"} className="block relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <path d="M12 19v4" />
  <path d="M8 23h8" />
</svg> :

<svg width={"1.2rem"} height={"1.2rem"} className="block relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 9.343v-5.34a3 3 0 0 0-5.94-.6" />
  <path d="M9 8.999v3a3 3 0 0 0 5.12 2.12" />
  <path d="M17 16.91a7.012 7.012 0 0 1-3.594 1.947 7.038 7.038 0 0 1-4.075-.384 6.992 6.992 0 0 1-3.163-2.584A6.932 6.932 0 0 1 5 11.988V9.999" />
  <path d="M19 9.999v1.989c0 .41-.037.819-.11 1.223" />
  <path d="M12 18.996v4" />
  <path d="M8 22.999h8" />
  <path d="m1 1 22 22" />
</svg>
  
}


                </div>

        </div>
    );

}
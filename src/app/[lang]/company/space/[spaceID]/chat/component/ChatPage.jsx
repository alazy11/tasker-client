"use client";
import { useState, useTransition } from "react";
import TopMiddleNav from "@/app/[lang]/user/space/[spaceID]/component/TopMiddleNav";

import Members from "./Members";


export default function ChatPage({ user, spaceID }) {
   const [ch, setch] = useState(false);

   return (
      <>
         <TopMiddleNav setEmployee={setch} spaceID={spaceID}>
            Add Member
         </TopMiddleNav>

         <div className="flex-1 w-full">
            <div className="w-full h-full flex">
               <Members />

               <div className="flex-1 h-full mr-2 ml-2 pt-2 pb-5 flex flex-col">

               <div className="border border-solid border-gray-200 rounded-md flex-1">
                  

               </div>

               <div className="h-12 w-full border border-solid border-gray-200 rounded-md">
                     
               </div>

               </div>

            </div>
         </div>
      </>
   );
}

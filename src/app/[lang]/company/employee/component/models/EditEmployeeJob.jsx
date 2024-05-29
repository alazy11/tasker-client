"use client";

import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import { useState } from "react";


export default function EditEmployeeJob({setModel}) {


   <ModelOverlay showModel={setModel}>
   <div
      className={`bg-white w-480px h-auto flex flex-col rounded-xl overflow-hidden relative z-2000`}
   >
      <div className="p-6">
         <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold leading-6 text-2a2e34">
               Create Space
            </h2>
            <button
               className="p-2 flex items-center justify-center bg-transparent rounded-md hover:bg-gray-100"
               style={{ width: "26.67px", height: "26.67px" }}
               onClick={(e) => {
                  setDescription('');
                  setTextIcon('M');
                  setIcon(null);
                  setTitle('');
                  setSelectColor('');
                  setActiveModel('1');
                  setModel(false);
               }}
            >
               <svg
                  width="26.67"
                  height="26.67"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="m5 5 14 14M5 19 19 5"></path>
               </svg>
            </button>
         </div>
         <p className="text-sm leading-6	font-normal text-656f7d w-95% overflow-hidden text-ellipsis">
            A Space represents teams, departments, or groups, each
            with its own Projects, workflows, and settings.
         </p>
      </div>
   </div>
</ModelOverlay>
}
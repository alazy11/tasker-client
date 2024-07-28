"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import { useEffect, useState } from "react";

import Show from "./Show";

import List from "./List";
import Create from "./Create";
import EditNote from "./Edit";




export default function NoteList({setNoteModel,user,lang,dic}) {



   const [notesModel, setNotesModel] = useState('list');
   const [note, setNote] = useState({});


   return(

      <DropDownModel setShowIcon={setNoteModel}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 top-14"
         >
            <div className="rounded-lg scratchpad-container">

            {
               notesModel === 'list' ? 
               <List setNotesModel={setNotesModel}
               setNote={setNote}
               />

 : 
            notesModel === "show" ?
<Show setNotesModel={setNotesModel}
note={note}
/>
:   notesModel === "create" ?
<Create setNotesModel={setNotesModel} />
:

<EditNote
setNotesModel={setNotesModel}
note={note}
/>
            }



            </div>

         </div>
      </div>
      </DropDownModel>

   );

}
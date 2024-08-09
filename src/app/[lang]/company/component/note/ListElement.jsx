"use client";
import parse  from "html-react-parser";

export default function ListElement({item,setNote,setNotesModel,deleteNote,refresh, setRefresh,setDeleteModel,setNoteId}) {


    return(
<>

        <div className="scratchpad-item" key={item.note_id}>
         <button className="scratchpad-item__content" onClick={(e)=>{
            setNotesModel("show")
            setNote(item)
         }}>
            <div className="text-sm font-medium scratchpad-item__title">
               <span className="whitespace-nowrap overflow-hidden text-ellipsis"> 
                  {item.title}
               </span>
            </div>
            <div className="text-xs font-normal scratchpad-item__body">
               {
                  parse(item.content)
               }
            </div>
         </button>

         <div className="scratchpad-item__right-menu">

         <button className="w-6 h-6 rounded flex items-center justify-center border-0 scratchpad-item__button" onClick={(e)=>{
            setNotesModel("edit")
            setNote(item)
         }}>
         <div className="w-4 h-4 flex items-center justify-center">
<svg width={'1rem'} height={'1rem'} className="block" viewBox="0 0 24 24" fill="currentColor">
   <path fillRule="evenodd" d="M16.503 4.413a1.41 1.41 0 0 1 1.994 0l1.092 1.092c.55.55.55 1.443 0 1.994L18.5 8.588l-3.086-3.086 1.089-1.089ZM14 6.916l3.086 3.086-9.54 9.54-3.43.343.343-3.429L14 6.916Zm5.911-3.917a3.41 3.41 0 0 0-4.822 0L3.045 15.042a2 2 0 0 0-.576 1.215l-.464 4.645a1 1 0 0 0 1.094 1.095l4.645-.465a2 2 0 0 0 1.215-.576L21.003 8.913a3.41 3.41 0 0 0 0-4.822L19.91 2.999Z" clipRule="evenodd"></path>
</svg>

            </div>
            </button>


         <button className="w-6 h-6 rounded flex items-center justify-center border-0 scratchpad-item__button" onClick={(e)=>{
            setNoteId(item.note_id)
            setDeleteModel(true);
         }}>
         <div className="w-4 h-4 flex items-center justify-center">
<svg width={'1rem'} height={'1rem'} className="block" viewBox="0 0 24 24" fill="currentColor">
   <path fillRule="evenodd" d="M10 4h4v1h-4V4ZM8 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a1 1 0 1 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 0 1 0-2h4Zm6 2H7v13h10V7h-3Zm-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z" clipRule="evenodd"></path>
</svg>

            </div>
            </button>

         </div>

      </div>

{
   
}


</>


    );

}
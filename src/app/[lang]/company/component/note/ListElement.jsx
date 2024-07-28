

export default function ListElement({item,setNote,setNotesModel,deleteNote,refresh, setRefresh}) {


    return(

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
                  item.content
               }
            </div>
         </button>

         <div className="scratchpad-item__right-menu">

         <button className="w-6 h-6 rounded flex items-center justify-center text-2a2e34 border-0 scratchpad-item__button" onClick={(e)=>{
            setNotesModel("edit")
            setNote(item)
         }}>
         <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
         <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 5.25 18.75 1.5l-15 15-1.5 5.25 5.25-1.5 15-15Zm-6.75-.75 3.75 3.75-3.75-3.75Zm-12 12 3.75 3.75-3.75-3.75Z" />
</svg>
            </div>
            </button>


         <button className="w-6 h-6 rounded flex items-center justify-center text-2a2e34 border-0 scratchpad-item__button" onClick={(e)=>{
            deleteNote(item.note_id,refresh, setRefresh);
         }}>
         <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
         <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
<path d="M14 11v6" />
<path d="M10 11v6" />
</svg>
            </div>
            </button>

         </div>

      </div>

    );

}
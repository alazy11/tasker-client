"use client";

import 'react-quill/dist/quill.snow.css';
import parse  from "html-react-parser";



export default function Show({setNotesModel,note,setNoteModel}) {
    return (
<>

<div className={`scratchpad-navigation`} >
               
<div>
                  <button className="w-7 h-7 rounded-md flex items-center justify-center text-2a2e34 border-0 btn-search-note" onClick={(e)=>{
                    setNotesModel("list")
                  }}>
                  <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
<svg  width={'1rem'} height={'1rem'} className="block" viewBox="0 0 24 24" fill="currentColor" >
    <path  fill-rule="evenodd" d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z" clip-rule="evenodd" ></path>
    </svg>

                        </div>
                     </button>
                  </div>

               <div className={`scratchpad-navigation__editor-title cursor-default`} >
               {note.title}
               </div>


                  <div>
                  <div>
                  <button className="w-7 h-7 rounded-md flex items-center justify-center text-2a2e34 border-0 btn-search-note">
                  <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                  <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
  <path d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
  <path d="M5 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
</svg>
                        </div>
                     </button>
                  </div>
               </div>

               <button className="w-7 h-7 rounded-md items-center justify-center flex text-2a2e34 border-0 btn-search-note" onClick={()=>{
                  setNoteModel(false)
               }}>
                     <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                     <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 20 20 4" />
  <path d="M20 20 4 4" />
</svg>
                        </div>
                     </button>
                  
            

               

            </div>

        <div className="grow overflow-hidden scratchpad">

        <div class="quill h-full border-0 overflow-hidden">
                                      <div class="ql-container ql-snow overflow-auto">
                                         <div class="ql-editor" data-gramm="false" data-placeholder="write description.....">
                                            {
                                               parse(note.content)
                                            }
                                         </div>
                                         <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
                                         <div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a class="ql-action"></a><a class="ql-remove"></a></div></div>
                                   </div>
        
                 </div>
</>


    );
}
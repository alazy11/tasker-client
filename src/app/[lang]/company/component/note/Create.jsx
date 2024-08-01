

"use client";
import TextEditor from "@/app/[lang]/component/TextEditor";
import { useEffect, useState } from "react";
import handleDateFormat from "@/_util/handleDateFormat";

function createNote(desc,title,setNotesModel,setDesc,setLoader) {
   setLoader(true)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/note`, {
       method:'POST',
       credentials: "include",
       headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
       },
       body:JSON.stringify({
          desc,
          date:handleDateFormat(),
          title
       })
    })
       .then((res) => {
          return res.json();
       })
       .then((data) => {
          if (data.status === "fail" || data.status === "error") {
             // setErrorMessage(true);
             // setErrorText(data?.message);
             console.log("data space faild....", data);
             setLoader(false)
          } else {
             // setErrorMessage(false);
             console.log("data project dd....", data.data);
             setNotesModel("list")
             setDesc('');
             setLoader(false);
             // setNotification(true);
             // setTimeout(() => {
             //    setModel(false);
             //    // setReferesh(!referesh)
             // }, 1500);
             // setSpace(data.data);
          }
       })
       .catch((error) => {
          console.log(error);
          setLoader(false)
       });
 }

export default function Create({setNotesModel,setNoteModel}) {


    const [desc, setDesc] = useState('');
    const [title, setTitle] = useState('Write Title');
    const [loader, setLoader] = useState(false);

    return (

        <>
                    <div className={`scratchpad-navigation `} >
               
               <div className={`scratchpad-navigation__editor-title cursor-text`} contentEditable={true} onInput={(e)=>{
                  console.log(e.target.textContent)
                  setTitle(e.currentTarget.textContent)
               }}>
               Write Title
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

               <button className="w-7 h-7 rounded-md items-center justify-center flex text-2a2e34 border-0 btn-search-note" onClick={(e)=>{
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

                <div className="grow flex flex-col overflow-hidden scratchpad">
        <TextEditor desc={desc} setDesc={setDesc} />

        <div className="scratchpad-footer flex justify-between pe-3">

           <button className="btn-normal cancel" onClick={(e)=>{
              setNotesModel("list")
              setDesc('');
           }}>
              cancel
           </button>

           <button className="btn-normal save-note"onClick={(e)=>{
              createNote(desc,title,setNotesModel,setDesc,setLoader);
           }} >
             {loader ? 
             <>
               <svg
              class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
           >
              <circle
                 class="opacity-25"
                 cx="12"
                 cy="12"
                 r="10"
                 stroke="currentColor"
                 stroke-width="4"
              ></circle>
              <path
                 class="opacity-75"
                 fill="currentColor"
                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
           </svg>
           Processing...
             </> :
             "create"
            }
           </button>

        </div>

     </div>
        </>


    )
}
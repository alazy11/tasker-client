
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import notepad from '@/public/project-image/notepad.svg';
import ListElement from "./ListElement";
import Loading from "@/app/[lang]/component/Loading";
import DeleteModel from "@/app/[lang]/component/delete/DeleteModel";

function deleteNote(setModel,setLoader,note_id,refresh, setRefresh) {
   setLoader(true);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/note?note_id=${note_id}`, {
       method:'DELETE',
       credentials: "include",
       headers: {
          "cache-control": "no-cache",
       }
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
             setRefresh(!refresh)
             setModel(false)
          }
       })
       .catch((error) => {
          console.log(error);
          setLoader(false)
       });
 }





export default function List({setNotesModel,setNote,setNoteModel}) {


    // const [search, setSearch] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState(false);
    const [deleteModel, setDeleteModel] = useState(false);
    const [loader, setLoader] = useState(true);
    const [noteId, setNoteId] = useState([]);

    useEffect(()=>{

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/note`, {
           credentials: "include",
           headers: {
              "cache-control": "no-cache",
           }
        })
           .then((res) => {
              return res.json();
           })
           .then((data) => {
              if (data.status === "fail" || data.status === "error") {
                 // setErrorMessage(true);
                 // setErrorText(data?.message);
                 console.log("data space faild....", data);
                 // setLoader(false)
              } else {
                 // setErrorMessage(false);
                 console.log("data project dd....", data.data);
                 // setRefresh(!refresh)
                 setNotes(data.data)
                 setLoader(false);
              }
           })
           .catch((error) => {
              console.log(error);
              // setLoader(false)
           });
  
     },[refresh])
  

    return(
<>

<div className={`scratchpad-navigation ${search && 'scratchpad-navigation-search' }`} >
               
               <div className={`scratchpad-navigation__editor-title "cursor-default`} >
               Notepad
               </div>


               <div className="w-auto scratchpad-search">
                  <div className=" ltr:ml-2.5 rtl:mr-2.5 scratchpad-search-form">

                     <button className="w-7 h-7 rounded-md flex items-center justify-center text-2a2e34 border-0 btn-search-note" onClick={(e)=>{
                        setSearch(true);
                     }}>
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m21 21-2.243-2.247-2.243-2.247" />
  <path d="M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" />
</svg>
                        </div>
                     </button>

                     <input type="text" placeholder="search" className="bg-transparent text-2a2e34 scratchpad-search-form__input hidden" />

                     <button className="w-7 h-7 rounded-md items-center justify-center text-2a2e34 border-0 btn-search-note hidden scratchpad-search-close" onClick={(e)=>{
                        setSearch(false);
                     }}>
                     <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                     <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <svg  viewBox="0 0 24 24" fill="none" width={'1rem'} height={'1rem'} className="block">
                        <path  fill="currentColor" fill-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd" ></path>
                     </svg>
</svg>
                        </div>
                     </button>

                  </div>
               </div>

               {
                  !search && 
                  <>
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
                  </>
                  
               }

               

            </div>

        <div className="grow flex flex-col overflow-hidden">

        {
         loader ? <Loading styleClass={"w-full h-full flex items-center justify-center"} /> :
           notes.length <= 0 ? 

           <div className="grow p-2 overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center scroll-bar">
           <div>
              <Image src={notepad} alt="no notepad" />
           </div>

           <div className="scratchpad-empty__title">
           Create personal notes 
           </div>

           <p className="scratchpad-empty__description"> Capture your thoughts or ideas and access them anywhere in Tasker! </p>

           <button className="btn-normal scratchpad-empty__button" onClick={(e)=>{
              setNotesModel("create")
           }}>
           Create a note 
           </button>

        </div> :
        <>

<div className="grow p-2 overflow-y-auto overflow-x-hidden scroll-bar">
                  
                  {
                     notes?.map((item,index)=>{
          
                        return (		
                           // create_date	company_id	
                           <ListElement item={item} 
                           setNotesModel={setNotesModel}
                           setNote={setNote}
                           deleteNote={deleteNote}
                           refresh={refresh}
                           setRefresh={setRefresh}
                           setDeleteModel={setDeleteModel}
                           setNoteId={setNoteId}
                           />
                        );
          
                     })
                  }
          
               </div>


<button className="scratchpad-footer" onClick={(e)=>{
              setNotesModel("create")
           }}>
           <span className="scratchpad-footer__text-and-icon">
           <div className="w-4 h-4 flex items-center justify-center" style={{color:'#4f5762'}}>
              <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m-8-8h16" />
</svg>
                 </div>
           New note 
           </span>
        </button>
        
        </>

        }


     </div>
{
   deleteModel && <DeleteModel 
   deleteFunction={deleteNote}
   deleteFunctionParams={[noteId,refresh, setRefresh]}
   setModel={setDeleteModel}/>
}


</>



    );

}
"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";


export default function Theme({user,setThemeModel, dic, lang}) {

   return (
      <DropDownModel setShowIcon={setThemeModel}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 top-14 box-shadow-profile border-e8eaed rounded-md w-96 min-w-96 overflow-y-auto flex flex-col p-5 pt-4"
            style={{ minWidth:'440px',width:'440px',background:" var(--cu-background-main)"}}
         >
            <div className="w-full h-full flex flex-col">
               <div className="w-full flex flex-col">
                  <div className="w-full flex items-center justify-between">
                     <h1 className=" text-lg font-semibold ">Themes</h1>
                     <button className="border-0 w-8 h-8 flex items-center justify-center back-search-member rounded-md cursor-pointer">
                        <span className=" w-4 h-4 inline-flex items-center justify-center"
                        style={{color:" var(--cu-content-secondary)"}}
                        >
                        <svg width={'1rem'} height={"1rem"} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
</svg>
                        </span>
                     </button>
                  </div>
                  <p className="w-11/12 font-normal text-sm"
                  style={{color:" var(--cu-content-tertiary)"}}
                  >Customize your Workspace by changing the appearance and theme color.</p>
               </div>

               <div className=" mx-5 my-4">
                  <div className="grid grid-cols-2 p-0.5 rounded-md isolate relative"
                  style={{backgroundColor:" var(--cu-background-on-main)"}}
                  >

                     <div className="absolute top-0.5 bottom-0.5 right-0.5 left-0.5" 
                     >
                        <div className="selected-item-background"
                        ></div>
                     </div>

                     <button className="flex items-center relative justify-center gap-1 border-0 rounded text-sm font-medium py-1.5 px-2 color-700"   onClick={(e)=>{
                        document.body.classList.remove('dark-theme')
                     }}>
                        <span className="flex items-center justify-center w-4 h-4 text-inherit">
                        <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="m4.22 4.22 1.42 1.42" />
    <path d="m18.36 18.36 1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="m4.22 19.78 1.42-1.42" />
    <path d="m18.36 5.64 1.42-1.42" />
</svg>
                        </span>
                        Light
                     </button>
                     <button className="flex items-center relative justify-center gap-1 border-0 rounded text-sm font-medium py-1.5 px-2 color-500 "  onClick={(e)=>{
                        document.body.classList.add('dark-theme')
                     }}>
                     <span className="flex items-center justify-center w-4 h-4 text-inherit">
                     <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
</svg>
                        </span>
                        Dark
                     </button>
                  </div>
               </div>

            </div>
         </div>
      </div>
      </DropDownModel>
   )


}
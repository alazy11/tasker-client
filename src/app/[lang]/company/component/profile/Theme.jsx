"use client";
import DropDownModel from "@/app/[lang]/component/DropDownModel";
import { useState } from "react";


export default function Theme({user,setThemeModel, dic, lang}) {


   const [selectedTheme,setSelectedTheme] = useState('Purple')

   return (
      <DropDownModel setShowIcon={setThemeModel}>
      <div
         className="h-full m-auto relative"
         style={{ width: "100%", maxWidth: "100%" }}
      >
         <div
            className="absolute z-2700 ltr:right-3 rtl:left-3 top-14 box-shadow-profile bg-[var(--cu-background-main)] border-e8eaed rounded-md w-[440px] max-w-[96%] overflow-y-auto flex flex-col p-5 pt-4"
         >
            <div className="w-full h-full flex flex-col">
               <div className="w-full flex flex-col">
                  <div className="w-full flex items-center justify-between">
                     <h1 className=" text-lg font-semibold ">Themes</h1>
                     <button className="border-0 w-8 h-8 flex items-center justify-center back-search-member rounded-md cursor-pointer" onClick={()=>{
                        setThemeModel(false)
                     }}>
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

               <div className="mt-4 mb-5">
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

               <div className="theme-label">
                  Tasker theme 
               </div>

               <fieldset className="theme-section">

                  <div className={`theme-selection-button ${selectedTheme === "Purple" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-purple" : document.body.className = "cu-purple";
                     setSelectedTheme('Purple')
                  }}>

                     <input type="radio" name="theme" id="color-#7f77f1" className="cdk-visually-hidden" />
                     <div className="theme-color-square" 
                     style={{backgroundColor: "rgb(127, 119, 241)"}}
                     >
                        <div _nghost-ng-c4133689536="" className="theme-color-icon">
                        <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
                           <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
                        </svg>
                        </div>
                     </div>
                     
                     <label htmlFor="color-#7f77f1" className="theme-color-label">
                        Purple
                     </label>
               
                  </div>

                  <div className={`theme-selection-button ${selectedTheme === "Blue" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-azureBlue" : document.body.className = "cu-azureBlue";
                     setSelectedTheme('Blue')
                  }}>

                     <input type="radio" name="theme" id="color-#1090e0" className="cdk-visually-hidden" />
                     <div className="theme-color-square" 
                     style={{backgroundColor: "rgb(16, 144, 224)"}}
                     >
                        <div _nghost-ng-c4133689536="" className="theme-color-icon">
                        <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
                           <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
                        </svg>
                        </div>
                     </div>
               
                     <label htmlFor="color-#1090e0" className="theme-color-label">
                        Blue
                        </label>

                  </div>

                  <div className={`theme-selection-button ${selectedTheme === "Pink" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-pink" : document.body.className = "cu-pink";
                     setSelectedTheme('Pink')
                  }}>

                     <input type="radio" name="theme" id="color-#ee5e99" className="cdk-visually-hidden" />
                     <div className="theme-color-square" 
                     style={{backgroundColor: "rgb(238, 94, 153)"}}
                     >
                        <div _nghost-ng-c4133689536="" className="theme-color-icon">
                        <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
                           <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
                        </svg>
                        </div>
                     </div>
               
                     <label htmlFor="color-#ee5e99" className="theme-color-label">
                        Pink
                        </label>
                  </div>

                  <div className={`theme-selection-button ${selectedTheme === "Violet" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-violet" : document.body.className = "cu-violet";
                     setSelectedTheme('Violet')
                  }}>

<input type="radio" name="theme" id="color-#b660e0" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(182, 96, 224)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>

</div>

<label htmlFor="color-#b660e0" className="theme-color-label">
   Violet
   </label>

</div>

<div className={`theme-selection-button ${selectedTheme === "Indigo" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-neonBlue" : document.body.className = "cu-neonBlue";
                     setSelectedTheme('Indigo')
                  }}>

<input type="radio" name="theme" id="color-#6985ff" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(105, 133, 255)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>
</div>
<label htmlFor="color-#6985ff" className="theme-color-label">
   Indigo
   </label>
</div>

<div className={`theme-selection-button ${selectedTheme === "Orange" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-orange" : document.body.className = "cu-orange";
                     setSelectedTheme('Orange')
                  }}>

<input type="radio" name="theme" id="color-#e16b16" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(225, 107, 22)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>

</div>

<label htmlFor="color-#e16b16" className="theme-color-label">
   Orange
   </label>

</div>

<div className={`theme-selection-button ${selectedTheme === "Teal" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-teal" : document.body.className = "cu-teal";
                     setSelectedTheme('Teal')
                  }}>

<input type="radio" name="theme" id="color-#0f9d9f" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(15, 157, 159)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>
</div>

<label htmlFor="color-#0f9d9f" className="theme-color-label">
   Teal
   </label>

</div>

<div className={`theme-selection-button ${selectedTheme === "Bronze" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-brown" : document.body.className = "cu-brown";
                     setSelectedTheme('Bronze')
                  }}>

<input type="radio" name="theme" id="color-#aa8d80" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(170, 141, 128)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>

</div>

<label htmlFor="color-#aa8d80" className="theme-color-label">
   Bronze
   </label>

</div>

<div className={`theme-selection-button ${selectedTheme === "Black" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-black" : document.body.className = "cu-black";
                     setSelectedTheme('Black')
                  }}>

<input type="radio" name="theme" id="color-#595d66" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(89, 93, 102)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>

</div>

<label htmlFor="color-#595d66" className="theme-color-label">
   Black
   </label>

</div>

<div className={`theme-selection-button ${selectedTheme === "Mint" && 'selected'}`} onClick={()=>{
                     document.body.classList.contains("dark-theme") ? document.body.className = "dark-theme cu-mint" : document.body.className = "cu-mint";
                     setSelectedTheme('Mint')
                  }}>

<input type="radio" name="theme" id="color-#3db88b" className="cdk-visually-hidden" />
<div className="theme-color-square" 
style={{backgroundColor: "rgb(61, 184, 139)"}}
>
   <div _nghost-ng-c4133689536="" className="theme-color-icon">
   <svg  className="w-full h-full block" viewBox="0 0 24 24" fill="none">
      <path  fill="currentColor" fillRule="evenodd" d="M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z" clipRule="evenodd"></path>
   </svg>
   </div>
</div>

<label htmlFor="color-#3db88b" className="theme-color-label">
   Mint
   </label>

</div>

               </fieldset>

            </div>
         </div>
      </div>
      </DropDownModel>
   )


}
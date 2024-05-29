

export default function SuccessNotification({children,setNotification}) {

   return (
      <div className="fixed b bottom-12 ltr:-left-full rtl:right-4 z-1000 animation-notification" style={{width:'340px', zIndex:'1000000'}}>
      <div className="bg-white text-2a2e34 rounded border-left-seccuss mt-1 pt-5 pb-4 ps-5 pe-5 w-full flex justify-between box-shadow-notf ">
         <span className="break-words text-sm font-normal leading-5 block text-2a2e34 ">
            {children}
         </span>
         <div className="w-6 h-6 p-1 -mt-1 -mr-2.5 -mb-1 ml-0 cursor-pointer flex items-center justify-center" onClick={(e)=>{
               setNotification(false);
            }} >
            <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 <path d="M18 6 6 18" />
 <path d="m6 6 12 12" />
</svg>
            </div>
      </div>
   </div>
   );
}
'use client';

import DropDownModel from '@/app/[lang]/component/DropDownModel';

// PriorityModel

export default function PriorityModel({setPriorityModel, setPriority, priority}) {

   // const [priority, setpriority] = useState('normal');

   return (
      <DropDownModel setShowIcon={setPriorityModel}>
      <div className='h-full m-auto relative' style={{width:'480px', maxWidth:'100%' }}>
      {/* drop-menu-shadow  */}
      <div className="absolute z-2700 shadow-xl bg-white border-e8eaed rounded-lg min-w-44 pt-2 pb-2 overflow-y-auto flex flex-col" style={{ top:'36%'}}>
         <ul>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 ${priority === 'urgent' ? 'priority-active' : '' }`} onClick={(e)=>{
                  setPriority('urgent');
                  setPriorityModel(false)
               }}>
                  <span className='text-base color-urgent w-4 h-4 flex items-center justify-center'>
                  <svg width={"100%"} height={"100%"} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
</svg>
                  </span>
                  Urgent
                  <span className='text-base color-544dc9 ms-auto w-4 h-4 flex items-center justify-center check'>
                  <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4 12 6 6L20 6" />
</svg>
                  </span>
               </button>
            </li>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 ${priority === 'high' ? 'priority-active' : '' }`} onClick={(e)=>{
                  setPriority('high');
                  setPriorityModel(false)
               }}>
                  <span className='text-base color-high w-4 h-4 flex items-center justify-center'>
                  <svg width={"100%"} height={"100%"} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
</svg>
                  </span>
                  High
                  <span className='text-base color-544dc9 ms-auto w-4 h-4 flex items-center justify-center check'>
                  <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4 12 6 6L20 6" />
</svg>
                  </span>
               </button>
            </li>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 ${priority === 'normal' ? 'priority-active' : '' }`} onClick={(e)=>{
                  setPriority('normal');
                  setPriorityModel(false)
               }}>
                  <span className='text-base color-normal w-4 h-4 flex items-center justify-center'>
                  <svg width={"100%"} height={"100%"} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
</svg>
                  </span>
                  Normal
                  <span className='text-base color-544dc9 ms-auto w-4 h-4 flex items-center justify-center check'>
                  <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4 12 6 6L20 6" />
</svg>
                  </span>
               </button>
            </li>
            <li className='ps-2 pe-2'>
               <button className={`text-sm font-normal leading-5 flex items-center hover:back-gray200 gap-3 w-full p-2 border-none rounded-md text-2a2e34 ${priority === 'low' ? 'priority-active' : '' }`} onClick={(e)=>{
                  setPriority('low');
                  setPriorityModel(false)
               }}>
                  <span className='text-base color-low w-4 h-4 flex items-center justify-center'>
                  <svg width={"100%"} height={"100%"} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
</svg>
                  </span>
                  Low
                  <span className='text-base color-544dc9 ms-auto w-4 h-4 flex items-center justify-center check'>
                  <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4 12 6 6L20 6" />
</svg>
                  </span>
               </button>
            </li>
         </ul>
      </div>
      </div>
      </DropDownModel>
   );
}
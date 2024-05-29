
export default function SpaceID() {
   return (
      <div className='ps-4 pe-4 h-12 w-full'>
      <div className='flex items-center justify-between pt-2 pb-2'>
      <ul className='flex items-center gap-1 flex-1'>
         <li>
            <button className='flex items-center gap-0.5 pt-1 pb-1 pe-2 ps-2 rounded-xl border-e8eaed text-656f7d text-xs font-medium tag active hover:bg-gray-200'>
               <span className='w-4 h-4'>
                  <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1 0-1.748l9-5ZM5.06 8 12 11.856 18.94 8 12 4.144 5.06 8Z"></path>
<path d="M2.126 11.514a1 1 0 0 1 1.36-.388L12 15.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36Z"></path>
<path d="M2.126 15.514a1 1 0 0 1 1.36-.388L12 19.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36Z"></path>
</svg>
               </span>
All
            </button>
         </li>
         <li>
            <button className='flex items-center gap-0.5 pt-1 pb-1 pe-2 ps-2 rounded-xl border-e8eaed text-656f7d text-xs font-medium tag hover:bg-gray-200'>
               <span className='w-4 h-4'>
                                    <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-1.017 1.742c.011.084.017.17.017.258v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-.087.006-.174.017-.258A2 2 0 0 1 2 7V5Zm18 2V5H4v2h16ZM5 9v10h14V9H5Zm3 3a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Z"></path>
</svg>
               </span>
Archive
            </button>
         </li>
      </ul>

      <div className='flex items-center'>
         <div>
            <button>

            </button>
         </div>
         <div>
         <input type="text" className='text-sm w-52 h-8 rounded-md min-w-0 ps-3 pe-3 border-0 box-shadow-search outline-none' placeholder='Search Space By Name...' />
         </div>
      </div>
      </div>
   </div>
   
   );
}
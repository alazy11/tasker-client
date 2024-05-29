
import TopInlineNav from "../component/TopInlineNav";
import Orders from "./component/Orders";
import {getUser} from '@/_util/userHandler';


export default async function Page() {


   let user;
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }

   return(
      <div className='flex flex-col h-full'>
      <TopInlineNav>
      <div className="flex items-center px-3 text-gray-600">
      <div>
      <a href="#" className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal">
         Dashboard
         </span>
      </a>
   </div>
   <span className="text-sm leading-4 font-normal w-3 text-center">
      /
   </span>
   <div>
      <a href="#" className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal ">
         Dashboard
         </span>
      </a>
   </div>
   <span className="text-sm leading-4 font-normal w-3  text-center">
      /
   </span>
   <div>
      <a href="#" className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal">
         Dashboard
         </span>
      </a>
   </div>
      </div>
      <div className="ltr:mr-2 rtl:ml-2">
      <button className='relative bg-transparent border-0 h-7 rounded-md ps-1.5 pe-1.5 flex items-center gap-1 hover:bg-gray-100'>
                     <span className='w-4 h-4 text-656f7d'>
                     <svg width="100%" height="100%" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.296 9.015a3 3 0 1 0-.59 5.97 3 3 0 0 0 .59-5.97v0ZM19.518 12a7.238 7.238 0 0 1-.072.975l2.12 1.662a.507.507 0 0 1 .114.644l-2.005 3.469a.507.507 0 0 1-.615.215l-2.105-.847a.753.753 0 0 0-.711.082 7.703 7.703 0 0 1-1.01.588.747.747 0 0 0-.413.569l-.316 2.244a.519.519 0 0 1-.5.43h-4.01a.52.52 0 0 1-.501-.415l-.315-2.242a.753.753 0 0 0-.422-.573 7.278 7.278 0 0 1-1.006-.59.75.75 0 0 0-.708-.08l-2.105.848a.507.507 0 0 1-.616-.215L2.32 15.295a.506.506 0 0 1 .114-.644l1.792-1.406a.752.752 0 0 0 .28-.66 6.392 6.392 0 0 1 0-1.165.75.75 0 0 0-.284-.654L2.431 9.36a.507.507 0 0 1-.111-.641L4.325 5.25a.507.507 0 0 1 .616-.215l2.105.847a.755.755 0 0 0 .71-.082 7.71 7.71 0 0 1 1.01-.587.747.747 0 0 0 .414-.57L9.495 2.4a.52.52 0 0 1 .5-.43h4.01a.52.52 0 0 1 .502.416l.315 2.241a.753.753 0 0 0 .421.573c.351.17.687.366 1.006.59a.75.75 0 0 0 .709.08l2.104-.848a.507.507 0 0 1 .616.215l2.005 3.469a.506.506 0 0 1-.115.644l-1.791 1.406a.752.752 0 0 0-.284.66c.016.195.026.39.026.585Z"></path>
</svg>
                     </span>
                     <span className='text-ellipsis whitespace-nowrap text-sm font-medium text-656f7d'>
                        Settings
                     </span>
      </button>
      </div>
   </TopInlineNav>

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
      <Orders user={user} />

      </div>
   );
}
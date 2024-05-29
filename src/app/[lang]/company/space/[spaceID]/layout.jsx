
import TopInlineNav from '../../component/TopInlineNav';
import {getCompany} from '@/_util/userHandler';

export default async function RootSpaceID({children,params}) {
   
   let spaceID = params.spaceID;

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   console.log("spaceID...",spaceID);


   return(
      <>
       <TopInlineNav>
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
      </TopInlineNav>

      {children}
      
      </>
   );
}
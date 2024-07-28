
import TopInlineNav from '../component/TopInlineNav';
// import TopMiddleNav from './component/TopMiddelNav';
import {getCompany} from '@/_util/userHandler';

export default async function RootSpaceID({children}) {
   
   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }

   return(
      <div className='flex flex-col h-full'>
         <TopInlineNav link={
   [
      {
         link:`/en/company/employee`,
         name:"employee"
      }
   ]
} />

      {/* <TopMiddleNav /> */}

      {children}
      
      </div>
   );
}
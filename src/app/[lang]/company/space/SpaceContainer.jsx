
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'
import TopNavTrans from './component/TopNavTrans';
import PageSpace from './component/PageSpace';
import {getCompany} from '@/_util/userHandler';

export default async function SpacePage() {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }

   return(
      <>
         <TopInlineNav link={
   [
      {
         link:`/en/company/space`,
         name:"space"
      }
   ]
} />

      <TopNavTrans user={user} />
      <PageSpace user={user} />
      </>
   )
}
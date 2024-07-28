
import PageProject from "./component/ProjectPage";
import {getCompany} from '@/_util/userHandler';
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'

export default async function Project({params}) {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;

   return (
      <>

<TopInlineNav link={
   [
      {
         link:`/en/company/${spaceID}`,
         name:spaceID
      },
      {
         link:`/en/company/${spaceID}/project`,
         name:'project'
      }
   ]
} />

      <PageProject user={user} spaceID={spaceID} />
      </>
   );

}

import PageMember from "./component/MemberPage";
import {getCompany} from '@/_util/userHandler';
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'

export default async function Member({params}) {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;

   console.log("spaceID...",spaceID);

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
   


   return (
      <>
      <PageMember user={user} spaceID={spaceID} />
      </>
   );

}
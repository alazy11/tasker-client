
import {getCompany} from '@/_util/userHandler';
import PageFolder from "./component/PageFolder";
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'


export default async function Member({params}) {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;
   let projectID = params.projectID;

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
         name:"project"
      },
      {
         link:`/en/company/${spaceID}/project/${projectID}`,
         name:projectID
      },
      {
         link:`/en/company/${spaceID}/project/${projectID}/folders`,
         name:'folders'
      }
   ]
} />

      <PageFolder user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
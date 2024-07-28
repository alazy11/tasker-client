
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
   let projectID = params.projectID;

   console.log("spaceID...",spaceID);


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
      },
      {
         link:`/en/company/${spaceID}/project/${projectID}`,
         name:projectID
      }
   ]
} />

      <PageProject user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
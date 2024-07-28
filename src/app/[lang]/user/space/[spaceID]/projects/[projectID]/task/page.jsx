
import TaskPage from "./component/TaskPage";
import {getCompany} from '@/_util/userHandler';
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'


export default async function Task({params}) {

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
         link:`/en/company/space`,
         name:"space"
      },
      {
         link:`/en/company/space/${spaceID}`,
         name:spaceID
      },
      {
         link:`/en/company/space/${spaceID}/project`,
         name:"project"
      },
      {
         link:`/en/company/space/${spaceID}/project/${projectID}`,
         name:projectID
      },
      {
         link:`/en/company/space/${spaceID}/project/${projectID}/task`,
         name:'task'
      }
   ]
} />

      <TaskPage user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
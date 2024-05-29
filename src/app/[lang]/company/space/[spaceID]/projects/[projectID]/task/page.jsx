
import TaskPage from "./component/TaskPage";
import {getCompany} from '@/_util/userHandler';


export default async function Task({params}) {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;
   let projectID = params.projectID;
   
   console.log('projectID',projectID);
   console.log("spaceID...",spaceID);


   return (
      <>
      <TaskPage user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
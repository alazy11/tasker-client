
import PageProject from "./component/ProjectPage";
import {getCompany} from '@/_util/userHandler';


export default async function Member({params}) {

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
      <PageProject user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
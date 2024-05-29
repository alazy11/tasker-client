
import {getCompany} from '@/_util/userHandler';
import PageFolder from "./component/PageFolder";

export default async function Member({params}) {

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
      <PageFolder user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}
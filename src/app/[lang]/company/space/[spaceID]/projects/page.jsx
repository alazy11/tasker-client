
import PageProject from "./component/ProjectPage";
import {getCompany} from '@/_util/userHandler';


export default async function Project({params}) {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;

   console.log("spaceID...",spaceID);


   return (
      <>
      <PageProject user={user} spaceID={spaceID} />
      </>
   );

}
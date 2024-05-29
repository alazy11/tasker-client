
import PageMember from "./component/MemberPage";
import {getCompany} from '@/_util/userHandler';


export default async function Member({params}) {

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
      <PageMember user={user} spaceID={spaceID} />
      </>
   );

}
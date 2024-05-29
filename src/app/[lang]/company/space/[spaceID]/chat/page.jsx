
import ChatPage from "./component/ChatPage";
import {getCompany} from '@/_util/userHandler';

export default async function Chat({params}) {

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
      <ChatPage user={user} spaceID={spaceID} />
      </>
   );

}
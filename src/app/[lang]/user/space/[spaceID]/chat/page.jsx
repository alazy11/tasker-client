
import ChatPage from "./component/ChatPage";
import {getUser} from '@/_util/userHandler';



export default async function Chat({params}) {

   let user;
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;

   console.log("user info...",user);


   return (
      <>
      <ChatPage user={user} spaceID={spaceID} />
      </>
   );

}
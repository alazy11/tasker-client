
import ChatPage from "./component/ChatPage";
import {getCompany} from '@/_util/userHandler';
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'
import Script from "next/script";


export default async function Chat({params}) {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   let spaceID = params.spaceID;

   console.log("spaceID...",user);


   return (
      <>

<TopInlineNav link={
   [
      {
         link:`/en/company/${spaceID}`,
         name:spaceID
      },
      {
         link:`/en/company/${spaceID}/chat`,
         name:'chat'
      }
   ]
} />

      <ChatPage user={user} spaceID={spaceID} />

      <Script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js" />

      </>
   );

}

import TopInlineNav from '../../component/TopInlineNav';
import {getCompany} from '@/_util/userHandler';
import StartMeetingBtn from './component/StartMeetingBtn';



export default async function RootSpaceID({children,params}) {
   
   let spaceID = params.spaceID;
   let roomId = '';

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }
   console.log("spaceID...",spaceID);


   return(
      <>
      <StartMeetingBtn spaceID={spaceID} user={user} />
      {children}
      </>
   );
}
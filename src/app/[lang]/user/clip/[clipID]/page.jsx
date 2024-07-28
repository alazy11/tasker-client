
// import TopNavTrans from './component/TopNavTrans';
import {getUser} from '@/_util/userHandler';
import ClipPage from './components/ClipPage';

export default async function Space({params}) {

   let clipID = params.clipID;


   let user;
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }

   return(
      <>
      <ClipPage user={user} clipID={clipID} />
      </>
   )
}
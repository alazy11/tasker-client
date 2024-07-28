
// import TopNavTrans from './component/TopNavTrans';
import {getUser} from '@/_util/userHandler';
import InboxPage from './components/InboxPage';

export default async function Space() {

   let user;
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }

   return(
      <>
      <InboxPage user={user} />
      </>
   )
}
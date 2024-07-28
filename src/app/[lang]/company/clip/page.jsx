
// import TopNavTrans from './component/TopNavTrans';
import {getCompany} from '@/_util/userHandler';
import ClipPage from './components/ClipPage';

export default async function Space() {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }

   return(
      <>
      <ClipPage user={user} />
      </>
   )
}

import PageEmployee from './component/PageEmployee'
import {getCompany} from '@/_util/userHandler';

export default async function Employee() {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }

   return (
      <>
   <PageEmployee user={user} />
      </>
   );
}
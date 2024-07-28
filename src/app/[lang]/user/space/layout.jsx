
import {getUser} from '@/_util/userHandler';


export default async function RootSpace({children}) {

   let user;
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }

   return(
      <div className='flex flex-col h-full'>
      {children}
      </div>
   );
}
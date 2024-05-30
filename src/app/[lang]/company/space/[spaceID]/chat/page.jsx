
import ChatPage from "./component/ChatPage";
import { cookies } from 'next/headers';


async function getCompany() {
   let user;
   try {
     const cookiesData = cookies().get('token').value;
     const res = await fetch('http://localhost:4040/en/company', {
       credentials: 'include',
       headers: {
         authorization: `Bearer ${cookiesData}`,
         'cache-control': 'no-store',
       },
     });
     const data = await res.json();
     user = data.data;
   } catch (err) {
     console.log(err);
   }
 
   return user;
 
 }




export default async function Chat({params}) {

  let user = await getCompany()
   let spaceID = params.spaceID;

   console.log("spaceID...",spaceID);


   return (
      <>
      <ChatPage user={user} spaceID={spaceID} />
      </>
   );

}

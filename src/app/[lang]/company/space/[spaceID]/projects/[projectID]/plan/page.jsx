
import PagePlan from "./component/PagePlan";
import { cookies } from 'next/headers';


export default function Plan({params,user}) {

   let spaceID = params.spaceID;
   let projectID = params.projectID;
   
   console.log('projectID',projectID);
   console.log("spaceID...",spaceID);


   return (
      <>
      <PagePlan user={user} projectID={projectID} spaceID={spaceID} />
      </>
   );

}


export async function getServerSideProps() {
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
 
   return {
     props: {
       user,
     },
   };
 }
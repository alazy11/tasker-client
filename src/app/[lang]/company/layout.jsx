// import socket from '@/app/socket';
import getDictionary from "@/app/_dictionaries/dictionaries";
// import NavBar from './component/NavBar';
import MainContainer from './component/MainContainer'
// import Home from '../component/Connect';
import {getCompany} from '@/_util/userHandler';


export default async function CompanyRoot({ children,params }) {

   let user;
   const dic = await getDictionary(params.lang);
   try{
      user = await getCompany();
      console.log("user ---",await getCompany())
   }catch (err) {
      console.log(err)
   }
   console.log("user ---",user)

   return (
      <div className="root-container h-full min-h-svh overflow-x-hidden">
         {/* <Home /> */}
         <MainContainer lang={params.lang} dic={dic} user={user} >
            {children}
         </MainContainer>
         {/* <NavBar lang={params.lang} dic={dic} /> */}
      </div>
   );
}
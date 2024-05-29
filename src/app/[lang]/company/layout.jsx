// import socket from '@/app/socket';
import './style/style.css';
import getDictionary from "@/app/_dictionaries/dictionaries";
// import NavBar from './component/NavBar';
import MainContainer from './component/MainContainer'
import { cookies, headers } from 'next/headers';
import Home from '../component/Connect';

async function getUser() {

   return new Promise((resolve,reject)=>{
      fetch('http://localhost:4040/en/company',{
         credentials: 'include',
         headers:{
            "authorization":`Bearer ${cookies().get('token').value}`,
            "cache-control":"no-store",
         }
      }).then(res=>{
         return res.json();
      }).then(data=>{
         console.log(data);
         return resolve(data.data)
      }).catch(err=>{
         return reject(err);
      });
   })

}

export default async function CompanyRoot({ children,params }) {
   // getUser();
   // socket.connect();
   let user;
   const dic = await getDictionary(params.lang);
   try{
      user = await getUser();
   }catch (err) {
      console.log(err)
   }

   console.log("user====",user);

   console.log('languuuu',params.lang)
   return (
      <div className="root-container h-full min-h-svh">
         <Home />
         <MainContainer lang={params.lang} dic={dic} user={user} >
            {children}
         </MainContainer>
         {/* <NavBar lang={params.lang} dic={dic} /> */}
      </div>
   );
}
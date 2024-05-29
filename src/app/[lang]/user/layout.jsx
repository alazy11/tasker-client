// import socket from '@/app/socket';
import './style/style.css';
import getDictionary from "@/app/_dictionaries/dictionaries";
// import NavBar from './component/NavBar';
import MainContainer from './component/MainContainer'
import Home from '../component/Connect';
import { cookies } from 'next/headers';




export default async function CompanyRoot({ children,params, user }) {
   // getUser();
   // socket.connect();
   const dic = await getDictionary(params.lang);
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


export async function getServerSideProps() {
   let user;
   try {
     const cookiesData = cookies().get('token').value;
     const res = await fetch('http://localhost:4040/en/user', {
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
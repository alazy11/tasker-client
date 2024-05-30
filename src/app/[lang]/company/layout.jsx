// import socket from '@/app/socket';
import './style/style.css';
import getDictionary from "@/app/_dictionaries/dictionaries";
// import NavBar from './component/NavBar';
import MainContainer from './component/MainContainer'
// import { cookies } from 'next/headers';
import Home from '../component/Connect';


async function getCompany() {
  let user;
  try {
    // const cookiesData = cookies().get('token').value;
    const res = await fetch('http://localhost:4040/en/company', {
      credentials: 'include',
      headers: {
        // authorization: `Bearer ${cookiesData}`,
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



export default async function CompanyRoot({ children,params }) {

   const dic = await getDictionary(params.lang);
   let user = await getCompany();

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

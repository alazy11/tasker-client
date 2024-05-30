
import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'
import TopNavTrans from './component/TopNavTrans';
import PageSpace from './component/PageSpace';
// import { cookies } from 'next/headers';


async function getUser() {
   let user;
   try {
   //   const cookiesData = cookies().get('token').value;
     const res = await fetch('http://localhost:4040/en/user', {
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



export default async function Space() {

   let user = await getUser();


   return(
      <>
         <TopInlineNav>
      <div>
      <a href="#" className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal">
         Dashboard
         </span>
      </a>
   </div>
   <span className="text-sm leading-4 font-normal w-3 text-center">
      /
   </span>
   <div>
      <a href="#" className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal ">
         Dashboard
         </span>
      </a>
   </div>
   <span className="text-sm leading-4 font-normal w-3  text-center">
      /
   </span>
   <div>
      <a href="#" className="flex items-center h-6 px-1 rounded hover:bg-gray-100" >
         <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm leading-4 font-normal">
         Dashboard
         </span>
      </a>
   </div>
      </TopInlineNav>

      <TopNavTrans user={user} />
      <PageSpace user={user} />
      </>
   )
}


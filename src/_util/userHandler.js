import { cookies } from 'next/headers';


export async function getCompany() {

   return new Promise((resolve,reject)=>{
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company?sender=company`,{
         // credentials: 'include',
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


export async function getUser() {

   return new Promise((resolve,reject)=>{
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user`,{
         // credentials: 'include',
         headers:{
            "authorization":`Bearer ${cookies().get('token').value}`,
            "cache-control":"no-store",
         }
      }).then(res=>{
         return res.json();
      }).then(data=>{
         // console.log(data);
         return resolve(data.data)
      }).catch(err=>{
         return reject(err);
      });
   })

}

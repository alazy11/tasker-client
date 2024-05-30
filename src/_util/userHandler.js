import { cookies } from 'next/headers';


export async function getCompany() {

   let cookiesData = cookies().get('token').value;

   return new Promise((resolve,reject)=>{
      fetch(`${process.env.BACKEND_URL}/en/company`,{
         credentials: 'include',
         headers:{
            "authorization":`Bearer ${cookiesData}`,
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

   let cookiesData = cookies().get('token').value;

   return new Promise((resolve,reject)=>{
      fetch(`${process.env.BACKEND_URL}/en/user`,{
         credentials: 'include',
         headers:{
            "authorization":`Bearer ${cookiesData}`,
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

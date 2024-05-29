import { cookies } from 'next/headers';


export async function getCompany() {

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


export async function getUser() {

   return new Promise((resolve,reject)=>{
      fetch('http://localhost:4040/en/user',{
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

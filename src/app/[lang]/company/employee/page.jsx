// "use client";

// import { useState } from "react";
import PageEmployee from './component/PageEmployee'
// import { cookies } from 'next/headers';
import {getCompany} from '@/_util/userHandler';


function addUser(user) {
   fetch("http://localhost:4040/en/company/employee", {
      method: "post",
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
      body: JSON.stringify({user}),
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);

         } else {


         }
      })
      .catch((error) => {
         console.log(error);
      });
}




export default async function Employee() {

   let user;
   try{
      user = await getCompany();
   }catch (err) {
      console.log(err)
   }

   return (
      <>
   <PageEmployee user={user} />
      </>
   );
}
// "use client";

// import { useState } from "react";
import PageEmployee from './component/PageEmployee'
// import { cookies } from 'next/headers';
import {getCompany} from '@/_util/userHandler';


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
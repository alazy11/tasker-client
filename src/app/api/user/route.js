
import { NextRequest, NextResponse } from "next/server";
// import { NextRequest } from "next/server";
import { cookies } from "next/headers";


export async function GET(req) {
   const cookie = cookies().get('token');
   console.log('cookie next...', cookies().get('token'));
   if(cookie) {
      return Response.status(200).json();
   }
}

 // let user = req.cookies.get('token');
   // let user = {};
   // fetch('http://localhost:4040/en/user',{
   //    credentials: 'include',
   //    headers:{
   //       "authorization":`Bearer ${cookies().get('token').value}`,
   //       // "cache-control":"cache",
   //    }
   // }).then(res=>{
   //    return res.json();
   // }).then(data=>{
   //    console.log(data);
   //    user = data.data;
   // }).catch(err=>{
   //    console.log(err)
   // })
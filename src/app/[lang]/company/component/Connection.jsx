"use client";
import socket from "@/app/socket";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';


export default function Connection() {
   // useEffect(()=>{
   //    fetch('/api/user',{
   //       credentials: 'include',
   //       headers:{
   //          // "authorization":`Bearer ${cookies().get('token').value}`,
   //          "cache-control":"no-cache",
   //       }
   //    }).then(res=>{
   //       console.log('ok res',res)
   //       return res.json();
   //    }).then(data=>{
   //       console.log('ok data');
   //       console.log(data);
   //    }).catch(err=>{
   //       console.log(err)
   //    })
   // },[])
   const [message,setMessage] = useState();
   const [val,setVal] = useState('');
   const [roomId,setroomId] = useState('');
   useEffect(() => {
      const cookieValue = Cookies.get('roomId');
      console.log("tooken",cookieValue);
      setroomId(cookieValue)
      socket.connect();

   }, [socket]);

   socket.on("message",(msg)=>{
      console.log("mss",msg);
      setMessage(msg);
   });
   // try {
   //    socket.connect();
   // } catch(err) {
   //    console.log(err)
   // }
  
   return(
   <div>
      <h1>ok connect</h1>
      <p>message: {message}</p>

      <input type="text" value={val} onChange={(e)=>{
         setVal(e.target.value);
      }}/>
      <button onClick={(e)=>{
         socket.emit('message',val,roomId,(ss)=>{
            console.log(ss);
         });
      }} >send</button>

   </div>
   )
}
"use client";

import RoomPage from "./RoomPage";
import { useEffect, useRef,useState } from "react";
import NotFoundRoom from "./NotFoundRoom";
import Loading from "@/app/[lang]/component/Loading";

export default function ContainerRoom({spaceID,roomID,user}) {

    const [isValid,setIsValid] = useState(false);
    const [creator,setCreator] = useState('');
    const [loader,setLoader] = useState(true);

    useEffect(()=>{
      
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}/meeting/${roomID}`, {
         credentials: "include",
         headers: {
               "cache-control": "no-cache",
          },
     })
         .then((res) => {
             return res.json();
         })
         .then((data) => {
             if (data.status === "fail" || data.status === "error") {
                 console.log("data space faild....", data);
                 setLoader(false)
             } else {
         
               setCreator(data.data.creator)
               setIsValid(data.data.message)
               setLoader(false)
             }
         })
         .catch((error) => {
             console.log(error);
         });
         },[])


 
         return (
            <>
            {
                           loader ?
                           <div className="h-full w-full fixed top-0 left-0 cont-meet ">
                           <div className="flex items-center justify-center h-full w-full">
                           <Loading styleClass={''} />
                           </div>
                           </div>
                               :
                           isValid  ?  <RoomPage user={user} creator={creator} spaceID={spaceID} roomID={roomID} />
                           : 
                           <NotFoundRoom spaceID={spaceID} />
            }
         </>
         );


 }
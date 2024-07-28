"use client";
import { useEffect, useRef,useState } from "react";
import socket from "@/app/MainSocket";
import AlterCloseVideo from "./AlterCloseVideo";
// import VideoOption from "./VideoOption";
import TopOption from "./TopOption";

export default function VideoElement({stream,user}){

    const [camera, setCamera] = useState(true);
    const [active, setActive] = useState(true);
    let videoSrc = useRef(null);


    useEffect(()=>{

        function closeCamera(roomId,userId,camera){
            console.log("closeCamera",userId);
            console.log("closeCamera",camera);

            if(userId == user.room_ID) {
                setCamera(camera);
            }

        }
        function stopUser(userId,active) {
            console.log("stopUser",active)
            if(userId == user.room_ID) {
                setActive(active);
            }
        }

        socket.on("closeCamera",closeCamera)
        socket.on("stopUser",stopUser)

        return ()=>{
            socket.off("closeCamera",closeCamera)
            socket.off("stopUser",stopUser)
        }

    },[socket])


    useEffect(()=>{

        if(videoSrc) {
            videoSrc.current.srcObject = stream;
        }

    },[videoSrc])

    return(
        <div className="h-80 w-full p-2 relative video-ele">

            <TopOption user={user} active={active} />

            {/* <VideoOption /> */}

            <video autoPlay playsInline className="w-full h-full object-cover rounded-md" ref={videoSrc} ></video>
            {
                        !camera &&
                    <AlterCloseVideo user={user} />
                    }

            <div className="absolute py-2 px-3 flex items-center gap-2 text-white text-sm font-medium video-user bottom-3 left-3 rounded-md">

    <div className="w-6 h-6 flex items-center justify-center">
    <svg width={'1.3rem'} height={'1.3rem'} className="block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
<path d="M8 13.25A3.75 3.75 0 0 0 4.25 17v1.188c0 .754.546 1.396 1.29 1.517 4.278.699 8.642.699 12.92 0a1.537 1.537 0 0 0 1.29-1.517V17A3.75 3.75 0 0 0 16 13.25h-.34c-.185 0-.369.03-.544.086l-.866.283a7.251 7.251 0 0 1-4.5 0l-.866-.283a1.752 1.752 0 0 0-.543-.086H8Z" />
</svg>
    </div>
    <div className="text-white text-sm font-medium">
    {user.public_name}
    </div>
</div>



        </div>
    )

}
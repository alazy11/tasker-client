"use client";

import { useEffect, useRef, useState } from "react";
import socket from "@/app/MainSocket";

function startMeeting(spaceID,creator,setMeetId,meet,roomId) {

    console.log("alazy.....");

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/meeting`, {
        method: 'POST',
        credentials: "include",
        headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
         },
         body:JSON.stringify({creator})
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.status === "fail" || data.status === "error") {
                console.log("data space faild....", data);
            } else {
                setMeetId(data.data.meetId);

                console.log('startMeeting',data.data)
                console.log('meet.current.click()',meet.current)
                // socket.connect()
                socket.emit('startMeeting',roomId,data.data.meetId,spaceID);
            }
        })
        .catch((error) => {
            console.log(error);
        });

}



export default function StartMeetingBtn({spaceID,user}) {

    let meet = useRef();
    const[meetId,setMeetId] = useState('');
    const[roomId,setRoomId] = useState('');


    useEffect(()=>{
        const abortController = new AbortController();

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}`, {
            signal: abortController.signal,
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
                } else {
                    setRoomId(data.data.room_id);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        return () => {
            abortController.abort();
        };

    },[]);

    useEffect(()=>{

        socket.connect();

        if(meet && meetId) {
            meet.current.click();
        }

    },[meetId])

    return (

        <div className="cu-onboarding-checklist  ltr:left-[28%]  rtl:right-[28%] sm:ltr:left-[5%] sm:rtl:right-[5%] sm:bottom-[5%] ">

            <a href={`/en/company/space/${spaceID}/room/${meetId}`} ref={meet} ></a>

            <button className="cu-onboarding-checklist-button" onClick={()=>{
                startMeeting(spaceID,user.room_ID,setMeetId,meet,roomId);
            }}>
                <div className="cu-onboarding-checklist-button__content-container text-white">
                    <div>
                Start Meeting
                    </div>
                    <div className="text-inherit flex items-center justify-center w-4 h-4">
                    <svg width={'1rem'} height={'1rem'} className="block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM6 16.2h9V9.6a1.8 1.8 0 0 0-1.8-1.8h-9v6.6A1.8 1.8 0 0 0 6 16.2zm10.2-2.4 3.6 2.4V7.8l-3.6 2.4v3.6z" clipRule="evenodd" />
</svg>
                    </div>
                </div>
            </button>

        </div>

    );

}
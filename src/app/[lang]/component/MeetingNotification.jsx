"use client";

import { useEffect, useState } from "react";
import socket from "@/app/MainSocket";

// MeetingNotification

export default function MeetingNotification({user}) {

    const[meetings,setMeetings] = useState([]);

    useEffect(()=>{

        socket.connect();

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/meeting`, {
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
                    console.log("data space meeting....", data.data);
                    setMeetings(data.data)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },[])


    useEffect(()=>{

        console.log("setMeetings");

        function startMeeting(roomId,meetId,spaceID) {

            console.log("setMeetings",meetId)

            setMeetings(prev => {

                return [
                    ...prev,
                    {
                        meet_id: meetId,
                        space_id:spaceID, 
                        title: spaceID
                    }
                ]

            } )

        }

         socket.on("startMeeting",startMeeting);

            return ()=>{
                socket.off("startMeeting",startMeeting);
            }

    },[socket])


    return (
        meetings.length > 0 ?
<div>
         <div className="ltr:left-6 rtl:right-6 fixed  bottom-3 z-notification animation-notification scroll-bar" style={{maxHeight:"60%"}}>
            <div className="flex flex-col items-end relative z-10">

            {/* creator
: 
"admin2d82e7ca09c"
meet_id
: 
"b1f1cb34-930e-41b9-bbb8-492b533b32a8"
space_id
: 
"4fbb7e58202"
title
: 
"space1" */}

                {
                    meetings.map((item,index)=>{

                        return(

                            <div key={item.meet_id} className="relative bg-white min-w-80 rounded border-normal mb-3 py-4 px-6 cu-toast-new__item">
                        <div data-meet={item.meet_id} className="flex items-center justify-center cu-toast-new__close absolute h-6 w-6 ltr:right-3 rtl:left-3 top-3 cursor-pointer rounded" onClick={(e)=>{

                            let meet = e.currentTarget.dataset.meet;

                            setMeetings(prev => {

                                prev = prev.filter(item=>{
                                    return item.meet_id !== meet;
                                })

                                return prev;

                            } )

                        }}>
                        <svg className="block" width={'100%'} height={"100%"} viewBox="0 0 10 10"><path fillRule="evenodd" d="M.293.293a1 1 0 0 1 1.414 0L5 3.586 8.293.293a1 1 0 0 1 1.414 1.414L6.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414L5 6.414 1.707 9.707A1 1 0 0 1 .293 8.293L3.586 5 .293 1.707a1 1 0 0 1 0-1.414z" clipRule="evenodd"></path></svg>
                        </div>
      
                        <div>
                           <div className="cu-view-changed-toast__text-title">
                           Space call meeting
                           </div>
      
                           <div className="text-xs font-normal leading-5 cu-view-changed-toast__text-body">
                              <div className="text-xs font-normal cu-view-changed-toast__text-body leading-5"> You have a <strong>Meeting</strong> in <strong>{item.title}</strong> space. </div> 
                              You can join or ignore this meeting.
                           </div>
      
                           <div className="cu-view-changed-toast__btn-container">
                              <button className="cu-view-changed-toast__btn cu-view-changed-toast__btn_link cu-view-changed-toast__btn_grey">
                                 ignore
                              </button>
      
                              <button className="cu-view-changed-toast__btn ltr:mr-4 rtl:ml-4 relative">
                              Autosave view
      
                              {/* <div className="cu-view-changed-toast__btn-tooltip ">
                                 <div className="cu-view-changed-toast__btn-tooltip-text">
                                 When enabled, we'll always save changes you make to this view without asking you each time. 
                                 </div>
                              </div> */}
      
                              </button>
      
                              <button className="cu-view-changed-toast__btn cu-view-changed-toast__btn-save">
                                <a href={`/en/user/space/${item.space_id}/room/${item.meet_id}`} className="w-full h-full flex items-center " >
                                Join
                                 <div className="flex items-center ms-2">
                                    <div className="cu-view-changed-toast__keyboard-key-tag-control-txt">
                                    Ctrl 
                                    </div>
                                    <div className="flex items-center justify-center cu-view-changed-toast__keyboard-key-tag-enter-icon">
                                    <svg className="block" width={"100%"} height={"100%"} viewBox="0 0 24 24"><path fillRule="evenodd" d="M21 4a1 1 0 0 1 1 1v5a5 5 0 0 1-5 5H5.414l3.293 3.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.414 13H17a3 3 0 0 0 3-3V5a1 1 0 0 1 1-1Z" clipRule="evenodd"></path></svg>
                                    </div>
                                 </div>
                                </a>
                              </button>
      
                           </div>
      
                        </div>
      
                     </div>

                        )

                    })
                }

            </div>
         </div>
      </div> : ''
    )


}
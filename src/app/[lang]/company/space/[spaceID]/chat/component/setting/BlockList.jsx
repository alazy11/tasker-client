"use client";
import { useState } from "react";
import socket from "@/app/MainSocket";

function removeFromBlockList(spaceID,employee_id,isBlocked,roomId,userId,username,setNotification,refreshBlock,setRefreshBlock,setMessage,setTitle) {

    fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/chat/setting/block/${employee_id}?isBlocked=${isBlocked}`,
        {
            method:'PUT',
            credentials: "include",
            headers: {
                "cache-control": "no-cache",
            },
        }
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.status === "fail" || data.status === "error") {
                // setErrorMessage(true);
                // setErrorText(data?.message);
                console.log("data space faild....", data);
            } else {
                console.log('ok',data.data);
                socket.emit("BlockChatUser",roomId,isBlocked);
                setRefreshBlock(!refreshBlock);
                setMessage(`${username} has been removed from blockList Successfully.`);
                setTitle(`Removed from BlockList`);
                setNotification(true);

                setTimeout(() => {
                    setNotification(false);
                }, 3000);

            }
        })
        .catch((error) => {
            console.log(error);
        });
}



export default function BlockList({spaceID,roomId,blockListMembers,refreshBlock,setRefreshBlock,setMessage,setTitle,setNotification}) {


    return (
        <>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Blocked
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Remove all
                </span>
            </div>

            <div>


            {
            blockListMembers.map((member, index)=>{
                return (

                    <div>
                    <div className="flex items-center gap-3 py-2 px-3 rounded-md cursor-default hover-gray-100">

                        <div className="w-7 h-7 relative">
                            <div>
                            {member.profile_path ? (

<div>
                                    <div className="w-7 h-7 relative flex items-center justify-center rounded-full">
                                    <Image
                                       src={member.profile_path}
                                       alt="profile"
                                       className="w-full object-cover"
                                    />
                                    </div>
                                </div>
                                    
                                 ) : (
                                    <div>
                                    <div className="w-7 h-7 relative flex items-center justify-center text-xs font-normal rounded-full color-avatar uppercase " style={{backgroundColor:'rgb(123, 104, 238)'}} >
                                        {member.public_name[0]}
                                    </div>
                                </div>
                                 )}

                            </div>
                        </div>

                        {/* <div className="text-sm font-normal text-2a2e34 overflow-hidden whitespace-nowrap text-ellipsis">
                        {member.public_name}
                        </div> */}

                        <div className="flex-1">
                              <div className="max-w-full whitespace-nowrap text-ellipsis overflow-hidden font-normal leading-4 font-13px employee-name">
                                 {member.public_name}
                                 {/* alazy alhimeari */}
                              </div>
                              <div className="font-10px font-normal text-b9bec7">
                                 {member.job_for}
                                 {/* software  */}
                              </div>
                           </div>


                        <div className="ltr:ml-auto rtl:mr-auto">
                            <div>
                            <button className="relative ltr:left-0 rtl:right-0 text-white font-medium button-shadow h-6 pe-2 ps-2 rounded text-xs button-background"
                                    data-user = {member.employee_id}
                                    data-userid = {member.user_id}
                                    data-username = {member.public_name}
                                    data-userroom = {member.room_ID}
                            onClick={(e)=>{
                                let employee_id = e.currentTarget.dataset.user;
                                let userId = e.currentTarget.dataset.userid;
                                let username = e.currentTarget.dataset.username;
                                let roomid = e.currentTarget.dataset.userroom;
                                removeFromBlockList(spaceID,employee_id,false,roomid,userId,username,setNotification,refreshBlock,setRefreshBlock,setMessage,setTitle);
                            }}>
                           Remove
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                );
            })
        }

            </div>

        </div>


        </>
    );

}


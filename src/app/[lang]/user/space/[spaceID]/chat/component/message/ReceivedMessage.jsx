"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/public/project-image/user-profile.jpeg";
import socket from "@/app/MainSocket";

const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function niceBytes(x) {
   let l = 0,
      n = parseInt(x, 10) || 0;

   while (n >= 1024 && ++l) {
      n = n / 1024;
   }

   return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

function deleteMessage(spaceID, messageId, messageType, setIsDeleted,filePath,roomId) {

   fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}/chat?messageId=${messageId}&messageType=${messageType}&filePath=${filePath}`,
      {
         method: 'DELETE',
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
            console.log("data space....", data);
            setIsDeleted(true);
            console.log("deleteMessage messageId",messageId)
            socket.emit('deleteMessage',roomId,messageId);
         }
      })
      .catch((error) => {
         console.log(error);
      });

}


function handelDownload(spaceID, filePath, fileName) {

   let url = '';

   // if(folderInfo.kind === 'file') {
   url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}/chat/download?filePath=${filePath}&fileName=${fileName}`;
   // } else {
   // url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download?folder=${JSON.stringify({folder_path,name})}`;
   // }

   window.location.href = url;

}



export default function ReceivedMessage({
   user,
   spaceID,
   message,
   roomId,
   setRefresh,
   refresh
}) {
   const [isDeleted, setIsDeleted] = useState(false);

   useEffect(() => {

      function deleteMessage(msg) {

         
         console.log("msg",msg)
         console.log(" message.ms_id", message.ms_id)

         if(msg == message.ms_id)
            setIsDeleted(true);
      }

      socket.on('deleteMessage', deleteMessage)


      return () => {
         socket.off("deleteMessage", deleteMessage);
      };

   }, [socket]);

   return (
      <div
         key={message.user_id || message.company_id}
         className={`w-full ${message.user_id === user.user_id
            ? "send-message"
            : "incoming-message"
            }`}
      >
         <div className="relative p-3 rounded-md flex flex-col gap-2 message-box">
            <div className="absolute arrow-msg"></div>

            {message.user_id === user.user_id ? (
               <div className="w-full text-message text-end font-semibold text-sm leading-4 flex items-center gap-1 justify-between">
                  <div className="flex items-center gap-1">
                  {isDeleted ?
               ""
               :
               <button
               data-msg={message.ms_id}
               data-msgt={message.ms_type}
               data-path={message.conten}
               className="w-7 h-7 flex items-center justify-center border-0 cursor-pointer rounded-md button-msg"
               onClick={(e) => {
                  let messageType = e.currentTarget.dataset.msgt;
                  let messageId = e.currentTarget.dataset.msg;
                  let filePath = e.currentTarget.dataset.path;
                  deleteMessage(spaceID, message.ms_id, messageType, setIsDeleted,filePath,roomId)
               }}
            >
                     <span className="w-5 h-5 flex items-center justify-center">
                        <svg
                           width={"1rem"}
                           height={"1rem"}
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={1.5}
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="M10 11v6m4-6v6M4 7h16m-1 0-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7h14Zm-4 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6Z" />
                        </svg>
                     </span>
                  </button>}
                     {
                        (message.ms_type !== "text") &&
                        (
                           isDeleted ?
                           "" :
                              <button
                                 data-msg={message.name}
                                 data-msgt={message.conten}
                                 className="w-7 h-7 flex items-center justify-center border-0 cursor-pointer rounded-md button-msg"
                                 onClick={(e) => {
                                    let filePath = e.currentTarget.dataset.msgt;
                                    let fileName = e.currentTarget.dataset.msg;
                                    handelDownload(spaceID, filePath, fileName);
                                 }}
                              >
                                 <span className="w-5 h-5 flex items-center justify-center">
                                    <svg
                                       width="1rem"
                                       height="1rem"
                                       fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                       <path d="m16.623 10.36 1.213 1.211-6.061 6.061-6.061-6.06 1.212-1.213 3.992 3.992V3h1.714v11.35l3.992-3.99Z" />
                                       <path d="M19.429 19.29H4v1.713h15.429V19.29Z" />
                                    </svg>
                                 </span>
                              </button> 
                        )
                     }
                  </div>
                  <div className="w-full text-message text-end font-semibold text-sm leading-4">
                     You
                  </div>
               </div>
            ) : (

               <div className="w-full text-message text-end font-semibold text-sm leading-4 flex items-center gap-1 justify-between">
                  <div className="flex items-center gap-1">
                     {
                        (message.ms_type !== "text") &&

                        (
                           isDeleted ?
                           "" :
                        <button
                           data-msg={message.name}
                           data-msgt={message.conten}
                           className="w-7 h-7 flex items-center justify-center border-0 cursor-pointer rounded-md button-msg"
                           onClick={(e) => {
                              let filePath = e.currentTarget.dataset.msgt;
                              let fileName = e.currentTarget.dataset.msg;
                              handelDownload(spaceID, filePath, fileName);
                           }}
                        >
                           <span className="flex items-center justify-center">
                              <svg
                                 width="1rem"
                                 height="1rem"
                                 fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="m16.623 10.36 1.213 1.211-6.061 6.061-6.061-6.06 1.212-1.213 3.992 3.992V3h1.714v11.35l3.992-3.99Z" />
                                 <path d="M19.429 19.29H4v1.713h15.429V19.29Z" />
                              </svg>
                           </span>
                        </button>
                        )

                     }
                  </div>
                  <div className="w-full text-message text-end font-semibold text-sm leading-4">
                     {message.public_name}
                  </div>
               </div>

            )}

            {isDeleted ?
               <p className="text-delete text-sm leading-4">deleted Message.</p>
               : message.ms_type === "text" ? (
                  <p className="text-message text-sm leading-4">{message.conten}</p>

               ) : message.ms_type.startsWith("image") ? (
                  <div className="flex items-center gap-3 text-message">
                     <div className="relative w-48 h-48 flex items-center">
                        {/* <Image src={url} alt="profile image" className='w-full h-auto' /> */}
                        <img
                           src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + message.conten}
                           alt="profile image"
                           className="w-full h-auto"
                        />
                     </div>
                  </div>
               ) : message.ms_type.startsWith("video") ? (
                  <div className="flex items-center gap-3 text-message">
                     <div className="relative w-48 h-48 flex items-center">
                        <video className="w-full h-auto" controls preload={"metadata"}>
                           <source
                              src={
                                 process.env.NEXT_PUBLIC_BACKEND_URL + "/" + message.conten
                              }
                              type={message.ms_type}
                           />
                        </video>
                     </div>
                  </div>
               ) : (
                  <div className="flex items-center gap-3 text-message">
                     <div>
                        <div className="w-10 h-10 relative flex items-center justify-center rounded-full">
                           <svg
                              width={"100%"}
                              height={"100%"}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                              <path d="M13 2v7h7" />
                           </svg>
                        </div>
                     </div>

                     <div>
                        <div className="mb-1 font-medium">{message.name}</div>
                        <div className="flex items-center justify-between text-xs">
                           <span>{niceBytes(message.size)}</span>
                        </div>
                     </div>
                  </div>
               )}

            {message.user_id === user.user_id ? (
               <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center w-3.5 h-3.5 time-message">
                     <svg
                        width={"100%"}
                        height={"100%"}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M20 6 9 17l-5-5" />
                     </svg>
                  </div>
                  <span className="time-message leading-4 flex items-center">
                     {message.send_time}
                  </span>
               </div>
            ) : (
               <span className="time-message leading-4">{message.send_time}</span>
            )}
         </div>

         {message.user_id === user.user_id ? (
            ""
         ) : (
            <div className=" sender relative w-8 h-8 rounded-full overflow-hidden">
               <Image src={profile} alt="profile image" fill />
            </div>
         )}
      </div>
   );
}

"use client";

import { useState, useEffect } from "react";
import socket from "@/app/MainSocket";
import handleDateFormat from "@/_util/handleDateFormat";


function sendMessage({ spaceID, text, setMessage, roomId, user, setIsSending }) {

   socket.emit('spaceMessage', {
      room_id: roomId,
      user_id: user.user_id,
      company_id: null,
      spaceID: spaceID,
      conten: text,
      ms_type: 'text',
      public_name: user.public_name,
      profile_path: user.profile_path,
      senderType: 'user',
      send_date: handleDateFormat(),
      send_time: new Date().toLocaleTimeString(),
      size: null,
      name: null,
      isSending: false
   }, (error, res) => {
      if (error) {

         setIsSending(false)
         console.log('nooooo sending')
      } else {
         console.log('ok sending')
         setIsSending(true)
         // message[message.length - 1].isSending = res;
      }

   })

}



export default function SendTextMessage({ user, spaceID, text, roomId, setting, deleteMessage }) {

   const [message, setMessage] = useState({});
   const [isSending, setIsSending] = useState(false);
   const [isDeleted, setIsDeleted] = useState(false);


   useEffect(() => {

      if (!setting.complete) {
         setMessage({
            room_id: roomId,
            user_id: user.user_id,
            company_id: null,
            spaceID: spaceID,
            conten: text,
            ms_type: 'text',
            public_name: user.public_name,
            profile_path: user.profile_path,
            senderType: 'user',
            send_date: new Date(),
            send_time: new Date().toLocaleTimeString(),
            size: null,
            name: null,
            isSending: false
         })

         console.log(message)

         sendMessage({ spaceID, text, setMessage, roomId, user, setIsSending })
      }

      return () => { setting.complete = true }

   }, [])


   return (

      <div key={(message?.user_id || message?.company_id)} className={`w-full send-message`}>

         <div className="relative p-3 rounded-md flex flex-col gap-2 message-box ">

            <div className="absolute arrow-msg"></div>

            <div className="w-full text-message text-end font-semibold text-sm leading-4 flex items-center gap-1 justify-between">
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
                  deleteMessage(spaceID, messageId, messageType, setIsDeleted,filePath,roomId)
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

               <span className="flex items-center justify-center">You</span>
            </div>

            {isDeleted ?
               <p className="text-delete text-sm leading-4">deleted Message.</p>
               :
               <p className="text-message text-sm leading-4">
                  {message?.conten}
               </p>
            }



            <div className="flex items-center gap-1">
               <div className="flex items-center justify-center w-3.5 h-3.5 time-message">

                  {
                     isSending ?
                        <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M20 6 9 17l-5-5" />
                        </svg>
                        :
                        <svg width={'100%'} height={'100%'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                           <path d="M12 6v6l4 2" />
                        </svg>
                  }


               </div>
               <span className="time-message leading-4 flex items-center">
                  {message?.send_time}
               </span>
            </div>

         </div>

      </div>

   );

}
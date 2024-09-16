"use client";

import { useState, useEffect } from "react";
import socket from "@/app/MainSocket";
import Image from "next/image";
import handleDateFormat from "@/_util/handleDateFormat";

const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function niceBytes(x) {
   let l = 0,
      n = parseInt(x, 10) || 0;

   while (n >= 1024 && ++l) {
      n = n / 1024;
   }

   return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

const HandleUploadFile = ({
   spaceID,
   file,
   setLoader,
   setPercent,
   roomId,
   user,
   setIsSending,
   setVideoUrl
}) => {
   const formData = new FormData();
   // formData.append('fileInfo',JSON.stringify(fileInfo));
   formData.append("file", file);

   var xhr = new XMLHttpRequest();
   xhr.responseType = "json";
   xhr.upload.addEventListener(
      "progress",
      (e) => {
         ProgressHandler(e, setLoader, setPercent);
      },
      false
   );
   xhr.addEventListener(
      "load",
      (e) => {
         SuccessHandler(
            e,
            setLoader,
            roomId,
            user,
            file,
            setIsSending,
            spaceID,
            setVideoUrl
         );
      },
      false
   );
   xhr.addEventListener(
      "error",
      (e) => {
         ErrorHandler(e, setLoader);
      },
      false
   );
   xhr.addEventListener(
      "abort",
      (e) => {
         AbortHandler(e, setLoader);
      },
      false
   );
   xhr.open(
      "POST",
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/chat/upload`
   );
   // xhr.setRequestHeader('folderFilePath', folderInfo.folder_path);
   xhr.withCredentials = true;
   xhr.send(formData);
};

const ProgressHandler = (e, setLoader, setPercent) => {
   setLoader(true);
   var percent = (e.loaded / e.total) * 100;
   setPercent(Math.round(percent));
};

const SuccessHandler = (
   e,
   setLoader,
   roomId,
   user,
   file,
   setIsSending,
   spaceID,
   setVideoUrl
) => {
   setLoader(false);
   console.log("ressssss", e.target.response);
   setVideoUrl(e.target.response.data.file);
   sendFile({
      spaceID,
      url: e.target.response.data.file,
      roomId,
      user,
      type: file.type,
      file,
      setIsSending,
   });

};
const ErrorHandler = (e, setLoader, response) => {
   setLoader(false);
   console.log("ressssss", e.target.response);
   console.log("ressssseeeeeerrrrrs", e);
};
const AbortHandler = (e, setLoader, response) => {
   setLoader(false);
};

function sendFile({
   spaceID,
   url,
   roomId,
   user,
   type,
   file,
   setIsSending,
}) {
   socket.emit(
      "spaceMessage",
      {
         room_id: roomId,
         user_id: null,
         company_id: user.company_id,
         spaceID: spaceID,
         conten: url,
         ms_type: type,
         public_name: user.public_name,
         profile_path: user.profile_path,
         senderType: "company",
         send_date: handleDateFormat(),
         send_time: new Date().toLocaleTimeString(),
         size: file.size,
         name: file.name,
         isSending: false,
      },
      (error, res) => {
         if (error) {
            setIsSending(false);
         } else {
            setIsSending(true);
            // message[message.length - 1].isSending = res;
         }
      }
   );
}

export default function SendFileMessage({ user, spaceID, file, url = '', roomId, setting, deleteMessage }) {
   const [message, setMessage] = useState({});
   const [percent, setPercent] = useState("0");
   const [loader, setLoader] = useState(true);
   const [isSending, setIsSending] = useState(false);
   const [videoUrl, setVideoUrl] = useState('');
   const [isDeleted, setIsDeleted] = useState(false);


   useEffect(() => {

      if (!setting.complete) {
         setMessage({
            room_id: roomId,
            user_id: null,
            company_id: user.company_id,
            spaceID: spaceID,
            conten: "",
            ms_type: file.type,
            public_name: user.public_name,
            profile_path: user.profile_path,
            senderType: "company",
            send_date: handleDateFormat(),
            send_time: new Date().toLocaleTimeString(),
            size: file.size,
            name: file.name,
            isSending: false,
         });

         // sendMessage({spaceID,text,setMessage,roomId,user})
         HandleUploadFile({
            spaceID,
            file,
            setLoader,
            setPercent,
            roomId,
            user,
            setIsSending,
            setVideoUrl
         });
      }
      return () => { setting.complete = true }

   }, []);

   return (
      <>
         {file?.type.startsWith('image') ? (

            <div
               key={message?.user_id || message?.company_id}
               className={`w-full send-message`}
            >
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

                  <div className="flex items-center gap-3 text-message">
                     {isDeleted ?
                        <p className="text-delete text-sm leading-4">deleted Message.</p> :
                        <div className="relative w-48 h-48 flex items-center">
                           {/* <Image src={url} alt="profile image" className='w-full h-auto' /> */}
                           <img src={url} alt="profile image" className='w-full h-auto' />


                           {isSending ? '' :
                              (
                                 <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                                    <div className="w-10 h-10 relative flex items-center justify-center rounded-full">
                                       <svg
                                          width="100%"
                                          height="100%"
                                          viewBox="0 0 250 250"
                                          className="circular-progress circular-progress-color"
                                          style={{ "--progress": percent }}
                                       >
                                          <circle class="bg"></circle>
                                          <circle class="fg"></circle>
                                       </svg>

                                       <span
                                          className="absolute top-2/4 left-2/4 text-white select-none cursor-default  -translate-y-1/2 -translate-x-1/2"
                                          style={{ fontSize: "9px" }}
                                       >
                                          {percent}%
                                          {/* 50% */}
                                       </span>
                                    </div>
                                 </div>
                              )
                           }


                        </div>
                     }
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-3.5 h-3.5 time-message">
                           {isSending ? (
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
                           ) : (
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
                                 <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                                 <path d="M12 6v6l4 2" />
                              </svg>
                           )}
                        </div>
                        <span className="time-message text-xs flex items-center">
                           {message?.send_time}
                        </span>
                     </div>

                     <div className="time-message ">
                        <div className="flex items-center justify-between text-xs">
                           {/* <span>20%</span> */}
                           <span>{message?.size}</span>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

         ) :
            file?.type.startsWith('video') ?
               (
                  <div
                     key={message?.user_id || message?.company_id}
                     className={`w-full send-message`}
                  >
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

                        <div className="flex items-center gap-3 text-message">
                           {isDeleted ?
                              <p className="text-delete text-sm leading-4">deleted Message.</p> :
                              <div className={`relative ${isSending ? 'w-48 h-48' : ''} flex items-center`}>
                                 {
                                    isSending ?
                                       <video className="w-full h-auto" controls={isSending} preload={"metadata"} >
                                          <source src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + videoUrl} type={file.type} />
                                       </video>
                                       :
                                       <div className="flex items-center gap-3 text-message">
                                          <div>
                                             <div className="mb-1 font-medium">{message?.name}</div>
                                             <div className="flex items-center justify-between text-xs">
                                                <span>{percent}%</span>
                                                <span>{niceBytes(message?.size)}</span>
                                             </div>
                                          </div>
                                          <div>
                                             <div className="w-10 h-10 relative flex items-center justify-center rounded-full">
                                                {loader ? (
                                                   <>
                                                      <svg
                                                         width="100%"
                                                         height="100%"
                                                         viewBox="0 0 250 250"
                                                         className="circular-progress circular-progress-color"
                                                         style={{ "--progress": percent }}
                                                      >
                                                         <circle class="bg"></circle>
                                                         <circle class="fg"></circle>
                                                      </svg>

                                                      <span
                                                         className="absolute top-2/4 left-2/4 text-2a2e34  -translate-y-1/2 -translate-x-1/2"
                                                         style={{ fontSize: "9px" }}
                                                      >
                                                         {percent}%
                                                      </span>
                                                   </>
                                                ) : (
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
                                                )}
                                             </div>
                                          </div>
                                       </div>
                                 }


                                 {/* {isSending ? '' :
                     (
                        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                        <div className="w-10 h-10 relative flex items-center justify-center rounded-full">
                           <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 250 250"
                              className="circular-progress circular-progress-color"
                              style={{ "--progress": percent }}
                           >
                              <circle class="bg"></circle>
                              <circle class="fg"></circle>
                           </svg>

                           <span
                              className="absolute top-2/4 left-2/4 text-white select-none cursor-default  -translate-y-1/2 -translate-x-1/2"
                              style={{ fontSize: "9px" }}
                           >
                              {percent}%

                           </span>
                        </div>
                     </div>
)
                  */}


                              </div>}
                        </div>

                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-1">
                              <div className="flex items-center justify-center w-3.5 h-3.5 time-message">
                                 {isSending ? (
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
                                 ) : (
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
                                       <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                                       <path d="M12 6v6l4 2" />
                                    </svg>
                                 )}
                              </div>
                              <span className="time-message text-xs flex items-center">
                                 {message?.send_time}
                              </span>
                           </div>

                           <div className="time-message ">
                              <div className="flex items-center justify-between text-xs">
                                 <span>{message?.size}</span>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               )
               :
               (
                  <div
                     key={message?.user_id || message?.company_id}
                     className={`w-full send-message`}
                  >
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
                           <p className="text-delete text-sm leading-4">deleted Message.</p> :
                           <div className="flex items-center gap-3 text-message">
                              <div>
                                 <div className="mb-1 font-medium">{message?.name}</div>
                                 <div className="flex items-center justify-between text-xs">
                                    <span>{percent}%</span>
                                    <span>{niceBytes(message?.size)}</span>
                                 </div>
                              </div>
                              <div>
                                 <div className="w-10 h-10 relative flex items-center justify-center rounded-full">
                                    {loader ? (
                                       <>
                                          <svg
                                             width="100%"
                                             height="100%"
                                             viewBox="0 0 250 250"
                                             className="circular-progress circular-progress-color"
                                             style={{ "--progress": percent }}
                                          >
                                             <circle class="bg"></circle>
                                             <circle class="fg"></circle>
                                          </svg>

                                          <span
                                             className="absolute top-2/4 left-2/4 text-2a2e34  -translate-y-1/2 -translate-x-1/2"
                                             style={{ fontSize: "9px" }}
                                          >
                                             {percent}%
                                          </span>
                                       </>
                                    ) : (
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
                                    )}
                                 </div>
                              </div>
                           </div>}

                        <div className="flex items-center gap-1">
                           <div className="flex items-center justify-center w-3.5 h-3.5 time-message">
                              {isSending ? (
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
                              ) : (
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
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                                    <path d="M12 6v6l4 2" />
                                 </svg>
                              )}
                           </div>
                           <span className="time-message leading-4 flex items-center">
                              {message?.send_time}
                           </span>
                        </div>
                     </div>
                  </div>
               )}

      </>
   );
}

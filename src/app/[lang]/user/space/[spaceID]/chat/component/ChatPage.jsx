"use client";
import { useState, useEffect, useRef } from "react";
import TopMiddleNav from "@/app/[lang]/user/space/[spaceID]/component/TopMiddleNav";
import Image from "next/image";
import Members from "./Members";
import profile from "@/public/project-image/user-profile.jpeg";
import socket from "@/app/MainSocket";

import SendTextMessage from "./message/SendTextMessage";
import SendFileMessage from "./message/SendFileMessage";
import ReceivedMessage from "./message/ReceivedMessage";
// import MessageEditor from "@/app/[lang]/component/MessageEditor";
import Emoji from "@/app/[lang]/component/message/Emoji";


function deleteMessage(spaceID, messageId, messageType, setIsDeleted, filePath,roomId) {

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
            socket.emit('deleteMessage',roomId,messageId);
         }
      })
      .catch((error) => {
         console.log(error);
      });

}




export default function ChatPage({ user, spaceID }) {
   const [ch, setch] = useState(false);
   const [roomId, setRoomId] = useState('');
   const [messageInput, setMessageInput] = useState('');
   const [message, setMessage] = useState([]);
   const [storedMessage, setStoredMessage] = useState([]);
   const [page, setPage] = useState(1);
   const [recordNumber, setRecordNumber] = useState(10);
   const [total, setTotal] = useState('')
   const [loader, setLoader] = useState(false);
   const [scrollPosition, setScrollPosition] = useState(0);
   const [place, setPlace] = useState(true);
   const [isFocus, setIsFocus] = useState(false);
   const [showEmoji, setShowEmoji] = useState(false);
   const [isLock, setIsLock] = useState(false);
   const [isBLocked, setIsBLocked] = useState();

   const inputElement = useRef(null);

   const scroll = useRef(null);

   useEffect(() => {
      socket.connect();
   }, []);

   useEffect(() => {

      console.log("isBLocked",isBLocked)

         socket.disconnect();
         socket.connect();
         setStoredMessage([]);
         setMessage([]);
  
   }, [isBLocked])

   useEffect(() => {

      if (scroll) {
         let scto = scroll.current.scrollHeight;
         scroll.current.scroll({
            top: scto,
            left: "0",
            // behavior:"smooth"
         })
      }

   }, [message])

   useEffect(() => {
      if (scroll) {
         // if(storedMessage.length <= 10) {
         let scto = scroll.current.scrollHeight - scrollPosition;
         scroll.current.scroll({
            top: scto,
            left: "0",
            // behavior:"smooth"
         })
         setScrollPosition(scroll.current.scrollHeight)
         // }
      }
   }, [storedMessage])


   useEffect(() => {

      function receiveMessage(msg) {
         setMessage(prev => {
            return [...prev, {
               msg: msg,
               process: 'receive'
            }]
         })
      }

      function lockedChat(isLock) {
         console.log('lock',isLock)
         setIsLock(isLock);
      }

      function blockedChatUser(isBlocked) {
         console.log('isBlocked socket',isBlocked)
         setIsBLocked(isBlocked);
      }

      socket.on('spaceMessage', receiveMessage)
      socket.on('lockedChat', lockedChat)
      socket.on('BlockChatUser', blockedChatUser)

      return () => {
         socket.off("spaceMessage", receiveMessage);
         socket.off('lockedChat', lockedChat);
         socket.off('BlockChatUser', blockedChatUser);
      };

   }, [socket])



   useEffect(() => {

      const abortController = new AbortController();

      fetch(
         `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}?employeeId=${user.employee_id}`,
         {
            signal: abortController.signal,
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
               console.log("data space faild....", data);
            } else {
               setRoomId(data.data.room_id);
               setIsLock(data.data.isLocked || data.data.is_locked);
               setIsBLocked(data.data.is_blocked);
            }
         })
         .catch((error) => {
            console.log(error);
         });

      return () => {
         abortController.abort();
      };

   }, []);


      useEffect(() => {

         if(isBLocked) {
           
         } else {
            const abortController = new AbortController();

            fetch(
               `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}/chat?page=${page}&recordNumber=${recordNumber}`,
               {
                  signal: abortController.signal,
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
                     console.log("data space chat message....", data.data);
                     if (data.data?.result?.length > 0) {
                        data.data?.result?.reverse();
                        setStoredMessage(prev => [...data.data.result, ...prev]);
                        setTotal(data.data.total);
                     }
                  }
               })
               .catch((error) => {
                  console.log(error);
               });
      
      
      
            return () => {
               abortController.abort();
            };
         }
   
      }, [page,isBLocked]);



   return (
      <>
         <TopMiddleNav setEmployee={setch} spaceID={spaceID}>
            Add Member
         </TopMiddleNav>

         <div className="flex-1 w-full overflow-hidden">
            <div className="w-full h-full flex overflow-hidden">
               <Members user={user} spaceID={spaceID} />

               <div className="flex-1 h-full mr-2 ml-2 pt-2 pb-5">
                  {/* pb-14 */}
                  <div className="relative flex flex-col  h-full border border-solid border-gray-200 rounded-md flex-1 back-nav-side">
                     <div className=" bg-white overflow-hidden h-12 w-full rounded-tl-md rounded-tr-md">
                        <div className=" px-2 w-full h-full flex items-center border-b border-solid border-gray-200">
                           <h3 className="text-lg leading-4 font-medium">
                              space1
                           </h3>
                        </div>
                     </div>

                     <div className="flex-1 w-full overflow-hidden py-2">
                        <div className="w-full h-full overflow-y-auto scroll-bar" ref={scroll} onScroll={(e) => {
                           const element = e.currentTarget;
                           let scrollValue = element.scrollTop;
                           let all = page * recordNumber;

                           if (scrollValue == 0 && all < total) {
                              setLoader(true);
                              setPage(prev => prev + 1)
                           } else {
                              setLoader(false);
                           }
                        }}  >

                           {
                              loader &&
                              <div className='flex items-center justify-center w-full h-7'>
                                 <span className='flex'>
                                    <svg
                                       class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                    >
                                       <circle
                                          class="opacity-25"
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="currentColor"
                                          stroke-width="4"
                                       ></circle>
                                       <path
                                          class="opacity-75"
                                          fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                       ></path>
                                    </svg>
                                 </span>
                              </div>
                           }

                           <div className="w-full min-h-full p-3 flex flex-col gap-2">
                              <div className="w-full">

                                 <div className="w-full mb-2 flex items-center gap-1">
                                    <div className="flex-1 h-0.5 bg-gray-200"></div>
                                    <div className="h-8 flex items-center p-1">
                                       <span className="whitespace-nowrap text-xs">May 21,2024</span>
                                    </div>
                                    <div className="flex-1 h-0.5 bg-gray-200"></div>
                                 </div>

                                 <div className="w-full flex flex-col gap-3">
                                    <>

                                       {
                                          storedMessage?.map((item, index) => {

                                             return (
                                                <>
                                                   <ReceivedMessage user={user} spaceID={spaceID} message={item} send={true} roomId={roomId} key={index + spaceID} />
                                                </>
                                             );

                                          })
                                       }

                                       {
                                          message?.map((item, index) => {

                                             return (
                                                <>
                                                   {
                                                      item.process === 'receive' ?
                                                         <ReceivedMessage user={user} spaceID={spaceID} message={item.msg} roomId={roomId} key={index + spaceID} /> :
                                                         item.type === 'text' ?
                                                            <SendTextMessage user={user} spaceID={spaceID} setting={item} text={item.text} roomId={roomId} key={index + spaceID}
                                                            deleteMessage={deleteMessage}
                                                            /> :
                                                            <SendFileMessage user={user} spaceID={spaceID} setting={item} file={item.file} url={item.url} roomId={roomId} key={index + spaceID} 
                                                            deleteMessage={deleteMessage}
                                                            />

                                                   }

                                                </>

                                             );

                                          })
                                       }
                                    </>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>


                     {
                                (!isLock && !isBLocked) ? 
                                <div className="relative bottom-0 top-auto left-0 w-full px-3 overflow-y-auto rounded-bl-md rounded-br-md ">
                        <div className="w-full relative mb-3">
                        <div className={` ${isFocus && "comment-bar_active"} w-full h-full max-h-full flex bg-white items-center gap-1 border rounded-lg border-solid border-gray-200 p-revert`} onFocus={(e)=>{
                                 setIsFocus(true);
                              }}
                              outs
                              
                              onBlur={(e)=>{
                                 if(messageInput.length == 0)
                                 setIsFocus(false)
                              }}
                              >

<div className=" grow relative max-h-72">
                             <div className={`relative min-h-12 overflow-hidden comment-bar__editor ql-container `}>

                              <div contentEditable="true" dir="ltr" data-placeholder="Comment or type '/' for commands and AI actions" className={` ${ place && "ql-blank"}  ql-editor scroll-bar ltr:text-left rtl:text-right pt-3.5 px-4 pb-0 text-inherit text-sm font-normal break-words select-text outline-0 leading-6 min-h-12 overflow-y-auto whitespace-pre-wrap cursor-text`} onInput={(e)=>{
                                 console.log(e.target.textContent)
                                 setMessageInput(e.target.textContent)
                                 if(e.target.textContent.length <= 0) {
                                    setPlace(true)
                                 } else {
                                    setPlace(false)
                                 }
                              }} 
                              
                              // onFocus={(e)=>{
                              //    setIsFocus(true)
                              // }}

                              ref={inputElement}
                              > 
                              {/* {messageInput} */}
                              </div>
                           
                             </div>
                           </div>


                           <div className=" hidden items-center justify-end relative p-2 gap-1 comment-bar__footer">
                              <div className="flex min-h-8 h-fit overflow-hidden grow justify-end flex-nowrap items-center order-2 comment-bar__controls">
                                 <div className="flex justify-end flex-wrap h-8 overflow-hidden">


                                    <div className="relative">
                                       <div className="p-2 rounded-md border-0 cursor-pointer select-none hover:bg-gray-100 " role="button" onClick={(e)=>{
                                          setShowEmoji(true)
                                       }}>
                                          <div className="w-4 h-4 padding-revert color-700 flex items-center justify-center cursor-pointer">
                                          <svg width={'100%'} height={'100%'} fill="none" className="block" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                    <path d="M9 9h.01" />
                                    <path d="M15 9h.01" />
                                 </svg>
                                          </div>
                                       </div>
                                    </div>

                                    
                                    <div className="relative">
                                       <div className="p-2 rounded-md border-0 cursor-pointer select-none hover:bg-gray-100 " role="button">
                                          <div className="w-4 h-4 padding-revert color-700 flex items-center justify-center cursor-pointer">
                                          <svg width={'100%'} height={'100%'} fill="none" className="block" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m23 7-7 5 7 5V7z" />
  <rect width={15} height={14} x={1} y={5} rx={2} ry={2} />
</svg>
                                          </div>
                                       </div>
                                    </div>
                                    
                                    <div className="relative">
                                       <div className="p-2 rounded-md border-0 cursor-pointer select-none hover:bg-gray-100 " role="button">
                                          <div className="w-4 h-4 padding-revert color-700 flex items-center justify-center cursor-pointer">
                                          <svg width={'100%'} height={'100%'} fill="none" className="block" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <path d="M12 19v4" />
  <path d="M8 23h8" />
</svg>
                                          </div>
                                       </div>
                                    </div>
                                    
                                    <div className="relative">
                                       <div className="p-2 rounded-md border-0 cursor-pointer select-none hover:bg-gray-100 " role="button" onClick={(e) => {
                                 e.currentTarget.firstElement;
                                 console.log(e.currentTarget.firstElementChild)
                                 e.currentTarget.firstElementChild.click();

                              }} >

                                       <input type="file" name="file" id="file" className="hidden" onChange={(e) => {

const File = e.target.files[0];
console.log(File);

if (File) {
   if (File.type.startsWith('image')) {
      const reader = new FileReader();
      reader.readAsDataURL(File);
      reader.addEventListener('load', () => {
         console.log(reader.result);
         setMessage(prev => {
            return [...prev, {
               file: File,
               type: 'image',
               url: reader.result,
               process: 'sending',
               complete: false
            }]
         })
      });

   } else {
      setMessage(prev => {
         return [...prev, {
            file: File,
            type: 'file',
            process: 'sending',
            complete: false
         }]
      })
   }
}

}} />

                                          <div className="w-4 h-4 padding-revert color-700 flex items-center justify-center cursor-pointer">
                                          <svg width={'100%'} height={'100%'} fill="currentColor" className="block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z" />
</svg>
                                          </div>
                                       </div>
                                    </div>


                                 </div>
                              </div>


                              <div className="relative flex min-h-8 h-fit overflow-hidden justify-end margin-revert items-center order-2 flex-nowrap">
                                 <div>
                                    <button className="border-0 outline-0 whitespace-nowrap text-white cursor-pointer transition-all
                                    select-none comment-bar__send-btn block w-auto margin-revert text-sm font-medium rounded-md btn-revert py-2 px-3
                                    " onClick={(e) => {
                                       setMessage(prev => {
                                          return [...prev, {
                                             text: messageInput,
                                             type: 'text',
                                             process: 'sending',
                                             complete: false
                                          }]
                                       });
                                       setMessageInput('');
                                       inputElement.current.textContent = '';
                                    }}>
                                       Send
                                    </button>
                                 </div>

                              </div>

                           </div>

                           <button className="flex flex-nowrap shrink-0 items-center justify-center border-transparent text-sm font-medium
                           comment-bar__first-send-btn h-8 px-3 rounded-md ltr:mr-2 rtl:ml-2 cursor-not-allowed
                           ">
                              Send
                           </button>
                        </div>
                        </div>
                     </div> 
                     
                     :


<div className="relative bottom-0 top-auto left-0 w-full px-3 overflow-y-auto rounded-bl-md rounded-br-md ">
<div className="w-full relative mb-3">
<div className={` w-full h-full max-h-full flex bg-white items-center gap-1 border rounded-lg border-solid border-gray-200 p-revert`}>

<div className=" grow relative max-h-72">
                             <div className={`relative min-h-12 overflow-hidden `}>

                              <div dir="ltr" data-placeholder={`${isLock ? "this space chat have been locked." : "You have been blocked from this chat." }`} className={`ql-blank scroll-bar ltr:text-left rtl:text-right pt-3.5 px-4 pb-0 text-inherit text-sm font-normal break-words select-text outline-0 leading-6 min-h-12 overflow-y-auto whitespace-pre-wrap cursor-default text-center`}
                              > 
                              {/* this space is locked. */}
                              </div>
                           
                             </div>
                             </div>
</div>
</div>
</div>

                            }

                  </div>
               </div>
            </div>
         </div>

         {
            showEmoji && <Emoji setShowEmoji={setShowEmoji} inputElement={inputElement} setMessageInput={setMessageInput} />
         }

      </>
   );
}

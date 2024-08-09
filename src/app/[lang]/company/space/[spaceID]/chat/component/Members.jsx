"use client";
import { useState,useEffect } from "react";
import MemberOption from "./member/MemberOption";
import MemberElement from "./member/MemberElement";
import Notification from "@/app/[lang]/component/Notification";
import Loading from "@/app/[lang]/component/Loading";

export default function Members({user,spaceID,roomId}) {

   const [scroll, setScroll] = useState(0);
   const [members, setMembers] = useState([]);
   const [option, setOption] = useState(false);
   const [top, setTop] = useState('');
   const [left, setLeft] = useState('');
   const [employee, setEmployee] = useState('');
   const [message, setMessage] = useState('');
   const [title, setTitle] = useState('');
   const [notification, setNotification] = useState(false);
   const [loader, setLoader] = useState(true);


   useEffect(() => {

      setLoader(true)

      const abortController = new AbortController();

      fetch(
         `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/members?page=${1}&recordNumber=${20}`,
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
               setLoader(false)
            } else {
               // setErrorMessage(false);
               console.log("data space dd....", data);
               // setEmployees([...Object.values(data.data)]);
               setMembers([...Object.values(data.data.result)]);
               setLoader(false)
            }
         })
         .catch((error) => {
            console.log(error);
            setLoader(false)
         });

         return () => {
            abortController.abort();
         };

   },[]);

   return (
      <>
      <aside
      className={`w-64 h-full border-r border-solid border-r-gray-200 pt-2 pb-2 flex flex-col member-aside-chatting`}
      >
              <div>
            <div className="ml-4 mr-4 mb-3">
               <span className="text-sm text-2a2e34 border border-solid gap-2 outline-none input-search-shadow border-gray-200 rounded-md flex items-stretch min-h-8 overflow-hidden ps-3 pe-3 ">
                  <span
                     style={{ color: "#636c76" }}
                     className="self-center shrink-0"
                  >
                     <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                        <path d="m21 21-4.35-4.35"></path>
                     </svg>
                  </span>
                  <input
                     type="text"
                     placeholder="Go to file"
                     className="border-0 outline-0 w-full"
                  />
                  <span
                     className="self-center shrink-0"
                     style={{ color: "#636c76" }}
                  >
                     <div className="ltr:-mr-1.5 rtl:-ml-1.5">
                        <kbd>t</kbd>
                     </div>
                  </span>
               </span>
            </div>
         </div>


         <div className="flex-1" style={{ maxHeight: "395px" }}>
            {scroll > 0 && <div className="duPwcy"></div>}
            <div
               className="max-h-full overflow-auto scroll-bar"
               onScroll={(e) => {
                  setScroll(e.target.scrollTop);
               }}
            >

                {
                  loader ? <Loading styleClass='w-full h-[100px] flex items-center justify-center' /> :
                  <ul className="ps-4 pe-4 pb-2">

                  {
                     members?.map((item,index)=>{

                        return (

                           <MemberElement member={item} key={item.user_id} setLeft={setLeft} setTop={setTop} setOption={setOption} option={option} setEmployee={setEmployee}  />

                        );
                     })
                  }

               </ul>
                }

            </div>
         </div>

      </aside>

{
   option && 
   <MemberOption spaceID={spaceID} setOption={setOption} top={top} left={left} employee={employee} roomId={roomId}
   setNotification={setNotification}
   setMessage={setMessage}
   setTitle={setTitle}
   />
}

{
            notification && <Notification message={message} title={title}  />
        }

      </>
   );

}
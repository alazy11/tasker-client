"use client";

import { useState,useTransition,useEffect } from "react";
import TopMiddleNav from "../../component/TopMiddleNav";
import TasksElement from "./TasksElement";
import dynamic from "next/dynamic";
import TaskSetting from "./setting/TaskSetting";
import ManagerModel from "../../../component/model/ManagerModel";


const AddTask = dynamic(() => import("./AddTask"));
const Alert = dynamic(() => import("@/app/[lang]/component/Alert"));


function inputHandler(value, setUser,spaceID) {
   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/members/search?member=${value}&spaceID=${spaceID}`, {
      credentials: "include",
      headers: {
         "content-type": "application/json",
         "cache-control": "no-cache",
      },
   })
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            console.log("employee faaaaaaa.....", data.data);
         } else {
            console.log("employee user.....", [...Object.values(data.data)]);
            setUser([...Object.values(data.data)]);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}



export default function TaskPage({ user,spaceID,projectID }) {

   const [taskModel,setTaskModel] = useState(false)
   const [page, setPage] = useState(1);
   const [recordNumber, setRecordNumber] = useState(10);
   const [totalSpace, setTotalSpace] = useState(0);
   const [pageStart, setPageStart] = useState((page - 1) * recordNumber + 1);
   const [pageEnd, setPageEnd] = useState(page * recordNumber);
   const [projectElement, setProjectElement] = useState([]);
   const [isPending, startTransition] = useTransition({
      // timeoutMs: 1000,
   });
   const [referesh, setReferesh] = useState(false);
   const [projectInfo, setProjectInfo] = useState({});
   const [plan, setPlan] = useState(false);
   const [taskInfo, setTaskInfo] = useState({});
   const [process, setProcess ] = useState('add');
   const [folderPublic, setFolderPublic ] = useState('');

   const [setting, setSetting] = useState(false);
   const [settingClose,setSettingClose] = useState(false);
   const [managerModel, setManagerModel] = useState(false);
   const [manager, setManager] = useState([]);
   const[top, setTop] = useState("");
   const[left, setLeft] = useState("");

   console.log(process.env)

   useEffect(() => {
      const abortController = new AbortController();

      // fetch(`${process.env?.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}`, {
      // fetch(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}`, {
      fetch(`https://backend.tasker-tool.com/en/company/space/${spaceID}/project/${projectID}`, {
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
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("data space faild....", data);
            } else {
               setProjectInfo(data.data);
               setPlan(true);
            }
         })
         .catch((error) => {
            console.log(error);
         });

      return () => {
         abortController.abort();
      };
   }, [referesh]);



   useEffect(() => {
      const abortController = new AbortController();

      // fetch(`${process.env?.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/folder/public/get`, {
      // fetch(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/public/get`, {
      fetch(`https://backend.tasker-tool.com/en/company/space/${spaceID}/project/${projectID}/folder/public/get`, {
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
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("data space faild....", data);
            } else {
               setFolderPublic(data.data.folder_path);
            }
         })
         .catch((error) => {
            console.log(error);
         });

      return () => {
         abortController.abort();
      };
   }, [referesh]);




   return (

      <>

      {
         plan && (!projectInfo.assgin_phase ? <Alert type={'warning'} message={"you Don't Add Phases Information yet, Team Member Can't Access this Project Before You Add Information.  "} /> : '')
      }

         <TopMiddleNav
            setEmployee={setTaskModel}
            projectID={projectID}
            spaceID={spaceID}
            active = {!plan}
            setSetting={setSetting} 
         >
            Add Task
         </TopMiddleNav>

         <div className='ps-4 pe-4 h-12 w-full'>
      <div className='flex items-center justify-between pt-2 pb-2'>
      <ul className='flex items-center gap-1 flex-1'>
         <li>
            <button className='flex items-center gap-0.5 pt-1 pb-1 pe-2 ps-2 rounded-xl border-e8eaed text-656f7d text-xs font-medium tag active hover:bg-gray-200'>
               <span className='w-4 h-4'>
                  <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.514 2.126a1 1 0 0 1 .972 0l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1 0-1.748l9-5ZM5.06 8 12 11.856 18.94 8 12 4.144 5.06 8Z"></path>
<path d="M2.126 11.514a1 1 0 0 1 1.36-.388L12 15.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36Z"></path>
<path d="M2.126 15.514a1 1 0 0 1 1.36-.388L12 19.856l8.514-4.73a1 1 0 0 1 .972 1.748l-9 5a1 1 0 0 1-.972 0l-9-5a1 1 0 0 1-.388-1.36Z"></path>
</svg>
               </span>
All
            </button>
         </li>
         <li>
            <button className='flex items-center gap-0.5 pt-1 pb-1 pe-2 ps-2 rounded-xl border-e8eaed text-656f7d text-xs font-medium tag hover:bg-gray-200'>
               <span className='w-4 h-4'>
                                    <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-1.017 1.742c.011.084.017.17.017.258v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-.087.006-.174.017-.258A2 2 0 0 1 2 7V5Zm18 2V5H4v2h16ZM5 9v10h14V9H5Zm3 3a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Z"></path>
</svg>
               </span>
Archive
            </button>
         </li>
      </ul>

      <div className='flex items-center'>
         <div>
            <button>

            </button>
         </div>
         <div>
         <input type="text" className='text-sm w-52 h-8 rounded-md min-w-0 ps-3 pe-3 border-0 box-shadow-search outline-none' placeholder='Search Space By Name...'
         // value={member}
         autoComplete="off"
         onChange={(e) => {
            // setMember(e.target.value);
            // startTransition(() => {
            //    inputHandler(e.target.value, setProjectElement,spaceID);
            // });
         }}
         />
         </div>
      </div>
      </div>
   </div>

         {/* <div className="flex-1 w-full">
         
         </div> */}




<div className="relative grow min-h-0 grid grid-container-spaces">
         <div className={`grow overflow-auto mr-0 scroll-bar relative`}>
            <div className="flex flex-col relative h-full table-grid-container" role="grid">
                        {/* table header */}
                     <div role="presentation" className="h-7 min-h-7 flex w-full whitespace-nowrap relative overflow-hidden border-b border-solid table-grid-container_header">
                        <div role="presentation" className="relative h-full flex-1 overflow-hidden">
                            <div role="row" aria-rowindex="1" className="h-full w-full flex">

                                <div role="columnheader" col-id="name" aria-colindex="2" tabIndex={"-1"} className="inline-flex items-center h-full justify-center overflow-hidden cursor-default table-grid-header-cell" style={{width:'5%'}}>
                                    <div className="table-grid-header-cell_text justify-center">
                                        <div className="table-grid-header-cell_text-title text-center">
                                            #
                                        </div>

                                    </div>
                                </div>


                                <div role="columnheader" col-id="name" aria-colindex="2" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'18%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8.685.245A1 1 0 0 0 7.376.242L2.408 4.524a1 1 0 0 0-.105 1.41l1.139 1.321a1 1 0 0 0 1.41.105L8.02 4.629l3.135 2.724a1 1 0 0 0 1.41-.099l1.144-1.316a1 1 0 0 0-.098-1.41L8.685.245zM3.06 5.282 8.03 1l4.926 4.282-1.144 1.316L8.35 3.59a.5.5 0 0 0-.654-.001L4.199 6.602 3.06 5.282zm1.91 4.331a1.022 1.022 0 0 0-1.395-.156l-1.384 1.06a.984.984 0 0 0-.164 1.412c1.659 1.983 3.683 3.07 6.003 3.07 2.327 0 4.336-1.093 5.95-3.091a.983.983 0 0 0-.188-1.41l-1.404-1.034a1.023 1.023 0 0 0-1.391.18c-.948 1.14-1.915 1.611-2.967 1.611-1.064 0-2.064-.482-3.06-1.642zm-.787.637h.004a.036.036 0 0 1 .024.014c1.134 1.321 2.392 1.991 3.819 1.991 1.417 0 2.647-.662 3.736-1.972a.04.04 0 0 1 .024-.014h.005l1.394 1.027C11.73 13.094 9.994 14 8.03 14c-1.96 0-3.716-.902-5.221-2.695l1.375-1.054z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            Name
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Assign" aria-colindex="3" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'12%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M5 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm2 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1.75 9A1.25 1.25 0 0 0 10 12.75a3.744 3.744 0 0 0-1.695-3.137A3.732 3.732 0 0 0 6.25 9h-2.5A3.75 3.75 0 0 0 0 12.75C0 13.44.56 14 1.25 14h7.5zM1 12.75A2.75 2.75 0 0 1 3.75 10h2.5A2.75 2.75 0 0 1 9 12.75a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25z" clipRule="evenodd"></path>
                                        <path d="M14.75 14c.69 0 1.25-.56 1.25-1.25A3.75 3.75 0 0 0 12.25 9H10.5a.5.5 0 0 0 0 1h1.75A2.75 2.75 0 0 1 15 12.75a.25.25 0 0 1-.25.25H11.5a.5.5 0 0 0 0 1h3.251zM11 8a3 3 0 1 0-2.169-5.072c-.19.2-.129.514.1.67.228.154.536.088.743-.095a2 2 0 1 1 0 2.993c-.207-.182-.514-.248-.743-.093-.229.155-.29.47-.1.67a2.991 2.991 0 0 0 2.17.927z"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            Assign
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Date" aria-colindex="5" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'12%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                            <path d="M4.5 7.5A.5.5 0 0 1 5 7h2.5a.5.5 0 0 1 .4.8l-.951 1.268A1.5 1.5 0 0 1 6.5 12H5a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 0-1H6a.5.5 0 0 1-.4-.8L6.5 8H5a.5.5 0 0 1-.5-.5zm6.5 0V11h.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h.5V8.707l-.396.397a.5.5 0 0 1-.708-.708l1.245-1.245a.504.504 0 0 1 .578-.1.502.502 0 0 1 .28.436V7.5z"></path>
                                            <path fillRule="evenodd" d="M11 1H5V.5a.5.5 0 1 0-1 0V1H2.5A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1H12V.5a.5.5 0 0 0-1 0V1zM4.5 3a.5.5 0 0 1-.5-.5V2H2.5a.5.5 0 0 0-.5.5V4h12V2.5a.5.5 0 0 0-.5-.5H12v.5a.5.5 0 1 1-1 0V2H5v.5a.5.5 0 0 1-.5.5zM2 5v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5H2z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            start DATE
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Date" aria-colindex="5" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'12%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                            <path d="M4.5 7.5A.5.5 0 0 1 5 7h2.5a.5.5 0 0 1 .4.8l-.951 1.268A1.5 1.5 0 0 1 6.5 12H5a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 0-1H6a.5.5 0 0 1-.4-.8L6.5 8H5a.5.5 0 0 1-.5-.5zm6.5 0V11h.5a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h.5V8.707l-.396.397a.5.5 0 0 1-.708-.708l1.245-1.245a.504.504 0 0 1 .578-.1.502.502 0 0 1 .28.436V7.5z"></path>
                                            <path fillRule="evenodd" d="M11 1H5V.5a.5.5 0 1 0-1 0V1H2.5A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1H12V.5a.5.5 0 0 0-1 0V1zM4.5 3a.5.5 0 0 1-.5-.5V2H2.5a.5.5 0 0 0-.5.5V4h12V2.5a.5.5 0 0 0-.5-.5H12v.5a.5.5 0 1 1-1 0V2H5v.5a.5.5 0 0 1-.5.5zM2 5v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5H2z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            end DATE
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Status" aria-colindex="4" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'12%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.667.667a.833.833 0 1 0 0 1.666h.833v13.334h-.833a.833.833 0 1 0 0 1.666H14a.833.833 0 0 0 0-1.666h-.833V2.333H14a.833.833 0 0 0 0-1.666h-3.333zm-5.834 2.5h5v1.666h-5a2.5 2.5 0 0 0-2.5 2.5v3.334a2.5 2.5 0 0 0 2.5 2.5h5v1.666h-5a4.167 4.167 0 0 1-4.166-4.166V7.333a4.167 4.167 0 0 1 4.166-4.166zm10.834 7.5c0 .74-.322 1.405-.834 1.863v1.957a4.168 4.168 0 0 0 2.5-3.82V7.333a4.168 4.168 0 0 0-2.5-3.82V5.47c.512.458.834 1.123.834 1.863v3.334zM4.833 6.5a.833.833 0 0 0 0 1.667h.834v2.5a.833.833 0 0 0 1.666 0v-2.5h.834a.833.833 0 0 0 0-1.667H4.833z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            Description
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Status" aria-colindex="4" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'12%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 3.5A2.5 2.5 0 0 1 3.5 1h9A2.5 2.5 0 0 1 15 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5v-9zM3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9zM4 5.5A1.5 1.5 0 0 1 5.5 4h5A1.5 1.5 0 0 1 12 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 10.5v-5zM5.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                            Status
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Priority" aria-colindex="6" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden cursor-default table-grid-header-cell" style={{width:'12%'}}>
                                    <div className="table-grid-header-cell_text">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M3 .5a.5.5 0 0 1 1 0V1h9.5a.5.5 0 0 1 .362.845L11.124 5.5l2.74 3.657A.498.498 0 0 1 13.5 10H4v5.5a.5.5 0 0 1-1 0V.5zm7.086 5.28a.49.49 0 0 0 .028.038L12.5 9H4V2h8.498l-2.384 3.182a.49.49 0 0 0-.028.037l-.002.003a.498.498 0 0 0 0 .555l.002.003z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>

                                        <div className="table-grid-header-cell_text-title">
                                        Priority 
                                        </div>

                                    </div>
                                </div>

                                <div role="columnheader" col-id="Action" aria-colindex="7" tabIndex={"-1"} className="inline-flex items-center h-full overflow-hidden justify-center cursor-default table-grid-header-cell" style={{width:'5%'}}>
                                    <div className="table-grid-header-cell_text justify-center">
                                        <div className="table-grid-header-cell_text-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-4.889a1 1 0 0 1 1 1V11h3.111a1 1 0 1 1 0 2H13v3.111a1 1 0 1 1-2 0V13H8.111a1 1 0 1 1 0-2H11V8.111a1 1 0 0 1 1-1z" clipRule="evenodd"></path>
                                        </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div role="presentation" className="table-grid-body">
                    <TasksElement
                        user={user}
                        pageStart={pageStart}
                        pageEnd={pageEnd}
                        page={page}
                        recordNumber={recordNumber}
                        setTotalSpace={setTotalSpace}
                        spaceID={spaceID}
                        projectElement={projectElement}
                        setProjectElement={setProjectElement}
                        referesh={referesh}
                        setReferesh={setReferesh}
                        projectID={projectID}
                        setTaskModel={setTaskModel}
                        setTaskInfo={setTaskInfo}
                        setProcess = {setProcess}
                     />
                    </div>
</div>

            
         </div>
         <div className={`flex items-center justify-end pe-12 ps-12`}>
            <div className="flex items-center gap-1">
               <p className="flex items-center gap-1 color-544dc9 font-semibold">
                  <span className="flex items-center ">
                     <span>{page * recordNumber - recordNumber + 1}</span>
                     <span>-</span>
                     <span>
                        {page * recordNumber > totalSpace
                           ? totalSpace
                           : page * recordNumber}
                     </span>
                  </span>

                  <span>of</span>

                  <span>{totalSpace}</span>
               </p>
               <div className="flex items-center gap-1.5">
                  <button
                     className={`w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 bg-gray-200 color-544dc9 ${
                        page == 1 ? "cursor-not-allowed" : "cursor-pointer"
                     }`}
                     disabled={page == 1 ? true : false}
                     onClick={(e) => {
                        setPage((prev) => {
                           setPageStart((prev - 1 - 1) * recordNumber + 1);
                           setPageEnd((prev - 1) * recordNumber);
                           return prev - 1;
                        });
                     }}
                  >
                     <svg
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M14.707 5.293a1 1 0 0 1 0 1.414L9.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"></path>
                     </svg>
                  </button>
                  <button
                     className={`w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 bg-gray-200 color-544dc9 ${
                        page * recordNumber > totalSpace
                           ? "cursor-not-allowed"
                           : "cursor-pointer"
                     }`}
                     disabled={page * recordNumber > totalSpace ? true : false}
                     onClick={(e) => {
                        // setPage((prev) => {
                        //    setPageStart((prev + 1 - 1) * recordNumber + 1);
                        //    setPageEnd((prev + 1) * recordNumber);
                        //    return prev + 1;
                        // });
                     }}
                  >
                     <svg
                        width="100%"
                        height="100%"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0Z"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>

{
   taskModel && <AddTask setModel={setTaskModel} folderPublic={folderPublic} process={process} setTaskInfo={setTaskInfo} taskInfo={taskInfo} spaceID={spaceID} projectID={projectID}  referesh={referesh} setReferesh={setReferesh} />
}
         

      </div>

      {
            setting && <TaskSetting setSetting={setSetting} setSettingClose={setSettingClose} projectID={projectID} settingClose={settingClose}
            spaceID={spaceID} 
            // roomId={roomId}
            setManagerModel={setManagerModel}
            setManager={setManager}
            manager={manager}
            setTop={setTop} setLeft={setLeft} 
            />
}

{managerModel && (
            <ManagerModel
               setManagerModel={setManagerModel}
               setManager={setManager}
               manager={manager}
               spaceID={spaceID}
               top={top}
               left={left}
            />
         )}

      </>

   );
}
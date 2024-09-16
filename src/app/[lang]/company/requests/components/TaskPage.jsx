"use client";

import { useState,useEffect, useContext } from "react";
import TaskGroup from "./TaskGroup";
import AddTask from "./AddTask";
import AddFile from "./AddFile";
import CompanyInformation from "@/app/[lang]/company/component/UserContext";


export default function TaskPage () {

    const user = useContext(CompanyInformation)
    const[task,setTask] = useState(false);
    const[item,setItem] = useState(false);
    const[taskContainer,setTaskContainer] = useState([]);
    const[taskTodo,setTaskTodo] = useState([]);
    const[taskReject,setTaskReject] = useState([]);
    const[taskInProgress,setTaskInProgress] = useState([]);
    const[taskInReview,setTaskInReview] = useState([]);
    const[taskComplete,setTaskComplete] = useState([]);
    const[modelFile,setModelFile] = useState(false);
    const[spaceID,setSpaceID] = useState(false);
    const[projectID,setProjectID] = useState(false);


    useEffect(()=>{
        console.log(taskTodo)
    },[taskTodo])


    // useEffect(() => {
    //     const abortController = new AbortController();
  
    //     fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/task`, {
    //        signal: abortController.signal,
    //        credentials: "include",
    //        headers: {
    //           "cache-control": "no-cache",
    //        },
    //     })
    //        .then((res) => {
    //           return res.json();
    //        })
    //        .then((data) => {
    //           if (data.status === "fail" || data.status === "error") {
    //              // setErrorMessage(true);
    //              // setErrorText(data?.message);
    //              console.log("data space faild....", data);
    //           } else {
    //             //  setProjectInfo(data.data);
    //             //  setPlan(true);
    //             setTaskContainer(data.data);
    //             console.log("data all space....",data.data)
    //             data.data.map(item=>{
    //                 if(item.state == 'todo') {
    //                     setTaskTodo(prev=>{
    //                         return[...prev,item];
    //                     })
    //                 } else if(item.state == 'inprogress') {
    //                     setTaskInProgress(prev=>{
    //                         return[...prev,item];
    //                     })
    //                 } else if(item.state == 'inreview') {
    //                     setTaskInReview(prev=>{
    //                         return[...prev,item];
    //                     })
    //                 } else {
    //                     setTaskComplete(prev=>{
    //                         return[...prev,item];
    //                     })
    //                 }
    //             })

    //           }
    //        })
    //        .catch((error) => {
    //           console.log(error);
    //        });
  
    //     return () => {
    //        abortController.abort();
    //     };
    //  }, []);


    return (
        <>
                <div className="flex-1 overflow-hidden">
        <div className="grow  relative board-view scroll-bar gap-2">

            <TaskGroup state="todo" setItem={setItem} setModelFile={setModelFile} tasks={taskTodo} setTask={setTask} stateText={'new'} />
            <TaskGroup state="rejected" setItem={setItem} setModelFile={setModelFile} tasks={taskReject} setTask={setTask} stateText={'rejected'} />
            {/* <TaskGroup state="inprogress" setItem={setItem} setModelFile={setModelFile} tasks={taskInProgress} setTask={setTask} stateText={"in progress"} /> */}
            {/* <TaskGroup state="inreview" setItem={setItem} setModelFile={setModelFile} tasks={taskInReview} setTask={setTask}  stateText={"in review"} /> */}
            <TaskGroup state="complete" setItem={setItem} setModelFile={setModelFile} tasks={taskComplete}  setTask={setTask}  stateText={"Accepted"} />

        </div>
        </div>
        
        {
            task && <AddTask task={item} setTask={setTask} />
        }
        {
            modelFile && <AddFile setModel={setModelFile} user={user} task={item} />
         }

        </>
    );

}
"use client";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskGroup({state,stateText,setTask,tasks,setItem,setModelFile}) {
    // const [tasks, setTasks] = useState(item);

    useEffect(()=>{
        console.log("state",state)
        console.log("sdlfhlsdkf",tasks)
    },[tasks])

    return(
        <div>
        <div className={`group-list ${state}`}>


            <div>
                <div className="board-group-header">

                    <div className="board-group-header__metadata">
                        <div  _nghost-ng-c3350699415="">
                            <div className="status">

                                <div className="cu-status-group-header__icon">
                                    <div className="cu-status-indicator-wrapper">
                                        <div className="cu-status-indicator ">
                                            <div className="status-indicator-icon">
                                            <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                                <path  fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" clip-rule="evenodd" ></path><circle _ngcontent-ng-c2539684577="" cx="12" cy="12" r="6" ></circle>
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <span className="cu-status-group-header__label">
                                    {stateText}
                                </span>

                            </div>
                        </div>

                        <div className="counter">
                            <span className="label" _ngcontent-ng-c1496525561="" >
                                <span className="label__value">
                                    {tasks.length}
                                </span>
                            </span>
                        </div>

                    </div>

                </div>
            </div>


            <div className="w-full h-full overflow-hidden">
                <div className="cdk-virtual-scroll-viewport scroll-bar">
                    <div>
                        <div className="board-group__viewport-inner">

                            <ul className="board-group__task-list">

                                {
                                    tasks.map((item,index)=>{
                                        return (
                                            <TaskCard key={item.task_id} item={item}
                                            setItem={setItem} setTask={setTask}
                                            setModelFile={setModelFile}
                                            />
                                        );
                                    })
                                }



                            </ul>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    );

}
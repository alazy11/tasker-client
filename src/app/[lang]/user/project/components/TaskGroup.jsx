"use client";
import { useState } from "react";


export default function TaskGroup({state,stateText}) {
    const [tasks, setTasks] = useState([1,2,3,4,5,6,7,8,9])
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
                                    32
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
                                            <li key={index} className="board-group__task-list-item">
                                            <div className="board-task">

                                                <div _nghost-ng-c966482499="">
                                                    <div className="w-full">
                                                        <div className="board-task__name">
                                                            <a href="#" className="board-task__name-link">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, omnis.
                                                            </a>
                                                        </div>

                                                        <div _nghost-ng-c1576782436="">
                                                            <span className="location__link">
                                                                In
                                                            </span>
                                                            &nbsp;
                                                            <span className="location__link">
                                                            Project 1 
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>


{/* /////////////////////////////////// */}
<div>
<div className="h-7 px-0.5 me-2 ms-2 flex items-center gap-3 ">
<div>
    <div className="flex items-center justify-center w-4 h-4" style={{color:"var(--cu-status-open)"}} >
    <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                                        <path  fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" clip-rule="evenodd" ></path><circle _ngcontent-ng-c2539684577="" cx="12" cy="12" r="6" ></circle>
                                                    </svg>
    </div>
</div>

<span className="cu-task-row-status__badge-label">
                                            to do
                                        </span>

</div>
</div>


<div>
<div className="h-7 px-0.5 me-2 ms-2 flex items-center gap-3 ">
<div>
    <div className="flex items-center justify-center w-4 h-4" style={{color:"var(--cu-content-tertiary)"}} >
    <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
    <path _ngcontent-ng-c2539684577="" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.395 12.807A7.049 7.049 0 0 1 8.9 13.462a4.375 4.375 0 1 1 6.2 0 7.049 7.049 0 0 1 3.295 3.345A8 8 0 0 0 12 4Zm4.85 14.363A5.043 5.043 0 0 0 12 14.75a5.043 5.043 0 0 0-4.85 3.613A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 4.85-1.637ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.978 9.978 0 0 1-3.375 7.491A9.966 9.966 0 0 1 12 22a9.966 9.966 0 0 1-6.625-2.509A9.978 9.978 0 0 1 2 12Zm10-4a2.375 2.375 0 1 0 0 4.75A2.375 2.375 0 0 0 12 8Z" clip-rule="evenodd"></path>
    </svg>
    </div>
</div>

<div>
                    <div className="cu-avatar">
                        <div>
                            {/* <div className="status-indicator"> */}
                            <div className="absolute w-4 h-4 flex items-center justify-center left-3">
                                {/* --cu-avatar-user-offline */}
                            <svg width={".6rem"} height={".6rem"} className="block" viewBox="0 0 24 24" fill="none" >
                                <path  fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z" clip-rule="evenodd" ></path><path _ngcontent-ng-c2539684577="" fill="var(--cu-avatar-user-online)" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"></path>
                            </svg>
                            </div>
                        </div>

                        A
                    </div>
                </div>

</div>
</div>


<div>
<div className="h-7 px-0.5 me-2 ms-2 flex items-center gap-3 ">
<div>
    <div className="flex items-center justify-center w-4 h-4" style={{color:"var(--cu-content-tertiary)"}} >
    <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
    <path _ngcontent-ng-c2539684577="" fill-rule="evenodd" d="M7 1a1 1 0 0 1 1 1v1h8V2a1 1 0 1 1 2 0v1.126c1.725.444 3 2.01 3 3.874v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4.002 4.002 0 0 1 3-3.874V2a1 1 0 0 1 1-1Zm0 4a2 2 0 0 0-2 2v1h14V7a2 2 0 0 0-2-2H7Zm12 5H5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7Zm-4.5 5.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z" clip-rule="evenodd"></path>  
     </svg>
    </div>
</div>
{/* due-date__info-value-end */}
<span className="cu-task-row-status__badge-label lowercase" style={{textTransform:'capitalize'}}>
                                            May 20
                                        </span>

</div>
</div>


{/* --cu-priority-urgent: var(--cu-red700);
    --cu-priority-high: var(--cu-yellow700);
    --cu-priority-normal: var(--cu-neonBlue600);
    --cu-priority-low: var(--cu-grey500); */}

<div>
<div className="h-7 px-0.5 me-2 ms-2 flex items-center gap-3 ">
<div>
    <div className="flex items-center justify-center w-4 h-4" style={{color:"var(--cu-yellow700)"}} >
    <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
    <path _ngcontent-ng-c2539684577="" fill-rule="evenodd" d="M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-6h13a1 1 0 0 0 .858-1.514L17.166 9l2.692-4.486A1 1 0 0 0 19 3H6Z" clip-rule="evenodd" ></path> 
    </svg>
    </div>
</div>
{/* due-date__info-value-end */}
<span className="cu-task-row-status__badge-label lowercase " style={{textTransform:'capitalize'}}>
                                           High
                                        </span>

</div>
</div>


{/* /////////////////////////////////// */}

                                            </div>
                                        </li>
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
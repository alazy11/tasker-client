"use client";

import { useState } from "react";
import TaskGroup from "./TaskGroup";


export default function TaskPage () {


   

    return (
        <div className="flex-1 overflow-hidden">
        <div className="grow  relative board-view scroll-bar gap-2">

            <TaskGroup state="todo" stateText={'to do'} />
            <TaskGroup state="inprogress" stateText={"in progress"} />
            <TaskGroup state="inreview" stateText={"in review"} />
            <TaskGroup state="complete" stateText={"complete"} />

        </div>
        </div>
    );

}
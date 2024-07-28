"use client";
import { useState } from "react";
import TaskElement from "./task/TaskElement";
import TopNavInbox from './TopNavInbox';
import ProjectElement from "./project/ProjectElement";

export default function InboxPage () {

    const[page, setPage] = useState('project');

    return(
        <div className='flex flex-col h-full'>
        <TopNavInbox setPage={setPage}  />
        
    <div className="flex-1 overflow-hidden">
<div className="grow overflow-auto scroll-bar relative">

    {
        page === 'project' ? 
        <ProjectElement /> :
        <TaskElement />
    }
</div>
        </div>
        
        </div>
    )
}
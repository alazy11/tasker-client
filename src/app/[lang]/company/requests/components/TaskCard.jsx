
"use client";


function handelDownload({user, spaceID, projectID, folderInfo}) {

    let {folder_path,name} = folderInfo;
    let url= '';
 
    // if(folderInfo.kind === 'file') {
       url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/task/download?folder=${JSON.stringify({folder_path,name})}`;
    // } else {
       // url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/folder/${folderInfo.folder_id}/download?folder=${JSON.stringify({folder_path,name})}`;
    // }
 
    window.location.href = url;
 
 }
 



export default function TaskCard({item,setTask,setItem,setModelFile}) {


    return (
        <li className="board-group__task-list-item relative">

<div className="actions" _ngcontent-ng-c3697151569="" >
    <div className="actions__buttons">
        <button className="btn-normal actions__buttons_item bg-transparent" onClick={(e)=>{
              let folderInfo = {
               folder_path:item.download_folder_path,
               name:item.title
            }
            handelDownload({folderInfo})
        }}>
            <div _nghost-ng-c4133689536="">
            <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor">
                <path  fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V4a1 1 0 0 1 1-1ZM3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" clip-rule="evenodd" ></path>
            </svg>
            </div>
        </button>
        <button className="btn-normal actions__buttons_item bg-transparent" onClick={(e)=>{
            setItem(item);
            setModelFile(true);
        }}>
            <div _nghost-ng-c4133689536="">
            <svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                <path  fill-rule="evenodd" d="M14.25 4a3.75 3.75 0 0 0-3.75 3.75V14a1.5 1.5 0 0 0 3 0V8a1 1 0 1 1 2 0v6a3.5 3.5 0 1 1-7 0V7.75a5.75 5.75 0 0 1 11.5 0V14a8 8 0 1 1-16 0V8a1 1 0 0 1 2 0v6a6 6 0 0 0 12 0V7.75A3.75 3.75 0 0 0 14.25 4Z" clip-rule="evenodd" ></path>
            </svg>
            </div>
        </button>
    </div>

</div>

        <div className="board-task">

            <div _nghost-ng-c966482499="">
                <div className="w-full">
                    <div className="board-task__name">
                        <button className="board-task__name-link border-0" onClick={(e)=>{
                            setTask(true);
                            setItem(item);
                        }}>
                            {item.title}
                        </button>
                    </div>

                    <div _nghost-ng-c1576782436="">
                        <span className="location__link">
                            In
                        </span>
                        &nbsp;
                        <span className="location__link">
                        {item.space}
                        </span>
                        <span className="location__link">
                        &nbsp;
                        /
                        &nbsp;
                        </span>
                        
                        <span className="location__link">
                        {item.project}
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
{item.end_date}
    </span>

</div>
</div>

<div>
<div className="h-7 px-0.5 me-2 ms-2 flex items-center gap-3 ">
<div>
<div className="flex items-center justify-center w-4 h-4" style={{
    
    color:`${item.priority == "urgent" ? "var(--cu-red700)" : item.priority == "high" ? "var(--cu-yellow700)" : item.priority == "normal" ? "var(--cu-neonBlue600)"  : "var(--cu-grey500)" }`}} >
<svg  width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
<path _ngcontent-ng-c2539684577="" fill-rule="evenodd" d="M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0v-6h13a1 1 0 0 0 .858-1.514L17.166 9l2.692-4.486A1 1 0 0 0 19 3H6Z" clip-rule="evenodd" ></path> 
</svg>
</div>
</div>
{/* due-date__info-value-end */}
<span className="cu-task-row-status__badge-label lowercase " style={{textTransform:'capitalize'}}>
{item.priority}
    </span>

</div>
</div>


{/* /////////////////////////////////// */}

        </div>
    </li>
    );

}
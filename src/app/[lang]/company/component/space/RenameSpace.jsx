"use client";
import ModelOverlay from "@/app/[lang]/component/ModelOverlay";
import Loading from "@/app/[lang]/component/Loading";
import { useState } from "react";

function renameSpace(spaceID,spaceName,setLoader,setRename,setSpaceInfo) {
    setLoader(true);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/rename`, {
        method:"PUT",
        credentials: "include",
        headers: {
           "content-type": "application/json",
           "cache-control": "no-cache",
        },
        body:JSON.stringify({name:spaceName})
     })
        .then((res) => {
           return res.json();
        })
        .then((data) => {
           if (data.status === "fail" || data.status === "error") {
              // setErrorMessage(true);
              // setErrorText(data?.message);
              console.log("employee faaaaaaa.....", data.data);
              setLoader(false);
           } else {
              console.log("rename space.....", data.data);
              setSpaceInfo(prev=>{
                return {
                    ...prev,
                    title:spaceName
                }
              })
              setRename(false);
           }
        })
        .catch((error) => {
           console.log(error);
           setLoader(false);
        });
}



export default function RenameSpace({setRename,spaceID,spaceInfo,setSpaceInfo}) {


    const [loader, setLoader] = useState(false);
    const [spaceName, setSpaceName] = useState(spaceInfo.title);

    return (
        <ModelOverlay showModel={setRename}>
        <div
           className={`bg-white w-480px h-auto flex flex-col self-start rounded-xl overflow-hidden relative z-2000 rename-space`}
           role="dialog"
        style = {{backgroundColor:'var(--cu-background-subtle)'}}
        >
           <div className="w-full h-full">

            <div className="cu-create-project-modal__title relative">
            Edit Space name

            <button className="cu-modal__close ltr:right-12" onClick={()=>{
                setRename(false)
            }}>
                <span>
                <svg width={"100%"} height={"100%"} className="block" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2.5"><path d="m2 2 20 20M22 2 2 22"></path></g></svg>
                </span>
            </button>

            </div>

            <div className="cu-create-project-modal__body">

                <div className="cu-form__label">
                    Space name
                </div>

                <div className="cu-form__field">
                    <input type="text" className="cu-form__input" value={spaceName}
                    onChange={(e)=>{
                        setSpaceName(e.target.value);
                    }}
                    placeholder="Enter Space name"
                    />
                </div>

                <button className="cu-btn" disabled={spaceName.length > 0 ? false : true} onClick={(e)=>{
                    renameSpace(spaceID,spaceName,setLoader,setRename,setSpaceInfo)
                }}>
                    {
                        loader ?<Loading /> :"Save"
                    }
                </button>

            </div>
            </div>
            </div>
            </ModelOverlay>
    )
}
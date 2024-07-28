"use client";
import { useEffect, useState } from "react";
import socket from "@/app/MainSocket";

function getBlockList(spaceID,setTotalBlock,setBlockListMembers,projectID) {

    fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/project/${projectID}/setting/block`,
        {
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
                console.log('ok',data.data);
                setTotalBlock(data.data.length);
                setBlockListMembers(data.data);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}



export default function MainSetting({spaceID,roomId,setModel,setBlockListMembers,projectID}) {

    const [totalBlock, setTotalBlock] = useState(0);
    const [totalLock, setTotalLock] = useState(0);


    useEffect(()=>{
        getBlockList(spaceID,setTotalBlock,setBlockListMembers,projectID);
    },[])

    // useEffect(()=>{
    //     getLockList(spaceID,setTotalLock,setLockListMembers);
    // },[])


    return (
        <>

                <div className="mx-2 px-1 flex cursor-pointer rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">
                                    <svg width={'1rem'} height={'1rem'} className="block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
  <path d="m4.93 4.93 14.14 14.14" />
</svg>
                                    </div>
                                </div>

                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Block List
                                </div>

                            </div>

                            <span className="flex" style={{maxWidth:'74%'}}>

                                <span className="whitespace-nowrap overflow-hidden text-ellipsis text-xs font-normal color-500">
                                    {totalBlock} Members
                                </span>

                                <div className="flex items-center justify-center w-4 h-4 cu3-icon">
                                <svg width={'1rem'} height={'1rem'} className="block rtl:rotate-180" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m9 18 6-6-6-6" />
</svg>
                                </div>
                            </span>

                        </div>

                    </button>

                </div>


                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('manager');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path  fill-rule="evenodd" d="M12 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm3.537 7.712a5.5 5.5 0 1 0-7.075 0c-2.912 1.227-5.047 3.926-5.454 7.163a1 1 0 0 0 1.984.25C5.425 16.678 8.392 14 12 14c3.607 0 6.575 2.678 7.008 6.125a1 1 0 1 0 1.984-.25c-.407-3.237-2.542-5.936-5.455-7.163Z" clip-rule="evenodd" ></path>
</svg>



                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Manager settings & roles
                                </div>

                            </div>

                            <span className="flex" style={{maxWidth:'74%'}}>

                                {/* <span className="whitespace-nowrap overflow-hidden text-ellipsis text-xs font-normal color-500">
                                    {totalBlock} Members
                                </span> */}

                                <div className="flex items-center justify-center w-4 h-4 cu3-icon">
                                <svg width={'1rem'} height={'1rem'} className="block rtl:rotate-180" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m9 18 6-6-6-6" />
</svg>
                                </div>
                            </span>

                        </div>

                    </button>

                </div>



{/* 

                <div className="my-2 h-1px w-full border-bottom-e8eaed"></div>

                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                        setIsLock(!isLock)
                        lockChat(!isLock,setIsLock,spaceID,roomId);
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">
                                    <svg id="svg-sprite-global__lock" width={'1rem'} height={'1rem'} fill="#656f7d"  viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 7a5 5 0 0 1 10 0v2a3 3 0 0 1 3 3v5.172a3 3 0 0 1-.879 2.12l-1.828 1.83a3 3 0 0 1-2.121.878H8.828a3 3 0 0 1-2.12-.879l-1.83-1.828A3 3 0 0 1 4 17.172V12a3 3 0 0 1 3-3V7zm0 4a1 1 0 0 0-1 1v5.172a1 1 0 0 0 .293.707l1.828 1.828a1 1 0 0 0 .707.293h6.344a1 1 0 0 0 .707-.293l1.828-1.828a1 1 0 0 0 .293-.707V12a1 1 0 0 0-1-1H7zm8-2H9V7a3 3 0 1 1 6 0v2zm-3 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" clip-rule="evenodd"></path></svg>
                                    </div>
                                </div>

                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Lock the chat
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={isLock} onChange={(e)=>{
                                        setIsLock(!isLock);
                                        lockChat(!isLock,setIsLock,spaceID,roomId);
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
                </div> */}
        </>
    );

}


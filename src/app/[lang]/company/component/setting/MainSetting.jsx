"use client";
import { useEffect, useState } from "react";
import socket from "@/app/MainSocket";

function getBlockList(spaceID,setTotalBlock,setBlockListMembers) {

    fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/chat/setting/block`,
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
                setTotalBlock(data.data.total);
                setBlockListMembers(data.data.members);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function getLockList(spaceID,setTotalLock,setLockListMembers) {

    fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceID}/chat/setting/lock`,
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
                console.log('ok lock list',data.data);
                setTotalLock(data.data.total);
                setLockListMembers(data.data.members);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}


export default function MainSetting({spaceID,roomId,setModel}) {



    // useEffect(()=>{
    //     getBlockList(spaceID,setTotalBlock,setBlockListMembers);
    // },[refreshBlock])

    // useEffect(()=>{
    //     getLockList(spaceID,setTotalLock,setLockListMembers);
    // },[])


    return (
        <>

                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
    <path  fill-rule="evenodd" d="M12.002 8.429a3.571 3.571 0 1 0 0 7.143 3.571 3.571 0 0 0 0-7.143ZM10.432 12a1.571 1.571 0 1 1 3.142 0 1.571 1.571 0 0 1-3.143 0Z" clip-rule="evenodd"></path>
    <path  fill-rule="evenodd" d="M10.016 2a1 1 0 0 0-.96.718l-.714 2.428-.45.26-2.473-.586a1 1 0 0 0-1.097.473l-1.98 3.426a1 1 0 0 0 .142 1.191l1.748 1.832v.516L2.484 14.09a1 1 0 0 0-.142 1.19l1.98 3.428a1 1 0 0 0 1.097.472l2.473-.586.45.26.714 2.428a1 1 0 0 0 .96.718h3.96a1 1 0 0 0 .959-.713l.728-2.432.45-.26 2.463.597a1 1 0 0 0 1.101-.472l1.981-3.427a1 1 0 0 0-.139-1.187l-1.744-1.846v-.52l1.744-1.846a1 1 0 0 0 .139-1.187l-1.98-3.427a1 1 0 0 0-1.102-.472l-2.463.597-.45-.26-.728-2.432A1 1 0 0 0 13.977 2h-3.961Zm.132 4.095L10.764 4h2.468l.629 2.1a1 1 0 0 0 .458.579l1.141.658a1 1 0 0 0 .735.105l2.125-.514 1.233 2.134-1.505 1.593a1 1 0 0 0-.273.687v1.316a1 1 0 0 0 .273.687l1.505 1.593-1.233 2.134-2.125-.514a1 1 0 0 0-.735.105l-1.14.658a1 1 0 0 0-.46.58L13.233 20h-2.468l-.616-2.095a1 1 0 0 0-.46-.584l-1.141-.658a1 1 0 0 0-.73-.107l-2.135.506-1.234-2.134 1.508-1.58a1 1 0 0 0 .276-.69v-1.316a1 1 0 0 0-.276-.69l-1.508-1.58 1.234-2.134 2.135.506a1 1 0 0 0 .73-.107l1.14-.658a1 1 0 0 0 .46-.584Z" clip-rule="evenodd" ></path>
</svg>

                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    General settings
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

                <div className="my-2 h-1px w-full border-bottom-e8eaed"></div>

                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path  fill-rule="evenodd" d="M3.83 17c0 .646.524 1.17 1.17 1.17h14A1.17 1.17 0 0 0 20.17 17v-7A1.17 1.17 0 0 0 19 8.83H3.83V17Zm0-9.83h10.166L13 6.173a1.17 1.17 0 0 0-.828-.343H5A1.17 1.17 0 0 0 3.83 7v.17Zm12.514 0L14.173 5a2.83 2.83 0 0 0-2.002-.829H5A2.83 2.83 0 0 0 2.17 7v10A2.83 2.83 0 0 0 5 19.83h14A2.83 2.83 0 0 0 21.83 17v-7A2.83 2.83 0 0 0 19 7.17h-2.656Z" clip-rule="evenodd" ></path>
</svg>

                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Project settings
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

                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path fill-rule="evenodd" d="M4 12a8 8 0 0 0 8 8 7.96 7.96 0 0 0 3.53-.819 2.1 2.1 0 0 1 1.29-.185c.92.16 1.84.328 2.657.481a223.22 223.22 0 0 1-.481-2.657 2.1 2.1 0 0 1 .185-1.29A7.96 7.96 0 0 0 20 12a8 8 0 1 0-16 0Zm17.589 7.88c-.186-.977-.411-2.19-.623-3.403a.1.1 0 0 1 .01-.062A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 4.415-1.025.1.1 0 0 1 .062-.009c1.214.212 2.426.437 3.404.623l.109.02a274.083 274.083 0 0 1 1.864.362.1.1 0 0 0 .117-.117l-.047-.236c-.069-.352-.18-.925-.315-1.628l-.02-.11Z" clip-rule="evenodd" ></path>
</svg>

                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Chat settings
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

                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path  fill-rule="evenodd" d="M7 3.83A1.17 1.17 0 0 0 5.83 5v14c0 .646.524 1.17 1.17 1.17h10A1.17 1.17 0 0 0 18.17 19V8.828c0-.31-.123-.608-.343-.827L14 4.173a1.17 1.17 0 0 0-.828-.343H7ZM4.17 5A2.83 2.83 0 0 1 7 2.17h6.171c.751 0 1.47.298 2.002.829L19 6.827c.53.531.829 1.25.829 2.001V19A2.83 2.83 0 0 1 17 21.83H7A2.83 2.83 0 0 1 4.17 19V5Zm4 4A.83.83 0 0 1 9 8.17h3a.83.83 0 0 1 0 1.66H9A.83.83 0 0 1 8.17 9Zm0 4a.83.83 0 0 1 .83-.83h6a.83.83 0 1 1 0 1.66H9a.83.83 0 0 1-.83-.83Zm0 4a.83.83 0 0 1 .83-.83h6a.83.83 0 1 1 0 1.66H9a.83.83 0 0 1-.83-.83Z" clip-rule="evenodd"></path>
</svg>

                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Post settings
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


                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 18 18" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path fill-rule="evenodd" d="M1.333 3.333c0-.368.299-.666.667-.666h4A.667.667 0 1 1 6 4H2a.667.667 0 0 1-.667-.667zm0 3.334C1.333 6.298 1.632 6 2 6h9.333a.667.667 0 1 1 0 1.333H2a.667.667 0 0 1-.667-.666zm0 3.333c0-.368.299-.667.667-.667h6.667a.667.667 0 0 1 0 1.334H2A.667.667 0 0 1 1.333 10zm0 3.333c0-.368.299-.666.667-.666h12A.667.667 0 1 1 14 14H2a.667.667 0 0 1-.667-.667z" clip-rule="evenodd"></path>
</svg>
                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Poll settings
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


                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path fill-rule="evenodd" d="M5.5 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2 5a3.5 3.5 0 1 1 4.5 3.355v7.29a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855v-7.29A3.502 3.502 0 0 1 2 5Zm12.707-3.207a1 1 0 0 1 0 1.414L13.914 4H15.5a4 4 0 0 1 4 4v7.645a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855V8a2 2 0 0 0-2-2h-1.586l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0ZM5.5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" clip-rule="evenodd" ></path>
</svg>

                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Task settings
                                </div>

                            </div>

                            <span className="flex" style={{maxWidth:'74%'}}>

                                <div className="flex items-center justify-center w-4 h-4 cu3-icon">
                                <svg width={'1rem'} height={'1rem'} className="block rtl:rotate-180" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="m9 18 6-6-6-6" />
</svg>
                                </div>
                            </span>

                        </div>

                    </button>

                </div>

                <div className="my-2 h-1px w-full border-bottom-e8eaed"></div>

                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full color-600">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path fill-rule="evenodd" d="M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z" clip-rule="evenodd"></path>
</svg>
                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Archive
                                </div>

                            </div>

                        </div>

                    </button>

                </div>


                <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setModel('block');
                        }} >
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 button-delete gap-2.5">

                                <div className="text-sm font-normal leading-4 text-2a2e34 whitespace-nowrap w-4 h-4">
                                    <div className="flex items-center justify-center w-full h-full button-delete">

<svg viewBox="0 0 24 24" fill="currentColor"  width={'1rem'} height={'1rem'} className="block">
<path fill-rule="evenodd" d="M10 4h4v1h-4V4zM8 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a1 1 0 1 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 0 1 0-2h4zm6 2H7v13h10V7h-3zm-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1zm5 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5z" clip-rule="evenodd"></path>
</svg>
                                    </div>
                                </div>

                                <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Delete
                                </div>

                            </div>

                        </div>

                    </button>

                </div>

        </>
    );

}


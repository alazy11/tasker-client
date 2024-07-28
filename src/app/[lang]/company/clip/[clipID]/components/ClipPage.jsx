"use client";
import { useEffect, useState } from "react";
import TopNavInbox from './TopNavInbox';
// import GalleryView from "./GalleryView";

// import Video from 'next-video';
import ReactPlayer from "react-player";

export default function ClipPage({clipID}) {


    const[clip, setClip] = useState({})

    useEffect(()=>{
        const abortController = new AbortController();

        fetch(
           `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip/${clipID}`,
           {
              signal: abortController.signal,
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
                 console.log("data space faild....", data);
              } else {
                 console.log("data clip video....", data.data);
                 setClip(data.data);
              }
           })
           .catch((error) => {
              console.log(error);
           });
  
        return () => {
           abortController.abort();
        };
    },[])


    return (
        <div className="flex-1 clip-container-page w-full h-full overflow-hidden">
            <TopNavInbox />

        <div className="w-full h-full overflow-hidden">
            <div className="w-full h-full flex">

                <div className="overflow-y-auto scroll-bar cu-attachment-annotation__body">
                    <div className="my-0 mx-auto p-6">
                        <div className="cu-attachment-annotation__markup">
                            <div className="cu-video-markup__video items-center overflow-hidden">
                                <div className="vg-player">
                                    {/* <div className="cu-video__container"> */}
                                <ReactPlayer
                                
                                controls url={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${clip?.path?.substr(clip?.path?.indexOf('uploads')).split("\\").join('/')}/${clip?.title}`} className="w-full h-auto" preload="auto" playsInline="true"
                                />
                                    {/* </div> */}
                                </div>
                                {/* <video controls src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${clip?.path?.substr(clip?.path?.indexOf('uploads')).split("\\").join('/')}/${clip?.title}`} className="w-full h-auto" preload="auto" playsInline="true"></video> */}
                            </div>
                        </div>

                        <div className="clip-page__footer">
                            <div className="title-wrapper">
                                <div className="title-border">
                                    <div className="title-container-video">
                                        <div className="title-video">
                                        {clip?.title}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="properties">
                                <div className="item">
                                    <div className="mr-2">
                                        <div className="cu3-avatar-assign">
                                            AN
                                        </div>
                                    </div>

                                    <span className="item__label">
                                    abdualaziz najeeb
                            </span>

                                </div>

                                <div className="item">

                                <div _nghost-ng-c4133689536="" className="item__icon" >
                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                            <path _ngcontent-ng-c4104681984="" fill-rule="evenodd" d="M7 1a1 1 0 0 1 1 1v1h8V2a1 1 0 1 1 2 0v1.126c1.725.444 3 2.01 3 3.874v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4.002 4.002 0 0 1 3-3.874V2a1 1 0 0 1 1-1Zm0 4a2 2 0 0 0-2 2v1h14V7a2 2 0 0 0-2-2H7Zm12 5H5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7Z" clip-rule="evenodd"></path> 
                            </svg>
                            </div>

                            <span className="item__label">
                            { new Date(clip?.create_date).toLocaleDateString()}
                            </span>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
        </div>
    );


}
"use client";
import { useEffect, useState } from "react";
import TopNavInbox from './TopNavInbox';
import GalleryView from "./GalleryView";

export default function ClipPage() {


    const[clip, setClip] = useState([]);
    const[loader, setLoader] = useState(true);

    useEffect(()=>{
        const abortController = new AbortController();

        fetch(
           `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip`,
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
                 console.log("data folder dd....", data.data);
                 setClip(data.data);
                 setLoader(false);
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

            <div className="pt-6  overflow-y-auto scroll-bar w-full h-full">
                <div className="w-full h-full">

                    <div>
                        <div _nghost-ng-c1451680631="">
                            <div className="flex sm:hidden">
                                <button className="btn-normal tab active">
                                    <span className="tab-btn-span">
                                    My Clips 
                                    </span>
                                </button>
                            </div>


                            <div className="advanced-controls sm:w-full">

                                <div className="sm:flex-1">
                                    <div className="cu-dropdown__toggle">
                                        <button className="btn-normal" _nghost-ng-c1675173623="">
                                            <span className="sm:">
                                            Sort: Date created 
                                            </span>
                                            {/* <span className="hidden sm:inline-block">
                                            Sort
                                            </span> */}
                                            <div _nghost-ng-c4133689536="" className="cu3-icon">
                                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                                <path  fill-rule="evenodd" d="M12 17a1 1 0 0 1-.707-.293l-6-6a1 1 0 0 1 1.414-1.414L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6A1 1 0 0 1 12 17Z" clip-rule="evenodd"></path>
                                            </svg>
                                            </div>

                                        </button>
                                    </div>
                                </div>

                                <button className="btn-normal" _nghost-ng-c1675173623="" >
                                <div _nghost-ng-c4133689536="" className="cu3-icon">
                                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                            <path  fill-rule="evenodd" d="M15.59 15.924a6.889 6.889 0 1 1 .334-.334 1.002 1.002 0 0 0-.334.334Zm.837 1.918a8.889 8.889 0 1 1 1.414-1.414l3.755 3.754a1 1 0 0 1-1.414 1.414l-3.755-3.754Z" clip-rule="evenodd"></path>
                                            </svg>
                                            </div>
                                            <span className="">
                                                Search
                                            </span>
                                </button>


                                <div className="block shrink-0">
                                    <div _nghost-ng-c2338459429="">
                                        <div className="selected-item-background-container">
                                            <div className="selected-item-background">
                                            </div>
                                        </div>

                                        <button cu3SwitcherItem="">
                                            <div _nghost-ng-c4133689536="" >
                                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                            <path  d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 1a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9Zm-5 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9Zm-5 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9Z"></path>
                                            </svg>
                                            </div>
                                        </button>

                                        <button cu3SwitcherItem="" className="active">
                                            <div _nghost-ng-c4133689536="" >
                                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                                            <path _ngcontent-ng-c4104681984="" fill-rule="evenodd" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h3A2.5 2.5 0 0 1 11 5.5v3A2.5 2.5 0 0 1 8.5 11h-3A2.5 2.5 0 0 1 3 8.5v-3ZM5.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm7.5.5A2.5 2.5 0 0 1 15.5 3h3A2.5 2.5 0 0 1 21 5.5v3a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 13 8.5v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM3 15.5A2.5 2.5 0 0 1 5.5 13h3a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 8.5 21h-3A2.5 2.5 0 0 1 3 18.5v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm7.5.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3Zm2.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z" clip-rule="evenodd"></path>
                                            </svg>
                                            </div>
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <GalleryView clip={clip} loader={loader} />

                </div>

            </div>

        </div>
    );


}
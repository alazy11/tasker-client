"use client";
import SettingModel from "@/app/[lang]/company/component/setting/SettingModel";
import MainSetting from "./MainSetting";
import { useState } from "react";
import BlockList from "./BlockList";
import MainManagerSettings from "./manager/MainManagerSettings";

export default function ProjectSetting({setSetting,setSettingClose,settingClose,spaceID,projectID,
    setManagerModel,
    setManager,
    manager,
    setTop,
    setLeft
}) {

    const [model, setModel] = useState('main');
    const [blockListMembers, setBlockListMembers] = useState([]);


    return (
        <SettingModel setSetting={setSetting} setSettingClose={setSettingClose} settingClose={settingClose} >

            
        <div className="flex flex-col w-full h-full pb-2 overflow-x-hidden overflow-y-auto scroll-bar">
                <div className="sticky top-0 flex items-center pt-4 pe-11 pb-2 ps-5 mb-1 z-10 bg-white">
                    {
                        model === 'main' ?
                        <div className="text-base font-semibold text-2a2e34 grow">
                        Project settings
                        </div> 
                        :
                        model === 'block' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('main');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path _ngcontent-ng-c3515293492="" fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Block List
                        </div>
                        </>
                        :
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('main');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Manager settings & roles
                        </div>
                        </>
                    }
                </div>

            {
                model === 'main' ? <MainSetting
                setModel={setModel}
                // refreshBlock={refreshBlock}
                // isLock={isLock} setIsLock={setIsLock}
                spaceID={spaceID} 
                // roomId={roomId}
                setBlockListMembers={setBlockListMembers}
                projectID={projectID}
                // setLockListMembers={setLockListMembers}
                 /> : 
                model === 'block' ?
                <BlockList
                spaceID={spaceID}
                projectID={projectID} 
                // roomId={roomId}
                blockListMembers={blockListMembers}
                setBlockListMembers={setBlockListMembers}
                // setNotification={setNotification}
                // setMessage={setMessage}
                // setTitle={setTitle}
                setManagerModel={setManagerModel}
                setManager={setManager}
                manager={manager}
                setTop={setTop} setLeft={setLeft} />
                :
                <MainManagerSettings
                 setModel={setModel}
                 spaceId={spaceID}
                 />
            }
</div>

        </SettingModel>
    );

}
"use client";
import SettingModel from "@/app/[lang]/company/component/setting/SettingModel";
import { useState } from "react";
import socket from "@/app/MainSocket";
import MainSetting from "./setting/MainSetting";
import BlockList from "./setting/BlockList";
import LockList from "./setting/LockList";
import Notification from "@/app/[lang]/component/Notification";



export default function ChatSetting({setSetting,setSettingClose,settingClose,isLock, setIsLock,spaceID,roomId}) {

    const [model, setModel] = useState('main');
    const [blockListMembers, setBlockListMembers] = useState([]);
    const [lockListMembers, setLockListMembers] = useState([]);
    const [refreshBlock, setRefreshBlock] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [notification, setNotification] = useState(false);


    return (
        <>
        <SettingModel setSetting={setSetting} setSettingClose={setSettingClose} settingClose={settingClose} >

        <div className="flex flex-col w-full h-full pb-2 overflow-x-hidden overflow-y-auto scroll-bar">
                <div className="sticky top-0 flex items-center pt-4 pe-11 pb-2 ps-5 mb-1 min-h-8 z-10 bg-white">
                    {
                        model === 'main' ?
                        <div className="text-base font-semibold text-2a2e34 grow">
                        Chat settings
                        </div> 
                        :
                        model === 'block' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover:bg-[var(--cu-background-main-hover-strong)] text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
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
                        Lock List
                        </div>
                        </>
                    }
                </div>

            {
                model === 'main' ? <MainSetting
                setModel={setModel}
                refreshBlock={refreshBlock}
                isLock={isLock} setIsLock={setIsLock}
                spaceID={spaceID} roomId={roomId}
                setBlockListMembers={setBlockListMembers}
                setLockListMembers={setLockListMembers}
                 /> : 
                model === 'block' ?
                <BlockList
                spaceID={spaceID} roomId={roomId}
                blockListMembers={blockListMembers}
                refreshBlock={refreshBlock}
                setRefreshBlock={setRefreshBlock}
                setNotification={setNotification}
                setMessage={setMessage}
                setTitle={setTitle}
                /> : <LockList
                spaceID={spaceID} roomId={roomId}
                lockListMembers={lockListMembers}
                // refreshBlock={refreshBlock}
                // setRefreshBlock={setRefreshBlock}
                setNotification={setNotification}
                setMessage={setMessage}
                setTitle={setTitle}
                />
            }
</div>
        </SettingModel>

        {
            notification && <Notification message={message} title={title}  />
        }


        </>
    );

}



"use client";
import SettingModel from "@/app/[lang]/company/component/setting/SettingModel";
import { useState } from "react";
import socket from "@/app/MainSocket";
import MainSetting from "./MainSetting";
// import BlockList from "./setting/BlockList";
// import LockList from "./setting/LockList";
import Notification from "@/app/[lang]/component/Notification";
import MainManagerSettings from "./manager/MainManagerSettings";


export default function SpaceSetting({setSetting,setSettingClose,settingClose,isLock, setIsLock,spaceID,roomId}) {

    const [model, setModel] = useState('origin');
    const [blockListMembers, setBlockListMembers] = useState([]);
    const [lockListMembers, setLockListMembers] = useState([]);
    const [refreshBlock, setRefreshBlock] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [notification, setNotification] = useState(false);

    return (
        <>
        <SettingModel layout={'fixed'} height={'calc(100% - 144px)'} top={'144px'} setSetting={setSetting} setSettingClose={setSettingClose} settingClose={settingClose} >

        <div className="flex flex-col w-full h-full pb-2 overflow-x-hidden overflow-y-auto scroll-bar">
                <div className="sticky top-0 flex items-center pt-4 pe-11 pb-2 ps-5 mb-1 min-h-12 z-10 bg-white">
                    {
                        model === 'origin' ?
                        <div className="text-base font-semibold text-2a2e34 grow">
                        Space Settings
                        </div> 
                        :
                        model === 'general' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold self-stretch h-4 text-2a2e34 grow">
                        General settings
                        </div>
                        </>
                        :  model === 'manager' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Manager setting & roles
                        </div>
                        </>  :  model === 'project' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Project settings
                        </div>
                        </> :  model === 'chat' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Chat settings
                        </div>
                        </> :  model === 'post' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Post settings
                        </div>
                        </> :  model === 'poll' ?
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Poll settings
                        </div>
                        </> : 
                        <>
                        
                        <button className="w-6 h-6 ltr:mr-2 rtl:ml-2 ltr:-ml-1 rtl:-mr-1 self-start p-0 hover-gray-100 text-base rounded flex items-center justify-center text-2a2e34 border-0" onClick={(e)=>{
                            setModel('origin');
                        }} >
                            
                        <div className="w-4 h-4 flex items-center justify-center text-2a2e34">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{color: "inherit"}}><path  fillRule="evenodd" d="M10.707 4.293a1 1 0 0 1 0 1.414L5.414 11H21a1 1 0 1 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z" clipRule="evenodd" style={{color: "inherit"}}></path></svg>
                </div>

                        </button>

                        <div className="text-base font-semibold text-2a2e34 grow">
                        Task settings
                        </div>
                        </> 
                    }
                </div>

            {
                model === 'origin' ? <MainSetting
                setModel={setModel}
                refreshBlock={refreshBlock}
                isLock={isLock} setIsLock={setIsLock}
                spaceID={spaceID} roomId={roomId}
                setBlockListMembers={setBlockListMembers}
                setLockListMembers={setLockListMembers}
                 /> : <MainManagerSettings
                 setModel={setModel}
                 spaceId={spaceID}
                 />
                // model === 'block' ?
                // <BlockList
                // spaceID={spaceID} roomId={roomId}
                // blockListMembers={blockListMembers}
                // refreshBlock={refreshBlock}
                // setRefreshBlock={setRefreshBlock}
                // setNotification={setNotification}
                // setMessage={setMessage}
                // setTitle={setTitle}
                // /> : <LockList
                // spaceID={spaceID} roomId={roomId}
                // lockListMembers={lockListMembers}
                // // refreshBlock={refreshBlock}
                // // setRefreshBlock={setRefreshBlock}
                // setNotification={setNotification}
                // setMessage={setMessage}
                // setTitle={setTitle}
                // />
            }
</div>
        </SettingModel>

        {
            notification && <Notification message={message} title={title}  />
        }


        </>
    );

}


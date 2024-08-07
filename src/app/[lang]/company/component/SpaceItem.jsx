"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import parse  from "html-react-parser";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// import SpaceSetting from "./setting/SpaceSetting";
const SpaceOption = dynamic(()=> import('./drop_menu/SpaceOption'));
const RenameSpace = dynamic(()=> import('./space/RenameSpace'));
const SpaceSetting = dynamic(()=> import('./setting/SpaceSetting'));

export default function SpaceItem({item,getSpace,setGetSpace}) {

    const path = usePathname();
    const [folderLeft, setFolderLeft] = useState('0px');
    const [folderTop, setFolderTop] = useState('0px');
    const [spaceOptionModel, setSpaceOptionModel] = useState(false);
    const [spaceID, setSpaceID] = useState('');
    const [progress, setProgress] = useState(true);
    const [save, setSave] = useState(false);
    const [message, setMessage] = useState('');
    const [setting, setSetting] = useState(false);
    const [settingClose,setSettingClose] = useState(false);
    const [rename, setRename] = useState(false);
    const [spaceInfo, setSpaceInfo] = useState(item);


    return (
        <>
                <li className={`rounded-md text-sm h-8	ltr:pr-1 rtl:pl-1 relative space-item-li nav-item_ele ${[`/en/company/space/${item.space_id}`,`/en/company/space/${item.space_id}/members`,`/en/company/space/${item.space_id}/projects`,`/en/company/space/${item.space_id}/chat`].includes(path) ? 'active-space' : ''}`}>
        <div className="flex items-center h-8">
           <div className="text-gray-600 w-10 ltr:pl-2.5 rtl:pr-2.5">
              <span className={` hide space-avatar space-bg-${spaceInfo.color}`}>
                 {
                    spaceInfo.icon_path ? <Image src={spaceInfo.icon_path} alt="space logo"
                    className="h-3.5 w-3.5 item-s-color"
                    />
                    :
                    spaceInfo.icon ? parse(spaceInfo.icon)
                    : <span>{spaceInfo.icon_text}</span>
                 }
              </span>

              <button className="text-base pt-0.5 hidden w-6 h-6 show hover:bg-gray-300 rounded items-center justify-center bg-transparent font-medium button-space item-s-color" data-space={item.space_id}>
                 <svg
                    className="w-3.5	h-3.5 block text-inherit rotate-270 round item-s-color"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                 >
                    <path d="m4.594 8.912 6.553 7.646a1.126 1.126 0 0 0 1.708 0l6.552-7.646c.625-.73.107-1.857-.854-1.857H5.447c-.961 0-1.48 1.127-.853 1.857Z"></path>
                 </svg>
              </button>
           </div>
           <div className="flex items-center justify-between flex-1 w-3/5 li-item-space">
              <Link
                 href={`/en/company/space/${spaceInfo.space_id}`}
                 className={`leading-8	flex-1 max-w-32 whitespace-nowrap overflow-hidden text-ellipsis text-2a2e34 item-s-color`}
              >
                 {spaceInfo.title}
              </Link>
              <div className="hidden sm:flex items-center relative z-10 item">
                 <button className="rounded icon-padding icon-space-option flex items-center justify-center  item-s-color" data-space = {spaceInfo.space_id} onClick={(e)=>{
                    setSpaceID(e.currentTarget.dataset.space);
                    setSpaceOptionModel(true);
                    let left = e.currentTarget.closest('.space-item-li').clientWidth;
                    if(e.currentTarget.getBoundingClientRect().right > 300)
                    setFolderLeft(left);
                 }}>
                    <svg
                       className="block icon-size"
                       fill="none"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                    >
                       <path d="M17 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                       <path d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                       <path d="M5 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"></path>
                    </svg>
                 </button>
                 <button className="rounded icon-padding icon-space-option flex items-center justify-center  item-s-color">
                    <svg
                       className="block icon-size"
                       fill="none"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                    >
                       <path d="M6 12h12"></path>
                       <path d="M12 18V6"></path>
                    </svg>
                 </button>
              </div>
           </div>
        </div>
     </li>
        

     {
            spaceOptionModel &&
            <SpaceOption 
            setSpaceOptionModel={setSpaceOptionModel}
            folderLeft={folderLeft}
            folderTop={folderTop}
            spaceID={spaceID}
            getSpace={getSpace}
            setGetSpace={setGetSpace}
            setProgress={setProgress}
            setSave={setSave}
            setMessage={setMessage}
            setSetting={setSetting}
            setRename={setRename}
            />
         }
         
         
         {/* {
            save && <SaveModel progress={progress} >
               {message}
            </SaveModel>
         } */}

         {
setting && <SpaceSetting spaceID={spaceID} setSetting={setSetting} setSettingClose={setSettingClose} settingClose={settingClose} />
         }
         
         {
            rename && <RenameSpace spaceID={spaceID} spaceInfo={item} setSpaceInfo={setSpaceInfo} setRename={setRename} />
         }

        </>

    );

}
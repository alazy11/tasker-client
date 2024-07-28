"use client";
import { useState,useEffect } from "react";
// import dynamic from "next/dynamic";
// import SpaceSetting from "./setting/SpaceSetting";

import SpaceItem from "./SpaceItem";

// const SpaceOption = dynamic(()=> import('./drop_menu/SpaceOption'));
// const RenameSpace = dynamic(()=> import('./space/RenameSpace'));
// const SaveModel = dynamic(()=> import('./drop_menu/SpaceOption'));
// import SaveModel from '@/app/[lang]/component/SaveModel';


export default function SpaceElement({page,recordNumber,getSpace,setGetSpace}) {

   const [newSpace, setNewSpace] = useState([]);

   useEffect(()=>{

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space?page=${page}&recordNumber=${recordNumber}`, {
         credentials: "include",
         headers: {
            "cache-control": "no-cache",
         }
      })
      .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               // setErrorMessage(true);
               // setErrorText(data?.message);
               // console.log("data space faild....", data);
            } else {
               // setErrorMessage(false);
               // console.log("data space dd....", data);
               setNewSpace([...Object.values(data.data.result)]);
            }
         })
         .catch((error) => {
            console.log(error);
         });

   },[getSpace]);


   return (
      <>
      {
                  newSpace?.map(item=>{

                     return (
                        <SpaceItem
                        item={item}
                        getSpace={getSpace}
                        setGetSpace={setGetSpace}
                        key={item.space_id}
                        />
                     );
                  
                  })
               }
               
            {/* {
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
         
         
         {
            save && <SaveModel progress={progress} >
               {message}
            </SaveModel>
         }

         {

setting && <SpaceSetting spaceID={spaceID} setSetting={setSetting} setSettingClose={setSettingClose} settingClose={settingClose} />

         }
         
         {
            rename && <RenameSpace spaceID={spaceID} spaceInfo={spaceInfo} setRename={setRename} />
         } */}

      
      </>
   );

}
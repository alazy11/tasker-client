"use client";

import { useEffect, useState } from "react";

function AssignManagerToSpace(spaceId,manager,setMessageNotification,setTitle,setNotification) {


    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceId}/manager`, {
        method:'POST',
        credentials: "include",
        headers: {
           "content-type": "application/json",
           "cache-control": "no-cache",
        },
        body:JSON.stringify(manager[0])
     })
        .then((res) => {
           return res.json();
        })
        .then((data) => {
           if (data.status === "fail" || data.status === "error") {
              // setErrorMessage(true);
              // setErrorText(data?.message);
            //   setSave(false);
           } else {


            console.log(data.data)

            setTitle("Assign Manager");
            setMessageNotification(`${manager[0].public_name} Assign manager have been successfully.`);
            setNotification(true);

              setTimeout(()=>{
                setNotification(false)
              },2000);

           }
        })
        .catch((error) => {
           console.log(error);
        //    setSave(false);
        });


}



export default function AssignManager({setSpaceOptionModel,setManagerModel,managerModel, manager,spaceID, setTop, setLeft,setMessageNotification,setTitle,setNotification}) {


    // const[active, setActive] = useState(false);

    useEffect(()=>{
        if(manager.length > 0)
        AssignManagerToSpace(spaceID,manager,setMessageNotification,setTitle,setNotification);
        console.log("manager",manager)
    },[manager]);


    return(
        <li className="min-h-3 pe-2 ps-2">
        <button className={` ${managerModel && "nav-menu-item-active"} p-2 flex items-center w-full gap-3 back-search-member rounded`} onClick={(e)=>{
            let rect = e.currentTarget.getBoundingClientRect();
            setTop((rect.top - 340) + 'px');
            setLeft((rect.left + rect.width) + 'px');
           setManagerModel(true);
        //    setActive(true);
        //    setSpaceOptionModel(false)
        }}>
           <span className="nav-menu-item__icon">
           <svg width={'1rem'} height={'1rem'} className="block " viewBox="0 0 24 24"> 
           <path  fill-rule="evenodd" d="M12 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm3.537 7.712a5.5 5.5 0 1 0-7.075 0c-2.912 1.227-5.047 3.926-5.454 7.163a1 1 0 0 0 1.984.25C5.425 16.678 8.392 14 12 14c3.607 0 6.575 2.678 7.008 6.125a1 1 0 1 0 1.984-.25c-.407-3.237-2.542-5.936-5.455-7.163Z" clip-rule="evenodd" ></path>
           </svg>
           </span>
           <span className="option-style text-2a2e34">
              Assign manager
           </span>
        </button>
     </li>
    );
}
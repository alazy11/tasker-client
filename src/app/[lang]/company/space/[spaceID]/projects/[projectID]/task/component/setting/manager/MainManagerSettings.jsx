// MainManagerSettings
"use client";

import { useEffect, useState } from "react";

// function AssignManagerToSpace(spaceId,employee_id,role,setMessageNotification,setTitle,setNotification) {
function AssignManagerToSpace(spaceId,role) {


    console.log(role)

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceId}/manager/role`, {
        method:'POST',
        credentials: "include",
        headers: {
           "content-type": "application/json",
           "cache-control": "no-cache",
        },
        body:JSON.stringify(role)
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

            // setTitle("Assign Manager");
            // setMessageNotification(`Assign manager have been successfully.`);
            // setNotification(true);

            //   setTimeout(()=>{
            //     setNotification(false)
            //   },2000);

           }
        })
        .catch((error) => {
           console.log(error);
        //    setSave(false);
        });


}




export default function MainManagerSettings({setModel,spaceId}) {

    const[role,setRole] = useState({})


    useEffect(()=>{

        const abortController = new AbortController();

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/space/${spaceId}/manager/role`, {
            signal: abortController.signal,
            credentials: "include",
            headers: {
            //    "content-type": "application/json",
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
                //   setSave(false);
               } else {
    
                console.log(data.data)
                setRole(data.data)

               }
            })
            .catch((error) => {
               console.log(error);
            //    setSave(false);
            });

            return () => {
                abortController.abort();
            };

    },[])




// 
// employee_id
// 
// 
// 
// 
// 
// 




    return (
        <div>

<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Space roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{

                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                rename_space : !prev.rename_space
                            })

                            return {
                                ...prev,
                                rename_space : !prev.rename_space
                            }
                        })

                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Rename space
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.rename_space} onChange={(e)=>{

                                        setRole(prev=>{

                                            AssignManagerToSpace(spaceId,{
                                                ...prev,
                                                rename_space : !prev.rename_space
                                            })

                                            return {
                                                ...prev,
                                                rename_space : !prev.rename_space
                                            }
                                        })

                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{

                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                space_description : !prev.space_description
                            })

                            return {
                                ...prev,
                                space_description : !prev.space_description
                            }
                        })

                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Write space description
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                <input type="checkbox" name="toggle-lock" checked={role.space_description} onChange={(e)=>{
                                        setRole(prev=>{

                                            AssignManagerToSpace(spaceId,{
                                                ...prev,
                                                space_description : !prev.space_description
                                            })
                
                                            return {
                                                ...prev,
                                                space_description : !prev.space_description
                                            }
                                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
setRole(prev=>{

    AssignManagerToSpace(spaceId,{
        ...prev,
        space_icon : !prev.space_icon
    })

    return {
        ...prev,
        space_icon : !prev.space_icon
    }
})
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                changing space icon
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.space_icon} onChange={(e)=>{
setRole(prev=>{

    AssignManagerToSpace(spaceId,{
        ...prev,
        space_icon : !prev.space_icon
    })

    return {
        ...prev,
        space_icon : !prev.space_icon
    }
})
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            </div>

</div>

<div className="h-1px w-full block back-gray200"></div>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Members roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
setRole(prev=>{

    AssignManagerToSpace(spaceId,{
        ...prev,
        add_member : !prev.add_member
    })

    return {
        ...prev,
        add_member : !prev.add_member
    }
})
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Add member
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.add_member} onChange={(e)=>{
setRole(prev=>{

    AssignManagerToSpace(spaceId,{
        ...prev,
        add_member : !prev.add_member
    })

    return {
        ...prev,
        add_member : !prev.add_member
    }
})
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            remove_member : !prev.remove_member
                        })
                    
                        return {
                            ...prev,
                            remove_member : !prev.remove_member
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Remove member
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.remove_member} onChange={(e)=>{
                                       setRole(prev=>{

                                        AssignManagerToSpace(spaceId,{
                                            ...prev,
                                            remove_member : !prev.remove_member
                                        })
                                    
                                        return {
                                            ...prev,
                                            remove_member : !prev.remove_member
                                        }
                                    })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            </div>

</div>


<div className="h-1px w-full block back-gray200"></div>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Project roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
 setRole(prev=>{

    AssignManagerToSpace(spaceId,{
        ...prev,
        add_project : !prev.add_project
    })

    return {
        ...prev,
        add_project : !prev.add_project
    }
})
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Add project
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.add_project} onChange={(e)=>{
                                        setRole(prev=>{

                                            AssignManagerToSpace(spaceId,{
                                                ...prev,
                                                add_project : !prev.add_project
                                            })
                                        
                                            return {
                                                ...prev,
                                                add_project : !prev.add_project
                                            }
                                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            remove_project : !prev.remove_project
                        })
                    
                        return {
                            ...prev,
                            remove_project : !prev.remove_project
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Remove project
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.remove_project} onChange={(e)=>{
setRole(prev=>{

    AssignManagerToSpace(spaceId,{
        ...prev,
        remove_project : !prev.remove_project
    })

    return {
        ...prev,
        remove_project : !prev.remove_project
    }
})
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            edit_project : !prev.edit_project
                        })
                    
                        return {
                            ...prev,
                            edit_project : !prev.edit_project
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Edit project
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.edit_project} onChange={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            edit_project : !prev.edit_project
                        })
                    
                        return {
                            ...prev,
                            edit_project : !prev.edit_project
                        }
                    })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            setting_project : !prev.setting_project
                        })
                    
                        return {
                            ...prev,
                            setting_project : !prev.setting_project
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Access project settings
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.setting_project} onChange={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            setting_project : !prev.setting_project
                        })
                    
                        return {
                            ...prev,
                            setting_project : !prev.setting_project
                        }
                    })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>



            </div>

</div>

<div className="h-1px w-full block back-gray200"></div>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Chat roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            block_user : !prev.block_user
                        })
                    
                        return {
                            ...prev,
                            block_user : !prev.block_user
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Block users
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.block_user} onChange={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            block_user : !prev.block_user
                        })
                    
                        return {
                            ...prev,
                            block_user : !prev.block_user
                        }
                    })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            lock_chat : !prev.lock_chat
                        })
                    
                        return {
                            ...prev,
                            lock_chat : !prev.lock_chat
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Lock chat
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.lock_chat} onChange={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            lock_chat : !prev.lock_chat
                        })
                    
                        return {
                            ...prev,
                            lock_chat : !prev.lock_chat
                        }
                    })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                       setRole(prev=>{

                        AssignManagerToSpace(spaceId,{
                            ...prev,
                            lock_user : !prev.lock_user
                        })
                    
                        return {
                            ...prev,
                            lock_user : !prev.lock_user
                        }
                    })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Prevent user to send
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.lock_user} onChange={(e)=>{
                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                lock_user : !prev.lock_user
                            })
                        
                            return {
                                ...prev,
                                lock_user : !prev.lock_user
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            </div>

</div>

<div className="h-1px w-full block back-gray200"></div>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Post roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                remove_post : !prev.remove_post
                            })
                        
                            return {
                                ...prev,
                                remove_post : !prev.remove_post
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Remove user's post
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.remove_post} onChange={(e)=>{
                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                remove_post : !prev.remove_post
                            })
                        
                            return {
                                ...prev,
                                remove_post : !prev.remove_post
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                prevent_post : !prev.prevent_post
                            })
                        
                            return {
                                ...prev,
                                prevent_post : !prev.prevent_post
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Prevent from posting
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.prevent_post} onChange={(e)=>{
                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                prevent_post : !prev.prevent_post
                            })
                        
                            return {
                                ...prev,
                                prevent_post : !prev.prevent_post
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                        setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                lock_post : !prev.lock_post
                            })
                        
                            return {
                                ...prev,
                                lock_post : !prev.lock_post
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Lock posting
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.lock_post} onChange={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                lock_post : !prev.lock_post
                            })
                        
                            return {
                                ...prev,
                                lock_post : !prev.lock_post
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                number_post : !prev.number_post
                            })
                        
                            return {
                                ...prev,
                                number_post : !prev.number_post
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Assign number of posts
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.number_post} onChange={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                number_post : !prev.number_post
                            })
                        
                            return {
                                ...prev,
                                number_post : !prev.number_post
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            </div>

</div>

<div className="h-1px w-full block back-gray200"></div>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Poll roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                remove_poll : !prev.remove_poll
                            })
                        
                            return {
                                ...prev,
                                remove_poll : !prev.remove_poll
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Remove user's poll
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.remove_poll} onChange={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                remove_poll : !prev.remove_poll
                            })
                        
                            return {
                                ...prev,
                                remove_poll : !prev.remove_poll
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                prevent_poll : !prev.prevent_poll
                            })
                        
                            return {
                                ...prev,
                                prevent_poll : !prev.prevent_poll
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Prevent from polling
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.prevent_poll} onChange={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                prevent_poll : !prev.prevent_poll
                            })
                        
                            return {
                                ...prev,
                                prevent_poll : !prev.prevent_poll
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                lock_poll : !prev.lock_poll
                            })
                        
                            return {
                                ...prev,
                                lock_poll : !prev.lock_poll
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Lock polling
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.lock_poll} onChange={(e)=>{
                         setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                lock_poll : !prev.lock_poll
                            })
                        
                            return {
                                ...prev,
                                lock_poll : !prev.lock_poll
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            
            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                number_poll : !prev.number_poll
                            })
                        
                            return {
                                ...prev,
                                number_poll : !prev.number_poll
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Assign number of polls
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.number_poll} onChange={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                number_poll : !prev.number_poll
                            })
                        
                            return {
                                ...prev,
                                number_poll : !prev.number_poll
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            </div>

</div>

<div className="h-1px w-full block back-gray200"></div>


<div className="p-2">
            <div className="flex py-2 px-3">
                <span className="text-xs font-medium color-600 leading-5">
                    Task roles
                </span>
                <span className="text-xs font-medium color-700 leading-5 ltr:ml-auto rtl:mr-auto cursor-pointer">
                    Allow all
                </span>
            </div>

            <div>

            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                assign_task : !prev.assign_task
                            })
                        
                            return {
                                ...prev,
                                assign_task : !prev.assign_task
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Assign Task
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.assign_task} onChange={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                assign_task : !prev.assign_task
                            })
                        
                            return {
                                ...prev,
                                assign_task : !prev.assign_task
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                remove_task : !prev.remove_task
                            })
                        
                            return {
                                ...prev,
                                remove_task : !prev.remove_task
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Remove Task
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.remove_task} onChange={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                remove_task : !prev.remove_task
                            })
                        
                            return {
                                ...prev,
                                remove_task : !prev.remove_task
                            }
                        })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                           setRole(prev=>{

                            AssignManagerToSpace(spaceId,{
                                ...prev,
                                edit_task : !prev.edit_task
                            })
                        
                            return {
                                ...prev,
                                edit_task : !prev.edit_task
                            }
                        })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Edit Task
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.edit_task} onChange={(e)=>{
                            setRole(prev=>{

                                AssignManagerToSpace(spaceId,{
                                    ...prev,
                                    edit_task : !prev.edit_task
                                })
                            
                                return {
                                    ...prev,
                                    edit_task : !prev.edit_task
                                }
                            })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>


            <div className="mx-2 px-1 flex cursor-pointer min-h-8 rounded-md hover-gray-100">
                    <button className="border-0 flex flex-col min-h-8 w-full py-2 text-start" onClick={(e)=>{
                            setRole(prev=>{

                                AssignManagerToSpace(spaceId,{
                                    ...prev,
                                    setting_task : !prev.setting_task
                                })
                            
                                return {
                                    ...prev,
                                    setting_task : !prev.setting_task
                                }
                            })
                    }}>
                        <div className="flex items-center grow w-full px-2">
                            <div className="text-sm font-normal leading-4 whitespace-nowrap relative flex grow items-center pr-1 text-2a2e34 gap-2.5">
                                <div className="text-sm font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis text-inherit">
                                    Access to task settings
                                </div>

                            </div>
                        </div>

                    </button>

                    <div className="ltr:pr-2 rtl:pl-2 inline-flex items-center cursor-default">
                                <label className="cu-toggle-switch relative m-0 inline-block w-6 h-3.5">
                                    <input type="checkbox" name="toggle-lock" checked={role.setting_task} onChange={(e)=>{
                            setRole(prev=>{

                                AssignManagerToSpace(spaceId,{
                                    ...prev,
                                    setting_task : !prev.setting_task
                                })
                            
                                return {
                                    ...prev,
                                    setting_task : !prev.setting_task
                                }
                            })
                                    }} id="toggle-lock" className="hidden toggle-lock-input" />

                                    <div className="cu-toggle-switch__slider">
                                        
                                    </div>

                                </label>

                            </div>
            </div>

            </div>

</div>

        </div>
    );
}



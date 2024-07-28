//   fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}?employeeId=${user.employee_id}`
"use client";

import { useEffect, useRef,useState } from "react";
import socket from "@/app/MainSocket";
import Peer from "peerjs";
import VideoElement from "./VideoElement";
import AlterCloseVideo from "./AlterCloseVideo";
import TopOption from "./TopOption";
import CreatorVideo from "@/app/[lang]/company/space/[spaceID]/room/[roomID]/components/VideoElement";
import Running from "./Running";


async function play(video,setStream) {

    // try {
    //     video.srcObject = await navigator.mediaDevices.getUserMedia({
    //         video:true,
    //         audio:true
    //     });
    // } catch(err) {
    //     console.log(err)
    // }

    navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
    }).then((stream)=>{
        setStream(stream);
    }).catch((err)=>{
        console.log(err)
    })

}
// let myPeer = new Peer()


function joinUser (setUsers,user,userStream) {

    setUsers(prev => {
        if(prev.some(item=>{
            // console.log("call set",item)
            console.log("call set",user.user_id == item.user_id || user.company_id == user.company_id)
            return user.user_id == item.user_id || user.company_id == user.company_id
        })) {
            console.log('ok')
            return prev
        }
        return [...prev,{
            id:user.user_id || user.company_id,
            ...user,
            stream:userStream
        }]
    })

}


function getUserInformation(id,setUsers,userStream) {

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/getUserInformation?user=${id.replace('company','')}&&type=${id.startsWith('company') ? 'company' : 'user'}`, {
        credentials: "include",
        headers: {
            "cache-control": "no-cache",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.status === "fail" || data.status === "error") {
                console.log("data space faild....", data);
            } else {
                console.log('join user',data.data)
                joinUser(setUsers,data.data,userStream)
            }
        })
        .catch((error) => {
            console.log(error);
        });

}



export default function RoomPage({user,spaceID,roomID,creator}) {

    let me = useRef();
    let link = useRef();
    const [roomId, setRoomId] = useState('');
    const [users, setUsers] = useState([]);
    const [stream, setStream] = useState();
    const [myPeer, setMyPeer] = useState();
    const [peers, setPeers] = useState({});
    const [camera, setCamera] = useState(true);
    const [voice, setVoice] = useState(true);
    const [isActive, setIsActive] = useState(true);
    const [isConnect, setIsConnect] = useState(false);

    // console.log("creatorcreator",creator)

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/user/space/${spaceID}?employeeId=${user.employee_id}`, {
            signal: abortController.signal,
            credentials: "include",
            headers: {
                "cache-control": "no-cache",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.status === "fail" || data.status === "error") {
                    console.log("data space faild....", data);
                } else {
                    setRoomId(data.data.room_id);
                    console.log("data space data....", data.data);

                    navigator.mediaDevices.getUserMedia({
                        video:true,
                        audio:true
                    }).then((stream)=>{
                        setStream(stream);
                        me.current.srcObject = stream;
                        setMyPeer(new Peer(user.room_ID))
                    }).catch((err)=>{
                        console.log(err)
                    })

                }
            })
            .catch((error) => {
                console.log(error);
            });

            // myPeer.current = new Peer();

        return () => {
            abortController.abort();
        };
    }, []);



    useEffect(()=>{

        if(myPeer && roomId ) {
            socket.connect();
        myPeer.on('open', id=>{
            socket.emit("newUserConnect",roomId,user,id);
            console.log("open peer");
            setIsConnect(true);
        });

        myPeer.on('error',err=>{
            console.log('error perr.....');
            setMyPeer(new Peer(user.room_ID));
            setIsConnect(false)
        })

        }

    },[myPeer,roomId])

    useEffect(()=>{
        if(stream && myPeer) {

            // stream.getAudioTracks()[0].stop();
            console.log("stream........invomm8infasf.",stream.getAudioTracks()[0])


        myPeer.on('call', call=>{
            console.log("incomming call",call)
            call.answer(stream);
            call.on("stream",(userStream)=>{

                console.log("(call.peer",call.peer)

                getUserInformation(call.peer,setUsers,userStream)
                peers[call.peer]=call;
                // setUsers(prev => {

                //     console.log("on call set",prev)

                //     return [...prev,{
                //         // ...user,
                //         stream:userStream
                //     }]
                // })
            })

        });
        }
    },[myPeer])

    useEffect(()=>{
        if(users)
        console.log("users====",users)
    },[users])

    useEffect(()=>{

        function disconnectUser(id) {
            console.log("disconnectUser",id)
            console.log("disconnectUser",peers)
            if(creator == id) {
                myPeer.destroy();
                link.current.click();
            } else {
                peers[id].close();
            }
        }

        function userLeaving(roomId,user,connectId) {
            peers[connectId].close();
        }

        function endMeeting(meetingID) {
            console.log("endMeeting",meetingID)
            myPeer.destroy();
            link.current.click();
        }

        function stopUser(userId,active) {
            console.log("stopUser",active)
            if(userId == user.room_ID) {
                setIsActive(active)
                stream.getAudioTracks().forEach(track => track.enabled = active);
            }
        }

        function firedUser(userId){

            if(userId == user.room_ID) {
                myPeer.destroy();
                link.current.click();
            } else {
                peers[userId].close();
            }

        }



        if(myPeer) {

            function newUserConnect(user,id) {
    
                const call = myPeer.call(id,stream);
    
                call.on("stream",(userStream)=>{
                    console.log("stream.........id",id)
                    joinUser(setUsers,user,userStream,id)
                    peers[id] = call;
                })
    
                call.on('close',()=>{
                    console.log('remove ele',call.peer)
                    setUsers(prev => {
                        let val = [];
                        val = prev.filter((item,index)=>{
                            item.room_ID !== call.peer;
                        })
                        return val;
                    })
                })

                // setPeers(prev => {
                //     return {
                //         ...prev,
                //         id:call
                //     }
                // })
                
            }

            socket.on("newUserConnect",newUserConnect);
            socket.on("disconnectUser",disconnectUser);
            socket.on("endMeeting",endMeeting);
            socket.on("stopUser",stopUser);
            socket.on("firedUser",firedUser);
            socket.on("userLeaving",userLeaving);

            return ()=>{
                socket.off("newUserConnect",newUserConnect);
                socket.off("disconnectUser",disconnectUser);
                socket.off("endMeeting",endMeeting);
                socket.off("stopUser",stopUser);
                socket.off("firedUser",firedUser);
                socket.off("userLeaving",userLeaving);
            }

        }

    },[socket,myPeer])


    useEffect(()=>{

        console.log("peers",peers)

    },[peers])

    return (
        <div className="h-full w-full fixed top-0 left-0 cont-meet ">
            <a href={`/en/user/space/${spaceID}`} ref={link} className="hidden" ></a>

            <div className="flex flex-col h-full w-full relative ">

                {
                    !isConnect &&  <Running />
                }

            <div className="video-container w-full flex-1">

            <div className="h-80 w-full p-2 relative rounded-md overflow-hidden video-ele">

                <TopOption user={user} active={isActive} />

            <video autoPlay playsInline ref={me} muted className="w-full h-full object-cover rounded-md" ></video>

<div _nghost-ng-c1540024192="" className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50">
<div className="cu-audio-volume-meter__progress">

</div>
</div>

                {
                        !camera &&
                    <AlterCloseVideo user={user} />
                    }

                </div>

                {
                    users.map((item, index)=>{
                        return(
                            creator == user.room_ID ? <CreatorVideo key={item.public_name + index} user={item} stream={item.stream} /> :
                            <VideoElement key={item.public_name + index} user={item} stream={item.stream} />
                        )
                    })
                }

            </div>

            <div className="h-24 w-3/4 m-auto mb-2 video-control rounded-md flex items-center gap-3 justify-center">


            {
                isActive && 

                <div className="w-12 h-12 rounded-full video-control_item flex items-center justify-center text-white cursor-pointer" onClick={(e)=>{

                    stream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
                    
                    setVoice(!voice);
                    
                                    }}>
                                    {/* <svg width={"1.5rem"} height={"1.5rem"} className="block relative z-10" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12 3a3 3 0 0 0-3 3v4.333A2.667 2.667 0 0 0 11.667 13h.666c.842 0 1.593-.39 2.082-1H13a1 1 0 1 1 0-2h2V9h-2a1 1 0 1 1 0-2h2V6h-2a1 1 0 1 1 0-2h1.236c-.55-.614-1.348-1-2.236-1ZM7 6a5 5 0 0 1 10 0v4.333A4.667 4.667 0 0 1 12.333 15h-.666A4.667 4.667 0 0 1 7 10.333V6Zm-2 4a1 1 0 0 1 1 1 5 5 0 0 0 5 5h2a5 5 0 0 0 5-5 1 1 0 1 1 2 0 7 7 0 0 1-7 7v2h1.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2H11v-2a7 7 0 0 1-7-7 1 1 0 0 1 1-1Z" clip-rule="evenodd"></path>
                                        <path fill-rule="evenodd" d="M1 1 22 22" clip-rule="evenodd"></path>
                                    </svg> */}
                    {
                        voice ? <svg width={"1.5rem"} height={"1.5rem"} className="block relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <path d="M12 19v4" />
                      <path d="M8 23h8" />
                    </svg>
                    
                    :
                    
                    <svg width={"1.5rem"} height={"1.5rem"} className="block relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 9.343v-5.34a3 3 0 0 0-5.94-.6" />
                      <path d="M9 8.999v3a3 3 0 0 0 5.12 2.12" />
                      <path d="M17 16.91a7.012 7.012 0 0 1-3.594 1.947 7.038 7.038 0 0 1-4.075-.384 6.992 6.992 0 0 1-3.163-2.584A6.932 6.932 0 0 1 5 11.988V9.999" />
                      <path d="M19 9.999v1.989c0 .41-.037.819-.11 1.223" />
                      <path d="M12 18.996v4" />
                      <path d="M8 22.999h8" />
                      <path d="m1 1 22 22" />
                    </svg>
                    
                    }
                    
                    
                                    </div>

            }

                <div className="w-12 h-12 rounded-full video-control_item flex items-center justify-center text-white cursor-pointer" onClick={(e)=>{
stream.getVideoTracks().forEach(track => track.enabled = !track.enabled);

setCamera(!camera)

socket.emit('closeCamera',roomId,user.room_ID,!camera)

                }}>
                {/* <svg width={"1.5rem"} height={"1.5rem"} fill="currentColor" className="block relative z-10" viewBox="0 0 24 24">
                    <path  fill-rule="evenodd" d="M5.55 5.163a3.264 3.264 0 0 0-1.023.364c-.29.171-.829.71-1 1a3.175 3.175 0 0 0-.366 1.057c-.053.373-.053 9.059 0 9.432.093.639.341 1.124.82 1.603.486.486.983.737 1.628.821.385.05 8.997.05 9.382 0 .38-.055.747-.179 1.082-.367.29-.171.829-.71 1-1 .303-.516.405-1.002.406-1.942l.001-.609 1.53.761c1.719.855 1.822.89 2.355.802a1.67 1.67 0 0 0 .977-.502c.269-.271.429-.57.495-.925.059-.321.059-6.395 0-6.716a1.719 1.719 0 0 0-.495-.925 1.69 1.69 0 0 0-.972-.504c-.527-.09-.64-.051-2.36.804l-1.53.761-.001-.609c-.001-.94-.103-1.426-.406-1.942-.171-.29-.71-.829-1-1a3.175 3.175 0 0 0-1.057-.366c-.339-.048-9.131-.047-9.466.002Zm9.46 1.797c.27.101.527.358.631.633.077.202.079.324.079 4.707s-.002 4.505-.079 4.707a1.153 1.153 0 0 1-.631.633c-.208.078-.318.08-4.71.08s-4.502-.002-4.71-.08a1.153 1.153 0 0 1-.631-.633c-.077-.202-.079-.324-.079-4.706 0-4.393.002-4.503.08-4.711a1.17 1.17 0 0 1 .623-.629c.19-.075.351-.077 4.705-.079 4.406-.002 4.514 0 4.722.078Zm6.11 5.34c0 1.683-.009 3.06-.02 3.06-.011 0-.83-.405-1.82-.9l-1.8-.9v-2.52l1.79-.898c.603-.307 1.21-.607 1.82-.9.017-.001.03 1.375.03 3.058Z" clip-rule="evenodd"></path>
                </svg> */}

{
                    camera ? 
                  <svg  width={"1.3rem"} height={"1.3rem"} className="block relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m23 7-7 5 7 5V7z" />
                  <rect width={15} height={14} x={1} y={5} rx={2} ry={2} />
                </svg>
                  :
<svg width={"1.3rem"} height={"1.3rem"} className="block relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
  <path d="M10.66 5H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
  <path d="m1 1 22 22" />
</svg>
                }

                </div>


                {
                    creator == user.room_ID ?
                    <div className="h-10 px-5 flex items-center text-white text-base font-medium video-control_item-end rounded-md cursor-pointer select-none" onClick={(e)=>{
                        myPeer.destroy();
                        socket.emit("endMeeting",roomId,meetingID);
                        link.current.click();
                    }} >
                        End
                    </div>

                    :

                    <div className="h-10 px-5 flex items-center text-white text-base font-medium video-control_item-end rounded-md cursor-pointer select-none" onClick={(e)=>{

                        socket.emit('userLeaving',roomId,user,user.room_ID);
                        myPeer.destroy();
                        link.current.click();
                        
                                    }}>
                                        Leave
                                    </div>
                }
               


            </div>

            </div>

        </div>
    );

}
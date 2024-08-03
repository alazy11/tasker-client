

"use client";

import { useEffect, useRef, useState } from "react";
import handleDateFormat from "@/_util/handleDateFormat";


function saveClip(path,title,setStatus) {

fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip/save`, {
    method:'POST',
    credentials: "include",
    headers: {
       "content-type": "application/json",
       "cache-control": "no-cache",
    },
    body:JSON.stringify({
       path,
       date:handleDateFormat(),
       title
    })
 })
    .then((res) => {
       return res.json();
    })
    .then((data) => {
       if (data.status === "fail" || data.status === "error") {
          // setErrorMessage(true);
          // setErrorText(data?.message);
          console.log("data space faild....", data);
        //   setLoader(false)
       } else {
          console.log("data project dd....", data.data);
          setStatus("done");
        //   setNotesModel("list")
        //   setDesc('');
          // setLoader(false);
       }
    })
    .catch((error) => {
       console.log(error);
       // setLoader(false)
    });

}




const HandleUploadFile = (selectedFile,setLoader,setPercent,setModel,setStatus) => {

    const formData = new FormData();
    // formData.append('folderFilePath',folderInfo.folder_path)
    // formData.append('fileInfo',JSON.stringify(fileInfo));
    formData.append('file',selectedFile)
 
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.upload.addEventListener("progress",(e)=> {ProgressHandler(e,setLoader,setPercent,setModel)}, false);
    xhr.addEventListener("load",(e)=> {SuccessHandler(e,setLoader,setStatus)}, false);
    xhr.addEventListener("error",(e)=> {ErrorHandler(e,setLoader)}, false);
    xhr.addEventListener("abort",(e)=> {AbortHandler(e,setLoader)}, false);
    xhr.open("POST", `${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company/clip`);
    // xhr.setRequestHeader('folderFilePath', folderInfo.folder_path);
    xhr.withCredentials = true;
    xhr.send(formData);
  };
 
  const ProgressHandler = (e,setLoader,setPercent,setModel) => {
    setModel(true)
    setLoader(true)
    var percent = (e.loaded / e.total) * 100;
    setPercent(Math.round(percent))
  };
 
  const SuccessHandler = (e,setLoader,setStatus) => {
    setLoader(false)
    console.log('successfully',e.target.response)
    saveClip(e.target.response.data.folderPath,e.target.response.data.fileName,setStatus)
  };
  const ErrorHandler = (e,setLoader,response) => {
    setLoader(false)
    console.log('error',e.target.response)
    console.log('error e',e)
  };
  const AbortHandler = (e,setLoader,response) => {
    setLoader(false)
  };
 

async function start(setStartRecord,setRecorder,cancelRecord,setSecondTimeRecord,setLoader,setPercent,setModel,setDownload,setFileName,setStatus) {

    let count;

//   let stream = await navigator.mediaDevices.getDisplayMedia({
//     video: true,
//     audio:true
//   })
  let stream = navigator.mediaDevices.getDisplayMedia({ 
    video: { 
        mediaSource: 'screen', 
    }, 
    audio: true, 
}) 
    .then(async (e) => {
        let audio = await navigator.mediaDevices.getUserMedia({  
            audio: true, video: false })

            let combine = new MediaStream( 
                [...e.getTracks(), ...audio.getTracks()]) 
      
                const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
                ? "video/webm; codecs=vp9" 
                : "video/webm"

            let mediaRecorder = new MediaRecorder(combine,
                {
                    mimeType: mime
                }
            ); 

            let chunks = []
            mediaRecorder.addEventListener('start', function(e) {
                setStartRecord(true);
                count = setInterval(() => {
                        setSecondTimeRecord(prev=>prev+1)
                }, 1000);
            })
        
            mediaRecorder.addEventListener('pause', function(e) {
                clearInterval(count);
            })
            mediaRecorder.addEventListener('resume', function(e) {
                count = setInterval(() => {
                        setSecondTimeRecord(prev=>prev+1)
                }, 1000);
            })
        
        
            mediaRecorder.addEventListener('dataavailable', function(e) {
                chunks.push(e.data)
            })
        
        
        
            mediaRecorder.addEventListener('stop', function(){
                clearInterval(count);
                
                if (mediaRecorder) {
                    mediaRecorder.stop();
                    mediaRecorder.ondataavailable = null;
                    mediaRecorder.onstop = null;
                    mediaRecorder = null;
                }

                if (audio) {
                    audio.getTracks().forEach(track => {
                        track.stop();
                    });
                }

                console.log('cancelRecord',cancelRecord)

                if(!cancelRecord) {
                    console.log("download")
                    let blob = new Blob(chunks, {
                        type: chunks[0].type
                    });

                    // blob.name = `clip.${blob.}`
                    let filename = `screen-recording-${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}.webm`;

                    const myFile = new File([blob],filename, {
                        type: blob.type,
                    });

                    HandleUploadFile(myFile,setLoader,setPercent,setModel,setStatus);

                    let url = URL.createObjectURL(blob);
                    setFileName(filename);
                    setDownload(url);
                }
                // setStartRecord(false)
          })
        
          setRecorder(mediaRecorder);
        
            //we have to start the recorder manually
            mediaRecorder.start()
        // })


     })

  //needed for better browser support
//   const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") 
//              ? "video/webm; codecs=vp9" 
//              : "video/webm"
//     let mediaRecorder = new MediaRecorder(stream, {
//         mimeType: mime
//     })

//     let chunks = []
//     mediaRecorder.addEventListener('start', function(e) {
//         setStartRecord(true);
//         count = setInterval(() => {
//                 setSecondTimeRecord(prev=>prev+1)
//         }, 1000);
//     })

//     mediaRecorder.addEventListener('pause', function(e) {
//         clearInterval(count);
//     })
//     mediaRecorder.addEventListener('resume', function(e) {
//         count = setInterval(() => {
//                 setSecondTimeRecord(prev=>prev+1)
//         }, 1000);
//     })


//     mediaRecorder.addEventListener('dataavailable', function(e) {
//         chunks.push(e.data)
//     })



//     mediaRecorder.addEventListener('stop', function(){
//         clearInterval(count);
//         if(!cancelRecord) {
//             console.log("download")
//             let blob = new Blob(chunks, {
//                 type: chunks[0].type
//             })
//             let url = URL.createObjectURL(blob)
      
//             let a = document.createElement('a')
//             a.href = url
//             a.download = 'video.webm'
//             a.click()
//             video.current.src = url
//         }
//         // setStartRecord(false)
//   })

//   setRecorder(mediaRecorder);

//     //we have to start the recorder manually
//     mediaRecorder.start()
// // })





}



export default function RecordScreen() {

    const [recorder,setRecorder] = useState({});
    const [startRecord,setStartRecord] = useState(false);
    const [cancelRecord,setCancelRecord] = useState(false);
    const [pauseRecord,setPauseRecord] = useState(false);
    const [countTimeRecord,setCountTimeRecord] = useState(0);
    const [secondTimeRecord,setSecondTimeRecord] = useState(0);
    const [minutesTimeRecord,setMinutesTimeRecord] = useState(0);
    const [loader, setLoader] = useState(false);
    const [status, setStatus] = useState('process');
    const [model, setModel] = useState(false);
    const [percent, setPercent] = useState('');
    const [fileName, setFileName] = useState('');
    const [download, setDownload] = useState('');


    useEffect(()=>{
        if(status === 'done') {
            setTimeout(() => {
                setModel(false)
            }, 5000);
        }
    },[status])

    useEffect(()=>{

        if(secondTimeRecord == 59) {
            setMinutesTimeRecord(prev=>prev+1)
        }

    },[secondTimeRecord])

    useEffect(()=>{

        if(secondTimeRecord == 59) {
            setSecondTimeRecord(0)
        } else {
            setSecondTimeRecord(prev=>prev+1)
        }

    },[countTimeRecord])


        return (

            <>
            {
            !startRecord ? 

            <div>
            <button className="flex items-center p-2 btn-top-nav rounded-md bg-transparent text-white  dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" 
            onClick={(e)=>{
                start(setStartRecord,setRecorder,cancelRecord,setCountTimeRecord,setLoader,setPercent,setModel,setDownload,setFileName,setStatus)
            }}>
    
    <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m23 7-7 5 7 5V7z" />
    <rect width={15} height={14} x={1} y={5} rx={2} ry={2} />
    </svg>
    
    
            </button>
         </div>

:
<div>
    <div className="clip-controls flex items-center p-1 gap-0.5">

        <div className="cu-clip-controls__container">
            <button className="btn-normal cu-clip-controls__button" onClick={(e)=>{
                recorder.stop();
                setStartRecord(false);
                setMinutesTimeRecord(0);
                setSecondTimeRecord(0);
                setCountTimeRecord(0);
            }}>
                <span className="cu-clip-controls__square"></span>
                <span className="cu-clip-controls__time">{minutesTimeRecord}:{secondTimeRecord}</span>
            </button>

        </div>

        <div className="cu-clip-controls__container bor">
            <button className="btn-normal cu-clip-controls__button-right" onClick={(e)=>{
                recorder.stop();
            }}>
                <div _nghost-ng-c4133689536="" >
                <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="none" >
                    <path  fill="currentColor" fill-rule="evenodd" d="M12 5a7 7 0 0 1 6.054 3.483l-1.811-.453a1 1 0 1 0-.485 1.94l4 1a1 1 0 0 0 1.212-.728l1-4a1 1 0 0 0-1.94-.485l-.377 1.506a9 9 0 1 0 .142 9.238 1 1 0 0 0-1.73-1.002A7 7 0 1 1 12 5Z" clip-rule="evenodd"></path>
                </svg>
                </div>
            </button>

            <button className="btn-normal cu-clip-controls__button-right" onClick={(e)=>{
                if(pauseRecord) {
                    recorder.resume();
                    setPauseRecord(false);
                } else {
                    recorder.pause();
                    setPauseRecord(true);
                }
            }}>
                <div _nghost-ng-c4133689536="" >
                <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                    {
                        pauseRecord ? 
                        <path  fill="currentColor" fill-rule="evenodd" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clip-rule="evenodd" ></path> 
                        :
                        <path  fill-rule="evenodd" d="M3 6.5A3.5 3.5 0 0 1 6.5 3h1A3.5 3.5 0 0 1 11 6.5v11A3.5 3.5 0 0 1 7.5 21h-1A3.5 3.5 0 0 1 3 17.5v-11ZM6.5 5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19h1A1.5 1.5 0 0 0 9 17.5v-11A1.5 1.5 0 0 0 7.5 5h-1ZM13 6.5A3.5 3.5 0 0 1 16.5 3h1A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5v-11ZM16.5 5A1.5 1.5 0 0 0 15 6.5v11a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 17.5 5h-1Z" clip-rule="evenodd"></path>
                    }
                </svg>
                </div>
            </button>

            <button className="btn-normal cu-clip-controls__button-right" onClick={(e)=>{
                setCancelRecord(true);
                setStartRecord(false);
                setMinutesTimeRecord(0);
                setSecondTimeRecord(0);
                setCountTimeRecord(0);
                recorder.stop();
            }}>
                <div _nghost-ng-c4133689536="" >
                <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="currentColor" >
                <path  fill-rule="evenodd" d="M10 4h4v1h-4V4ZM8 5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a1 1 0 1 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 0 1 0-2h4Zm6 2H7v13h10V7h-3Zm-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0v-5Z" clip-rule="evenodd"></path>
                </svg>
                </div>
            </button>
        </div>

    </div>
</div>
            
        }

        {
            model &&
                <div _nghost-ng-c3720892492="" >
                <div _nghost-ng-c1738963587="">
                    <div className="content-clip">
                        <div className="cu3-toast">
                        <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="none" >
                            <path  fill="currentColor" fill-rule="evenodd" d="M12.001 4a63.27 63.27 0 0 0-3.514.122l-.058-.999.058.999a4.629 4.629 0 0 0-4.364 4.365A64.01 64.01 0 0 0 4 12c0 1.048.051 2.296.122 3.513a4.629 4.629 0 0 0 4.364 4.365A63.82 63.82 0 0 0 12 20c1.049 0 2.297-.051 3.515-.122a4.628 4.628 0 0 0 4.363-4.362A63.6 63.6 0 0 0 20.001 12c0-1.049-.05-2.298-.122-3.516a4.628 4.628 0 0 0-4.363-4.362A63.835 63.835 0 0 0 12 4Zm-3.63-1.875A65.755 65.755 0 0 1 12.002 2c1.105 0 2.397.054 3.63.125a6.628 6.628 0 0 1 6.245 6.243c.072 1.235.125 2.527.125 3.632s-.053 2.397-.125 3.632a6.628 6.628 0 0 1-6.245 6.243 65.695 65.695 0 0 1-3.63.125c-1.104 0-2.396-.053-3.63-.125a6.629 6.629 0 0 1-6.245-6.247A65.931 65.931 0 0 1 2 12c0-1.104.054-2.395.125-3.628a6.629 6.629 0 0 1 6.246-6.247ZM8 9.349c0-1.81 1.976-2.93 3.53-1.997l4.415 2.65c1.508.905 1.508 3.09 0 3.996l-4.416 2.65C9.976 17.58 8 16.462 8 14.65v-5.3Zm2.5-.282a.33.33 0 0 0-.5.282v5.301c0 .257.28.415.5.283l4.415-2.65a.33.33 0 0 0 0-.566L10.5 9.067Z" clip-rule="evenodd" ></path>
                        </svg>
                        </div>
        
                        <div className="main-content-clip-title">
                            {
                                loader ?
                            <div>
                            Clip Uploading ({percent}%)
                            </div>:
                            status === 'process' ? 
                             <div>
                             Clip Processing...
                             </div> : 
                             <div>
                             Clip Uploaded Successfully.
                             </div>
                            }

                        </div>
        
                        <button className="btn-normal" onClick={(e)=>{
                            setModel(false)
                        }}>
                            <div _nghost-ng-c4133689536="">
                            <svg width={"1rem"} height={"1rem"} className="block" viewBox="0 0 24 24" fill="none" >
                                <path  fill="currentColor" fill-rule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414Z" clip-rule="evenodd"></path>
                            </svg>
                            </div>
                        </button>
        
                    </div>
        
                    <div className="w-full cu3-button-group">
                        <button className="btn-normal cu3-button-group_btn" onClick={(e)=>{
                            let a = document.createElement('a');
                            a.href = download;
                            a.download = fileName;
                            a.click();
                        }}>
                            Download
                        </button>
                    </div>
        
                </div>
        
            </div>
        }
            </>



        )


}
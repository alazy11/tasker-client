// ChangeIcon


import DropDownModel from '@/app/[lang]/component/DropDownModel';
import dynamic from 'next/dynamic';
 import { useEffect, useState } from 'react';
import { IconPicker } from '@locaop/icon-picker'

const colorIcon = ['#8077f1', '#6a85ff', '#40a6e5', '#3fb1b2', '#64c6a2', '#f9be34', '#e78845', '#dc646a', '#f17ead', '#c580e6', '#bba399', '#595d66'];
// const backcolorIcon = ['cu-project-avatar__space-bg-purple', 'cu-project-avatar__space-bg-neon-blue', 'cu-project-avatar__space-bg-azure-blue', 'cu-project-avatar__space-bg-teal', 'cu-project-avatar__space-bg-mint', 'cu-project-avatar__space-bg-yellow', 'cu-project-avatar__space-bg-orange', 'cu-project-avatar__space-bg-red', 'cu-project-avatar__space-bg-pink', 'cu-project-avatar__space-bg-violet', 'cu-project-avatar__space-bg-brown', 'cu-project-avatar__space-bg-black'];

const backcolorIcon = [
   [ '#8077f1', 'cu-project-avatar__space-bg-purple' ],
   [ '#6a85ff', 'cu-project-avatar__space-bg-neon-blue' ],
   [ '#40a6e5', 'cu-project-avatar__space-bg-azure-blue' ],
   [ '#3fb1b2', 'cu-project-avatar__space-bg-teal' ],
   [ '#64c6a2', 'cu-project-avatar__space-bg-mint' ],
   [ '#f9be34', 'cu-project-avatar__space-bg-yellow' ],
   [ '#e78845', 'cu-project-avatar__space-bg-orange' ],
   [ '#dc646a', 'cu-project-avatar__space-bg-red' ],
   [ '#f17ead', 'cu-project-avatar__space-bg-pink' ],
   [ '#c580e6', 'cu-project-avatar__space-bg-violet' ],
   [ '#bba399', 'cu-project-avatar__space-bg-brown' ],
   [ '#595d66', 'cu-project-avatar__space-bg-black' ]
 ]


export default function ChangeIconSpace({setChangeIconModel,top,left}) {

    const [value, setValue] = useState("")

    useEffect(()=>{
        console.log(value)
    },[value])

   return (

      <DropDownModel setShowIcon={setChangeIconModel} >
         <div className='h-full w-full m-auto relative' >

<div className="absolute z-2700 left-6 drop-menu-shadow rounded-md overflow-y-auto " 
style={{ maxHeight:" calc(100vh - 20px)",
    width:"308px",
    height:'280px',
    top:top,left:left,width: "224px",
    background: "var(--cu-background-menu)"
}}>

                     <div className='icon-container scroll-bar h-full'>
                                 <div className=' h-full'>
                                 <IconPicker value={value} onChange={(v) => setValue(v)} />
                                 </div>
                              </div>
                        

               </div>

</div>

      </DropDownModel>


      // <div className="w-full h-full fixed top-0 left-0 z-2000">
      //    <div className="relative w-full h-full top-0 left-0">
      //       <div className="absolute w-full h-full top-0 left-0 z-2000" onClick={(e)=>{
      //          setShowIcon(false);
      //       }}></div>



      //    </div>
      // </div>
   )
}
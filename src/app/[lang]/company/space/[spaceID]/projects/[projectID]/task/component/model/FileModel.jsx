"use client";
import DropDownModel from '@/app/[lang]/component/DropDownModel';
import FolderTree from '../../../folders/component/model/FolderTree';
// import { useEffect, useState } from "react";


export default function FileModel({spaceID,projectID,setFileModel,setFolderID,setFolderPath,setFolderName}) {


   return (

      <DropDownModel setShowIcon={setFileModel}>
      <div className='h-full m-auto relative' style={{width:'480px', maxWidth:'100%' }}>
      <div className="absolute z-2700 shadow-xl bg-white rounded-md w-72 min-w-40 min-h-80 overflow-y-auto flex flex-col" style={{ height:"344px", maxHeight:" calc(100vh - 20px)", top:'36%'}}>
      <FolderTree width={'100%'} add={false} spaceID={spaceID} projectID={projectID} setFolderID={setFolderID} setFolderPath={setFolderPath} setFolderName={setFolderName} setFileModel={setFileModel} />
      </div>
      </div>
      </DropDownModel>

   );


}
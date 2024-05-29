"use client";
import { useState, useRef, useEffect } from "react";



function fillState(count, element) {
   const elementsToAdd = Array(count).fill(element);
   return elementsToAdd;
}

let ele = [];

const active = (element) => {
   ele?.forEach((item) => {
      item.classList.remove("folder-active");
   });
   if (ele?.includes(element)) {
      ele = [];
   } else {
      element.classList.add("folder-active");
      ele = [];
      ele?.push(element);
   }
};

function getSubFolder(
   setChildren,
   setFetch,
   folderID,
   spaceID,
   projectID,
   setSubChild
) {
   // console.log('okokokookokok',projectID)

   fetch(
      `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder/${folderID}`,
      {
         credentials: "include",
         headers: {
            "cache-control": "no-cache",
         },
      }
   )
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            console.log("data space faild....", data);
         } else {
            console.log("data folder dd....", data.data);
            setChildren([...Object.values(data.data)]);
            setSubChild([...Object.values(data.data)]);
            setFetch(true);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}

const Folder = ({
   spaceID,
   projectID,
   folder,
   levelN,
   setFID = () => {},
   setFolderPath = () => {},
   setSubChild = () => {},
   setModelFile = () => {},
   setFolderInfo = () => {},
   setFolderOptions = () => {},
   setFolderActive = () => {},
   setFolderLeft = () => {},
   setFolderTop = () => {},
   folderActive,
   folderOptions
}) => {
   const [isExpanded, setIsExpanded] = useState(false);
   const [level, setLevel] = useState(fillState(levelN, 1));
   const [children, setChildren] = useState([]);
   const [folderID, setFolderID] = useState(folder.folder_id);
   // const [folderPa, setFolderPa] = useState(folder.folder_id);
   const [first, setFirst] = useState(false);
   const [fetch, setFetch] = useState(false);
   // const [factive, setFActive] = useState(folderOptions)
   const aaa = useRef(null);

   const handleToggle = (e) => {
      setFirst(true);
      setIsExpanded(!isExpanded);
   };


   useEffect(() => {
      // console.log('alazy/.......')
      if (first) {
         // console.log('alazy/...first....')
         if (!fetch) {
            // console.log('alazy/...first....fetch')
            getSubFolder(
               setChildren,
               setFetch,
               folderID,
               spaceID,
               projectID,
               setSubChild
            );
         }
      }
   }, [isExpanded]);

   return (
      <li>
         <div
            style={{ color: "#b0bac6" }}
            data-show={false}
            ref={aaa}
            className={`flex relative ${folder.kind === 'folder' ? (folderActive === folder.folder_id ? "folder-active" : '') : (folderActive === folder.file_id ? "folder-active" : '') }  main items-center min-h-8 cursor-pointer rounded-md hover:bg-gray-100 folder-hover`}
            onContextMenu={(e) => {
               e.preventDefault();
               setFolderLeft(e.currentTarget.offsetLeft)
               setFolderTop(e.currentTarget.offsetTop)
               setFolderOptions(true);
               if(folder.kind === 'file'){
                  setFolderActive(folder.file_id);
               } else {
                  setFolderActive(folder.folder_id);
               }
               setFolderInfo(folder);
            }}
         >
            {
               folderOptions ? '' : setFolderActive('')
            }

            <div className="flex self-stretch">
               {level?.map((item, index) => {
                  return (
                     <div className="flex w-2" key={item + index}>
                        <div className="w-full h-full ltr:border-r ltr:border-solid ltr:border-r-gray-200"></div>
                     </div>
                  );
               })}
            </div>

            {folder.kind === "file" ? (
               <div className="flex items-center self-stretch w-4"></div>
            ) : (
               <div
                  className={`flex items-center self-stretch folder-icon hover:bg-gray-200 ${
                     levelN == 0 ? "rounded-s-md" : ""
                  }  ps-0.5 pe-0.5`}
                  onClick={(e) => {
                     handleToggle(e);
                  }}
               >
                  <svg
                     aria-hidden="true"
                     focusable="false"
                     className={`${isExpanded ? "rotate-0" : "rotate-270"}`}
                     viewBox="0 0 12 12"
                     width="13"
                     height="13"
                     fill="currentColor"
                  >
                     <path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path>
                  </svg>
               </div>
            )}

            <div
               className="flex self-stretch flex-1 items-center ps-2 pe-2 gap-2"
               onClick={(e) => {
                  let parent = e.currentTarget.closest(".main");
                  active(parent);
                  setFirst(true);
                  setSubChild(children);
                  setIsExpanded(true);
                  parent.classList.add("folder-active");
                  ele.push(parent);
                  setFID(folderID);
                  setFolderPath(folder.folder_path);
               }}
            >
               <div>
                  <div>
                     {folder.kind === "file" ? (
                        <svg
                           aria-hidden="true"
                           focusable="false"
                           role="img"
                           className="octicon octicon-file"
                           viewBox="0 0 16 16"
                           width="16"
                           height="16"
                           fill="currentColor"
                        >
                           <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                        </svg>
                     ) : isExpanded ? (
                        <svg
                           aria-hidden="true"
                           focusable="false"
                           className="octicon octicon-file-directory-open-fill"
                           viewBox="0 0 16 16"
                           width="16"
                           height="16"
                           fill="currentColor"
                        >
                           <path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path>
                        </svg>
                     ) : (
                        <svg
                           aria-hidden="true"
                           focusable="false"
                           className="octicon octicon-file-directory-fill"
                           viewBox="0 0 16 16"
                           width="16"
                           height="16"
                           fill="currentColor"
                        >
                           <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path>
                        </svg>
                     )}
                  </div>
               </div>
               <span className="item-content-text">
                  <span className="text-2a2e34">{folder.name}</span>
               </span>
               {folder.kind === "file" ? (
                  ""
               ) : (
                  <button
                     className="text-gray-500 hidden rounded folder-iconplus icon-padding items-center justify-center hover:bg-gray-300 item-s-color"
                     onClick={(e) => {
                        setModelFile(true);
                        setFolderInfo(folder);
                     }}
                  >
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
               )}
            </div>
         </div>

         {folder.kind === "file"
            ? ""
            : isExpanded &&
               children.length > 0 && (
                  <ul>
                     {" "}
                     {children.map((subfolder) => (
                        <Folder
                           key={
                              subfolder.kind === "file"
                                 ? subfolder.file_id
                                 : subfolder.folder_id
                           }
                           folder={subfolder}
                           setFID={setFID}
                           setFolderPath={setFolderPath}
                           setSubChild={setSubChild}
                           setModelFile={setModelFile}
                           setFolderInfo={setFolderInfo}
                           spaceID={spaceID}
                           projectID={projectID}
                           levelN={levelN + 1}
                           setFolderOptions={setFolderOptions}
                           folderActive={folderActive}
                           setFolderActive={setFolderActive}
                           folderOptions={folderOptions}
                           setFolderLeft={setFolderLeft}
                           setFolderTop={setFolderTop}
                        />
                     ))}
                  </ul>
               )
            }
      </li>
   );
};

export default function FolderTree({
   user,
   spaceID,
   projectID,
   width = "w-64",
   setFolderID,
   setFolderPath,
   setSubChild,
   setModelFile,
   setFolderInfo,
   setFolderOptions,
   folderActive,
   setFolderActive,
   folderOptions,
   setFolderLeft,
   setFolderTop,
   referesh,
   setReferesh
}) {
   const [folderTreeData, setFolderTreeData] = useState([]);
   const [scroll, setScroll] = useState(0);
   const input = useRef(null);

   useEffect(() => {
      const abortController = new AbortController();

      fetch(
         `http://localhost:4040/en/company/space/${spaceID}/project/${projectID}/folder`,
         {
            signal: abortController.signal,
            credentials: "include",
            headers: {
               "cache-control": "no-cache",
            },
         }
      )
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            if (data.status === "fail" || data.status === "error") {
               console.log("data space faild....", data);
            } else {
               console.log("data folder dd....", data.data);
               setFolderTreeData([...Object.values(data.data)]);
            }
         })
         .catch((error) => {
            console.log(error);
         });

      return () => {
         abortController.abort();
      };
   }, [referesh]);

   return (
      <aside
         className={` ${width} h-full border-r border-solid border-r-gray-200 pt-2 pb-2 flex flex-col`}
      >
         <div>
            <div className="ml-4 mr-4 mb-3">
               <span className="text-sm text-2a2e34 border border-solid gap-2 outline-none input-search-shadow border-gray-200 rounded-md flex items-stretch min-h-8 overflow-hidden ps-3 pe-3 ">
                  <span
                     style={{ color: "#636c76" }}
                     className="self-center shrink-0"
                  >
                     <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                        <path d="m21 21-4.35-4.35"></path>
                     </svg>
                  </span>
                  <input
                     type="text"
                     ref={input}
                     placeholder="Go to file"
                     className="border-0 outline-0 w-full"
                  />
                  <span
                     className="self-center shrink-0"
                     style={{ color: "#636c76" }}
                  >
                     <div className="ltr:-mr-1.5 rtl:-ml-1.5">
                        <kbd>t</kbd>
                     </div>
                  </span>
               </span>
            </div>
         </div>

         <div className="flex-1" style={{ maxHeight: "395px" }}>
            {scroll > 0 && <div className="duPwcy"></div>}
            <div
               className="max-h-full overflow-auto scroll-bar"
               onScroll={(e) => {
                  setScroll(e.target.scrollTop);
               }}
            >
               <ul className="ps-4 pe-4 pb-2">
                  {folderTreeData.map((folder) => (
                     <Folder
                        key={folder.folder_id}
                        folder={folder}
                        spaceID={spaceID}
                        setModelFile={setModelFile}
                        projectID={projectID}
                        setFID={setFolderID}
                        setSubChild={setSubChild}
                        setFolderPath={setFolderPath}
                        setFolderInfo={setFolderInfo}
                        levelN={0}
                        setFolderOptions={setFolderOptions}
                        folderActive={folderActive}
                        setFolderActive={setFolderActive}
                        folderOptions={folderOptions}
                        setFolderLeft={setFolderLeft}
                        setFolderTop={setFolderTop}
                     />
                  ))}
               </ul>
            </div>
         </div>
      </aside>
   );
}

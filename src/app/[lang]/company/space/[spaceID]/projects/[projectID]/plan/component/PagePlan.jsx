"use client";

// import ProjectsElement from "./ProjectsElement";
// import { Suspense } from "react";
import { useState, useEffect,useTransition } from "react";
// import AddMember from "./AddMember";
import TopMiddleNav from "../../component/TopMiddleNav";
// import PlanInformation from "./PlanInformation";
import dynamic from "next/dynamic";

// import AddPhases from "./AddPhases";

// import profile from "@/public/project-image/user-profile.jpeg";
// import Image from "next/image";
// import Alert from "@/app/[lang]/component/Alert";

import EmptyImg from '@/public/project-image/inbox-tray-empty.1b1560a84c61c1f9.svg';
// import EmptyPhase from "./EmptyPhase";

const AddPhases = dynamic(() => import("./AddPhases"));
const EmptyPhase = dynamic(() => import("./EmptyPhase"));
const PlanInformation = dynamic(() => import("./PlanInformation"));
const Alert = dynamic(() => import("@/app/[lang]/component/Alert"));


function inputHandler(value, setUser, spaceID) {
   fetch(
      `http://localhost:4040/en/company/space/${spaceID}/members/search?member=${value}&spaceID=${spaceID}`,
      {
         credentials: "include",
         headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
         },
      }
   )
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         if (data.status === "fail" || data.status === "error") {
            // setErrorMessage(true);
            // setErrorText(data?.message);
            console.log("employee faaaaaaa.....", data.data);
         } else {
            console.log("employee user.....", [...Object.values(data.data)]);
            setUser([...Object.values(data.data)]);
         }
      })
      .catch((error) => {
         console.log(error);
      });
}

export default function PagePlan({ user, spaceID, projectID }) {

   const [phaseModel, setPhaseModel] = useState(false);
   const [projectInfo, setProjectInfo] = useState({});
   const [plan, setPlan] = useState(false);
   // const [projectElement, setProjectElement] = useState([]);
   // const [member, setMember] = useState("");
   const [isPending, startTransition] = useTransition({
      // timeoutMs: 1000,
   });
   const [referesh, setReferesh] = useState(false);


   useEffect(() => {
      const abortController = new AbortController();

      fetch(`http://localhost:4040/en/company/space/${spaceID}/project/${projectID}`, {
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
               // setErrorMessage(true);
               // setErrorText(data?.message);
               console.log("data space faild....", data);
            } else {
               // setErrorMessage(false);
               console.log("data space dd....", data);
               setProjectInfo(data.data);
               setPlan(true);
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
      <>

      {
         plan && (!projectInfo.assgin_phase ? <Alert type={'warning'} message={"you Don't Add Phases Information yet, Team Member Can't Access this Project Before You Add Information.  "} /> : '')
      }

         <TopMiddleNav
            setEmployee={setPhaseModel}
            projectID={projectID}
            spaceID={spaceID}
         >
            Create Project
         </TopMiddleNav>

         <div className="flex-1 w-full">

            {
               plan && (projectInfo.assgin_phase ? <PlanInformation phaseCount={projectInfo.phase_number} spaceID={spaceID} projectID={projectID} /> : <EmptyPhase EmptyImg={EmptyImg} setPhaseModel={setPhaseModel} />)
            }

         </div>

         {
            phaseModel && <AddPhases setModel={setPhaseModel} referesh={referesh} setReferesh={setReferesh} projectInfo={projectInfo} spaceID={spaceID} />
         }
      </>
   );
}

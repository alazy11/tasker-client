
// import TopMiddleNav from './component/TopMiddleNav';
// import TopInlineNav from '@/app/[lang]/company/component/TopInlineNav'
// import RoomPage from "./components/RoomPage";
// import {getUser} from '@/_util/userHandler';
// import { redirect } from 'next/navigation'
import {getUser} from '@/_util/userHandler';
import ContainerRoom from "./components/Container";

// function isValidMeeting(meet,spaceID) {

//    fetch(`http://localhost:4040/en/user/space/${spaceID}/meeting/${meet}`, {
//       credentials: "include",
//       headers: {
//           "cache-control": "no-cache",
//        },
//   })
//       .then((res) => {
//           return res.json();
//       })
//       .then((data) => {
//           if (data.status === "fail" || data.status === "error") {
//               console.log("data space faild....", data);
//           } else {

//             console.log("data.data.message....", data.data.message);

//             if(!data.data.message) {
//                redirect('/en/not-found.jsx')
//             }

//           }
//       })
//       .catch((error) => {
//           console.log(error);
//       });

// }


export default async function Room({params}) {


   let spaceID = params.spaceID;
   let roomID = params.roomID;

   // isValidMeeting(roomID,spaceID);

    let user;
    try{
       user = await getUser();
    }catch (err) {
       console.log(err)
    }

   //  let spaceID = params.spaceID;
   console.log('alazy')
 
    return (
       <>
       <ContainerRoom roomID={roomID} user={user} spaceID={spaceID} />
    {/* <RoomPage user={user} spaceID={spaceID} /> */}
    </>
    );
 }
"use client";
import { io } from "socket.io-client";
import Cookies from 'js-cookie';
// import { useRouter } from "next/navigation";

const cookieValue = Cookies.get('roomId');
const type = Cookies.get('type');
let socket;


console.log('tttokcompany',cookieValue);
console.log('cookies type',type);

// if(!cookieValue) {
//    fetch('${process.env.NEXT_PUBLIC_BACKEND_URL}/en/company',{
//       credentials: 'include',
//       headers:{
//          "cache-control":"no-store",
//       }
//    }).then(res=>{
//       return res.json();
//    }).then(data=>{
//       if(data.status === 'fail' || data.status === 'error') {
//          // const router = useRouter();
//          // router.push('/en/login');
//          console.log(data);
//       } else {
//          console.log(data)
//       }
//    }).catch(err=>{
//       console.log(err)
//    });


//    socket = io('${process.env.NEXT_PUBLIC_BACKEND_URL}/company',{
//    withCredentials: true,
//    autoConnect: false,
//    auth: {
//       'roomId':cookieValue,
//    }
// });


// socket.on('connect',()=>{
//    console.log('connect');
//    // regUser(getUser());

//    socket.on('message',ms=>{
//       console.log('message',ms);
//    })
//    socket.on("disconnect", (reason) => {
//       if (reason === "io server disconnect") {
//         // the disconnection was initiated by the server, you need to manually reconnect
//         console.log(socket.active); // false
//       }
//       // else the socket will automatically try to reconnect
//       console.log('disconnect'); // true
//    });
// })

// socket.on('connect_error',(error)=>{
//    if (socket.active) {
//    } else {
//       console.log('connect socket error',error);
//    }
// })


// } else {
socket = io(`${process.env.NEXT_PUBLIC_BACKEND_URL}`,{
// socket = io('http://192.60.2.8:4040',{
   withCredentials: true,
   // autoConnect: false,
   auth: {
      'roomId':cookieValue,
      'type':type
   }
});


socket.on('connect',()=>{
   console.log('connect');
   // regUser(getUser());
   socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        // the disconnection was initiated by the server, you need to manually reconnect
        console.log(socket.active); 
        console.log('disconnection error',reason)// false
      }
      // else the socket will automatically try to reconnect
      console.log('disconnect'); // true
   });
})

socket.on('roomId',(cb)=>{
   cb(cookieValue);
})

socket.on('connect_error',(error)=>{
   if (socket.active) {
   } else {
      console.log('connect socket error',error);
   }
})

// socket.on("message",(msg)=>{
//    console.log("mss",msg);
// });

// }


// socket.



export default socket;






// (async () => {
//   try {
//     const token = await getUser();

//     const socket = io('${process.env.NEXT_PUBLIC_BACKEND_URL}/company', {
//       withCredentials: true,
//       autoConnect: false,
//       auth: {
//         token,
//       },
//     });

//     socket.on('connect', () => {
//       console.log('connect');
//       // regUser(getUser());

//       socket.on("disconnect", (reason) => {
//         if (reason === "io server disconnect") {
//           // the disconnection was initiated by the server, you need to manually reconnect
//           console.log(socket.active); // false
//         }
//         // else the socket will automatically try to reconnect
//         console.log('disconnect'); // true
//       });
//     });

//     socket.on('connect_error', (error) => {
//       if (socket.active) {
//         // Handle connect error
//       } else {
//         console.log('connect socket error', error);
//       }
//     });

//     export default socket;
//   } catch (error) {
//     console.log('Error:', error);
//     // Handle error
//   }
// })();


// export default async function createSocketConnection() {
//   try {
//     const token = await getUser();

//     const socket = io('${process.env.NEXT_PUBLIC_BACKEND_URL}/company', {
//       withCredentials: true,
//       autoConnect: false,
//       auth: {
//         token,
//       },
//     });

//     socket.on('connect', () => {
//       console.log('connect');
//       // regUser(getUser());

//       socket.on("disconnect", (reason) => {
//         if (reason === "io server disconnect") {
//           // the disconnection was initiated by the server, you need to manually reconnect
//           console.log(socket.active); // false
//         }
//         // else the socket will automatically try to reconnect
//         console.log('disconnect'); // true
//       });
//     });

//     socket.on('connect_error', (error) => {
//       if (socket.active) {
//         // Handle connect error
//       } else {
//         console.log('connect socket error', error);
//       }
//     });

//     return socket;
//   } catch (error) {
//     console.log('Error:', error);
//     // Handle error
//   }
// }



// export socket;
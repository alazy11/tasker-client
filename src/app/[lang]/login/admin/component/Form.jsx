"use client";
import { useState} from "react";
import ErrorMessage from "./ErrorMessage";

function messageHandle(e,setError) {
   let viledity = e.target.validity.valid;
   let validMessage;
   if(!viledity) {
      validMessage = e.target.validationMessage;
      // setError.forEach((setfun,ind)=>{
      //    setfun(validMessage)
      // })
      setError(validMessage);
      e.target.classList.add("input-error");
   } else {
      setError('');
      e.target.classList.remove("input-error");
   }
}

function handleFormSubmition(e,setErrorMessage,setErrorText,...data) {
   e.preventDefault();
   // if(isSecretKey) {
   //    let companyJsonData = {
   //       userName:data[0],
   //       password:data[1],
   //       secretKey:data[2],
   //    };
   //    fetch(`http://localhost:4040/en/login/company`,{
   //       method:"post",
   //    credentials: 'include',
   //    headers:{
   //       "content-type":"application/json",
   //       "cache-control":"no-cache",
   //    },
   //    body:JSON.stringify(companyJsonData)
   //    }).then(res=>{
   //       return res.json();
   //    }).then(data=>{
   //       if(data.status === 'fail' || data.status === 'error' ) {
   //          setErrorMessage(true);
   //          setErrorText(data?.message);
   //       } else {
   //          setErrorMessage(false);
   //          console.log(data);
   //       }
   //    }).catch(err=>{
   //       console.log(err);
   //    })
   // } else {
      let personalJsonData = {
         userName:data[0],
         password:data[1],
      };
      fetch(`http://localhost:4040/en/login/admin`,{
         method:"post",
      credentials: 'include',
      headers:{
         "content-type":"application/json",
         "cache-control":"no-cache",
      },
      body:JSON.stringify(personalJsonData)
      }).then(res=>{
         return res.json();
      }).then(data=>{
         if(data.status === 'fail' || data.status === 'error' ) {
            setErrorMessage(true);
            setErrorText(data?.message);
         } else {
            setErrorMessage(false);
            console.log(data);
         }
      }).catch(err=>{
         console.log(err);
      })
   // }
}


export default function Form({ dic }) {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   const [userNameError, setUserNameError] = useState('');
   const [passwordError, setPasswordError] = useState('');

   const [errorMessage, setErrorMessage] = useState(false);
   const [errorMessageText, setErrorMessageText] = useState('');

   return (
      <>
        {errorMessage && <ErrorMessage errorText={errorMessageText} seterrorText={setErrorMessageText} errorMessage={setErrorMessage} />}
        <form action="#" autoComplete="on" onSubmit={(e)=>{
            handleFormSubmition(e,setErrorMessage,setErrorMessageText,userName,password) 
      }}>
         <div className="form-group">
            <label htmlFor="userName">{dic.login.field1.title}</label>
            <div className="field-group">
               <span>
               <svg width="22" height="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path>
  <path d="M16.978 19.502a9 9 0 1 1 4.022-7.5c0 2.072-.75 3.75-2.625 3.75s-2.625-1.678-2.625-3.75v-3.75"></path>
</svg>
               </span>
               <input
                  type="text"
                  name="userName"
                  id="userName"
                  aria-describedby="userName-error-ms"
                  value={userName}
                  onChange={(e) => {
                     setUserName(e.target.value);
                  }}
                  required
                  placeholder={dic.login.field1.placeholder}
                  onBlur={(e)=>{
                     messageHandle(e,setUserNameError);
                  }}
               />
            </div>
            <span id="userName-error-ms"  className="error-message">
               {userNameError}
            </span>
         </div>

         <div className="form-group">
            <label htmlFor="password">{dic.login.field2.title}</label>
            <div className="field-group">
               <span>
                  <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                     <path
                        opacity="0.5"
                        d="M1.5 12C1.5 9.87868 1.5 8.81802 2.15901 8.15901C2.81802 7.5 3.87868 7.5 6 7.5H12C14.1213 7.5 15.182 7.5 15.841 8.15901C16.5 8.81802 16.5 9.87868 16.5 12C16.5 14.1213 16.5 15.182 15.841 15.841C15.182 16.5 14.1213 16.5 12 16.5H6C3.87868 16.5 2.81802 16.5 2.15901 15.841C1.5 15.182 1.5 14.1213 1.5 12Z"
                        fill="currentColor"
                     ></path>
                     <path
                        d="M6 12.75C6.41421 12.75 6.75 12.4142 6.75 12C6.75 11.5858 6.41421 11.25 6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75Z"
                        fill="currentColor"
                     ></path>
                     <path
                        d="M9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75Z"
                        fill="currentColor"
                     ></path>
                     <path
                        d="M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z"
                        fill="currentColor"
                     ></path>
                     <path
                        d="M5.0625 6C5.0625 3.82538 6.82538 2.0625 9 2.0625C11.1746 2.0625 12.9375 3.82538 12.9375 6V7.50268C13.363 7.50665 13.7351 7.51651 14.0625 7.54096V6C14.0625 3.20406 11.7959 0.9375 9 0.9375C6.20406 0.9375 3.9375 3.20406 3.9375 6V7.54096C4.26488 7.51651 4.63698 7.50665 5.0625 7.50268V6Z"
                        fill="currentColor"
                     ></path>
                  </svg>
               </span>
               <input
                  type="password"
                  name="password"
                  id="password"
                  aria-describedby="password-error-ms"
                  value={password}
                  // pattern="[a-zA-Z0-9]"
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
                  onBlur={(e)=>{
                     messageHandle(e,setPasswordError);
                  }}
                  required
                  placeholder={dic.login.field2.placeholder}
               />
               {/* <span className="show-password">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path d="M18.9375 12.84375C8.921875 15.546875 1.613281 23.921875 1.25 24.34375C0.929688 24.71875 0.929688 25.28125 1.25 25.65625C1.683594 26.160156 11.988281 38 25 38C38.011719 38 48.316406 26.160156 48.75 25.65625C49.070313 25.28125 49.070313 24.71875 48.75 24.34375C48.386719 23.921875 41.078125 15.550781 31.0625 12.84375C34.027344 14.8125 36 18.171875 36 22C35.996094 28.074219 31.074219 33 25 33C18.925781 33 14.003906 28.074219 14 22C14 18.171875 15.972656 14.8125 18.9375 12.84375 Z M 25 17C22.238281 17 20 19.238281 20 22C20 24.761719 22.238281 27 25 27C27.761719 27 30 24.761719 30 22C30 19.238281 27.761719 17 25 17Z" fill="#FFFFFF" />
               </svg>
               </span> */}
            </div>
            <span id="password-error-ms"  className="error-message">
               {passwordError}
            </span>
         </div>
         <div className="form-group">
            <button type="submit">SIGN IN</button>
         </div>
      </form>
      </>
   );
}

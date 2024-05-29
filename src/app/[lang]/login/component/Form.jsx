"use client";
import { useState} from "react";
import ErrorMessage from "./ErrorMessage";
import { useRouter } from "next/navigation";
import LoaderBtn from './LoaderBtn';
import '../style/loader.css'

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

function handleFormSubmition(e,isSecretKey,setErrorMessage,setErrorText,router,setLoader,...data) {
   e.preventDefault();
   setLoader(true);
   if(isSecretKey) {
      let companyJsonData = {
         userName:data[0],
         password:data[1],
         secretKey:data[2],
      };
      fetch(`http://localhost:4040/en/login/company`,{
         method:"post",
      credentials: 'include',
      headers:{
         "content-type":"application/json",
         "cache-control":"no-cache",
      },
      body:JSON.stringify(companyJsonData)
      }).then(res=>{
         return res.json();
      }).then(data=>{
         if(data.status === 'fail' || data.status === 'error' ) {
            setErrorMessage(true);
            setErrorText(data?.message);
            setLoader(false);
         } else {
            setErrorMessage(false);
            // socket.connect();
            // socket.emit('user',data.data);
            router.push('/en/company');
            console.log(data)
         }
      }).catch(err=>{
         console.log(err);
         setLoader(false);
      })
   } else {
      let personalJsonData = {
         userName:data[0],
         password:data[1],
      };
      fetch(`http://localhost:4040/en/login/user`,{
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
            setLoader(false)
         } else {
            if(data.data.redirect) {
               router.push('/en/login/admin');
            } else {
               // socket.connect();
               // socket.emit('user',data.data);
               router.push('/en/user');
            }
            setErrorMessage(false);
            console.log(data);
         }
      }).catch(err=>{
         console.log(err);
         setLoader(false);
      })
   }
}


export default function Form({ dic }) {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [secretKey, setSecretKey] = useState("");
   const [isSecretKey, setIsSecretKey] = useState(false);
   const [userNameError, setUserNameError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [secretError, setSecretError] = useState('');
   const [errorMessage, setErrorMessage] = useState(false);
   const [errorMessageText, setErrorMessageText] = useState('');
   const [loader,setLoader] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const router = useRouter();

   return (
      <>
        {errorMessage && <ErrorMessage errorText={errorMessageText} seterrorText={setErrorMessageText} errorMessage={setErrorMessage} />}
        <form action="#" autoComplete="on" onSubmit={(e)=>{
         if(isSecretKey) {
            handleFormSubmition(e,isSecretKey,setErrorMessage,setErrorMessageText,router,setLoader,userName,password,secretKey) 
         } else {
            handleFormSubmition(e,isSecretKey,setErrorMessage,setErrorMessageText,router,setLoader,userName,password) 
         }
      }}>
         <div className="form-group  relative">
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

         <div className="form-group  relative">
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
                  type={!showPassword ? "password" : 'text'}
                  name="passwordLogin"
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
               {/* [showPassword, setShowPassword] */}
               <span className="show-password" onClick={(e)=>{setShowPassword(!showPassword)}}>
                  {
                     !showPassword ? 
                     <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                     <path d="M21.87 11.496c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1.001 1.001 0 0 0 0-1Zm-9.87 4a3.5 3.5 0 1 1 0-6.999 3.5 3.5 0 0 1 0 7Z"></path>
                   </svg> 
                   :
<svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
<path d="M15.29 18.117 14 16.777l-.07-.07-1.27-1.27a3.501 3.501 0 0 1-4.16-3.44c.005-.204.025-.408.06-.61l-2-2L5 7.867a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.481 9.481 0 0 0 3.23-.67l-.21-.21Z"></path>
<path d="m8.59 5.756 2.8 2.8a4.07 4.07 0 0 1 .61-.06 3.5 3.5 0 0 1 3.5 3.5 4.067 4.067 0 0 1-.06.61l2.68 2.68.84.84a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l.09.09Z"></path>
<path d="m20.71 19.286-1.3-1.29-2-2-9.52-9.53-1.47-1.47-1.71-1.71a1.004 1.004 0 1 0-1.42 1.42l2.24 2.29 1.75 1.7 7.31 7.3.07.07 1.34 1.34.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1.002 1.002 0 0 0 0-1.42Z"></path>
</svg>
                  }

               </span>


            </div>
            <span id="password-error-ms"  className="error-message">
               {passwordError}
            </span>
         </div>

         <div className="form-group  relative">
            <label htmlFor="company" className="check-label">
               <input
                  type="checkbox"
                  name="company"
                  id="company"
                  onChange={(e) => {
                     if (e.target.checked) {
                        setIsSecretKey(true);
                     } else {
                        setIsSecretKey(false);
                     }
                  }}
               />
               <span>{dic.login.checkOption}</span>
            </label>
         </div>
         {isSecretKey && (
            <div className="form-group  relative secret">
               <label htmlFor="secretKey">{dic.login.field3.title}</label>
               <div className="field-group">
                  <span>
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M15.6807 14.5869C19.1708 14.5869 22 11.7692 22 8.29344C22 4.81767 19.1708 2 15.6807 2C12.1907 2 9.3615 4.81767 9.3615 8.29344C9.3615 9.90338 10.0963 11.0743 10.0963 11.0743L2.45441 18.6849C2.1115 19.0264 1.63143 19.9143 2.45441 20.7339L3.33616 21.6121C3.67905 21.9048 4.54119 22.3146 5.2466 21.6121L6.27531 20.5876C7.30403 21.6121 8.4797 21.0267 8.92058 20.4412C9.65538 19.4167 8.77362 18.3922 8.77362 18.3922L9.06754 18.0995C10.4783 19.5045 11.7128 18.6849 12.1537 18.0995C12.8885 17.075 12.1537 16.0505 12.1537 16.0505C11.8598 15.465 11.272 15.465 12.0067 14.7333L12.8885 13.8551C13.5939 14.4405 15.0439 14.5869 15.6807 14.5869Z"
                           fill="currentColor"
                           strokeWidth="1.5"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           opacity="0.5"
                           d="M17.8853 8.29353C17.8853 9.50601 16.8984 10.4889 15.681 10.4889C14.4635 10.4889 13.4766 9.50601 13.4766 8.29353C13.4766 7.08105 14.4635 6.09814 15.681 6.09814C16.8984 6.09814 17.8853 7.08105 17.8853 8.29353Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </span>
                  <input
                     type="password"
                     name="secretKey"
                     id="secretKey"
                     aria-describedby="secret-error-ms"
                     value={secretKey}
                     onBlur={(e)=>{
                        messageHandle(e,setSecretError);
                     }}
                     onChange={(e) => {
                        setSecretKey(e.target.value);
                     }}
                     required
                     placeholder={dic.login.field3.placeholder}
                  />
               </div>
               <span id="secret-error-ms"  className="error-message">
                  {secretError}
               </span>
            </div>
         )}
         <div className="form-group  relative">
            {loader ? 
            <LoaderBtn /> : 
            <button type="submit" className="btn btn-primary btn-lg">SIGN IN</button>  
            }
         </div>
      </form>
      </>
   );
}

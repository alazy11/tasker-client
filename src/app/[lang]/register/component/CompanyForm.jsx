"use client";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import socket from "@/app/socket";
import { useRouter } from "next/navigation";
import LoaderBtn from './LoaderBtn';


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
      return false;
   } else {
      setError('');
      e.target.classList.remove("input-error");
      return true;
   }
}

function clean(...fun) {
   fun.forEach((setfun,ind)=>{
      setfun(`http://localhost:4040/en/register/company`);
   });
}

function isSecretKey(secretKey,inputSecretKey) {
   return secretKey === inputSecretKey;
}


function formHandler(e,cleanf,setErrorMessage,setErrorText,next,setNext,setViewNext,disabledPerson,setCommingSecretKey,commingSecretKey,inputSecretKey,setDisable, router,...data) {
   e.preventDefault();
   if(next === '') {
      setNext('next');
      setDisable(true);
      setViewNext(true);
      disabledPerson(true);
      fetch(`http://localhost:4040/en/register/company/getSecretKey?companyName=${data[0]}&companyEmail=${data[3]}`).then(res=>{
         return res.json();
      }).then(data=>{
         if(data.status === 'fail' || data.status === 'error' ) {
            setErrorMessage(true);
            setErrorText(data?.message);
         } else {
            setErrorMessage(false);
            setCommingSecretKey(data.data.secretKey);
            console.log(data);
         }
      }).catch(err=>{
         console.log(err);
      })
      return;
   }
   if(!isSecretKey(commingSecretKey,inputSecretKey)) {
      setErrorMessage(true);
      setErrorText('please Enter the correct secret Key !');
   } else {
      setErrorMessage(false);
   }
   let personalJsonData = {
      userName:data[0],
      name:data[1],
      phone:data[2],
      email:data[3],
      password:data[4],
      job:data[5],
      country:data[6],
      secretKey:data[7],
   };
   console.log(JSON.stringify(personalJsonData));
   // clean(...cleanf);
   fetch('http://localhost:4040/en/register/company',{
      method:"post",
      credentials: 'include',
      headers:{
         "content-type":"application/json",
         "cache-control":"no-cache",
      },
      body:JSON.stringify(personalJsonData)
   }).then(res=>{
      console.log(res.headers)
      return res.json();
   }).then(data=>{
      if(data.status === 'fail' || data.status === 'error' ) {
         setErrorMessage(true);
         setErrorText(data?.message);
      } else {
         setErrorMessage(false);
         socket.connect();
         router.push('/en/company');
      }
      console.log(data);
   }).catch(error=>{
      console.log(error);
   })
}

async function searchByUserName(e,user,setError,setDisable) {
   if(user.param === 'userName') {
      fetch(`http://localhost:4040/en/register/company?userName=${user.data}`,{
      headers:{
         "content-type":"application/json",
         "cache-control":"no-cache",
      }
   }).then(res=>{
      return res.json();
   }).then(data=>{
      if(data.status === 'fail'){
         setError(data?.data?.userName);
         setDisable(true);
         e.target.classList.add("input-error");
      } else {
         setError('');
         setDisable(false);
         e.target.classList.remove("input-error");
      }
      console.log(data);
   }).catch(error=>{
      console.log(error);
   })
   } else {
      fetch(`http://localhost:4040/en/register/company?email=${user.data}`,{
      headers:{
         "content-type":"application/json",
         "cache-control":"no-cache",
      }
   }).then(res=>{
      return res.json();
   }).then(data=>{
      if(data.status === 'fail'){
         setError(data?.data?.email);
         setDisable(true);
         e.target.classList.add("input-error");
      } else {
         setError('');
         setDisable(false);
         e.target.classList.remove("input-error");
      }
      console.log(data);
   }).catch(error=>{
      console.log(error);
   })
   }
}


export default function PersonalForm({dic, disabledPerson}) {
   const [userName, setUserName] = useState("");
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [job, setJob] = useState("");
   const [country, setCountry] = useState("");
   const [secretKey, setSecretKey] = useState("");
   const[clean,setClean] = useState([setUserName,setName,setPhone,setEmail,setPassword,setJob,setCountry])

   const [userNameError, setUserNameError] = useState('');
   const [NameError, setNameError] = useState('');
   const [phoneError, setPhoneError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [jobError, setJobError] = useState('');
   const [countryError, setCountryError] = useState('');
   const [secretKeyError, setSecretKeyError] = useState('');
   const [disable, setDisable] = useState(false);
   const [errorMessage, setErrorMessage] = useState(false);
   const [errorMessageText, setErrorMessageText] = useState('');
   const [next,setNext] = useState('');
   const [viewnext,setViewNext] = useState(false);
   const [commingSecretKey,setCommingSecretKey] = useState('');
   const router = useRouter();

   return (
      <>
      {errorMessage && <ErrorMessage errorText={errorMessageText} seterrorText={setErrorMessageText} errorMessage={setErrorMessage} />}
      <form action="#" className="gap-4" autoComplete="on" onSubmit={(e)=>{
         formHandler(e,clean,setErrorMessage,setErrorMessageText,next,setNext,setViewNext,disabledPerson,setCommingSecretKey,commingSecretKey,secretKey,setDisable,router,userName,name,phone,email,password,job,country,secretKey);
      }}>
         <div className={`company-form ${next}`}>
         <div className="first gap-4">
         <div className="form-group  relative">
            <label htmlFor="username">{dic.register.username.title}</label>
            <div className="field-group">
               <span>
               <svg width="22" height="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"></path>
  <path d="M16.978 19.502a9 9 0 1 1 4.022-7.5c0 2.072-.75 3.75-2.625 3.75s-2.625-1.678-2.625-3.75v-3.75"></path>
</svg>
               </span>
               <input
                  type="text"
                  name="usernameCompany"
                  id="username"
                  aria-describedby="userName-error-ms"
                  value={userName}
                  onChange={(e) => {
                     setUserName(e.target.value);
                  }}
                  onBlur={(e)=>{
                     if(messageHandle(e,setUserNameError))
                     searchByUserName(e,{param:'userName',data:userName},setUserNameError,setDisable);
                  }}
                  required
                  placeholder={dic.register.username.placeholder}
               />
            </div>
            <span id="userName-error-ms"  className="error-message">
               {userNameError}
            </span>
         </div>

         <div className="form-group  relative">
            <label htmlFor="publicname">{dic.register.publicname.title}</label>
            <div className="field-group">
               <span>
               <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="4.5" r="3" fill="#888EA8"></circle>
                  <path opacity="0.5" d="M15 13.125C15 14.989 15 16.5 9 16.5C3 16.5 3 14.989 3 13.125C3 11.261 5.68629 9.75 9 9.75C12.3137 9.75 15 11.261 15 13.125Z" fill="#888EA8"></path>
               </svg>
               </span>
               <input
                  type="text"
                  name="publicnameCompany"
                  id="publicname"
                  aria-describedby="name-error-ms"
                  value={name}
                  onChange={(e) => {
                     setName(e.target.value);
                  }}
                  onBlur={(e)=>{
                     messageHandle(e,setNameError);
                  }}
                  required
                  placeholder={dic.register.publicname.placeholder}
               />
            </div>
            <span id="name-error-ms"  className="error-message">
               {NameError}
            </span>
         </div>

         <div className="form-group  relative">
            <label htmlFor="phone">{dic.register.phone.title}</label>
            <div className="field-group">
               <span>
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                  <path stroke="currentColor" strokeWidth="1.5" d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651M4.00289 5.74561C3.96765 5.12559 4.25823 4.56668 4.69185 4.13552L6.26145 2.57483C7.13596 1.70529 8.61028 1.83992 9.37326 2.85908L10.6342 4.54348C11.2507 5.36691 11.1841 6.49484 10.4775 7.19738L10.1907 7.48257" fill="currentColor"></path>
                  <path opacity="0.5" d="M18.6763 18.9651C17.0469 19.117 13.0622 18.9492 8.8154 14.7266C4.81076 10.7447 4.09308 7.33182 4.00293 5.74561" stroke="currentColor" strokWidth="1.5" fill="currentColor"></path>
                  <path opacity="0.5" d="M16.1007 13.3589C16.1007 13.3589 15.0181 14.4353 12.0631 11.4971C9.10807 8.55886 10.1907 7.48242 10.1907 7.48242" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor"></path>
               </svg>
               </span>
               <input
                  type="text"
                  name="phoneCompany"
                  id="phone"
                  pattern="[0-9]*"
                  aria-describedby="phone-error-ms"
                  value={phone}
                  onChange={(e) => {
                     setPhone(e.target.value);
                  }}
                  onBlur={(e)=>{
                     messageHandle(e,setPhoneError);
                  }}
                  required
                  placeholder={dic.register.phone.placeholder}
               />
            </div>
            <span id="phone-error-ms"  className="error-message">
               {phoneError}
            </span>
         </div>


         <div className="form-group  relative">
            <label htmlFor="email">{dic.register.email.title}</label>
            <div className="field-group">
               <span>
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                     <path
                        opacity="0.5"
                        d="M10.65 2.25H7.35C4.23873 2.25 2.6831 2.25 1.71655 3.23851C0.75 4.22703 0.75 5.81802 0.75 9C0.75 12.182 0.75 13.773 1.71655 14.7615C2.6831 15.75 4.23873 15.75 7.35 15.75H10.65C13.7613 15.75 15.3169 15.75 16.2835 14.7615C17.25 13.773 17.25 12.182 17.25 9C17.25 5.81802 17.25 4.22703 16.2835 3.23851C15.3169 2.25 13.7613 2.25 10.65 2.25Z"
                        fill="currentColor"
                     ></path>
                     <path
                        d="M14.3465 6.02574C14.609 5.80698 14.6445 5.41681 14.4257 5.15429C14.207 4.89177 13.8168 4.8563 13.5543 5.07507L11.7732 6.55931C11.0035 7.20072 10.4691 7.6446 10.018 7.93476C9.58125 8.21564 9.28509 8.30993 9.00041 8.30993C8.71572 8.30993 8.41956 8.21564 7.98284 7.93476C7.53168 7.6446 6.9973 7.20072 6.22761 6.55931L4.44652 5.07507C4.184 4.8563 3.79384 4.89177 3.57507 5.15429C3.3563 5.41681 3.39177 5.80698 3.65429 6.02574L5.4664 7.53583C6.19764 8.14522 6.79033 8.63914 7.31343 8.97558C7.85834 9.32604 8.38902 9.54743 9.00041 9.54743C9.6118 9.54743 10.1425 9.32604 10.6874 8.97558C11.2105 8.63914 11.8032 8.14522 12.5344 7.53582L14.3465 6.02574Z"
                        fill="currentColor"
                     ></path>
                  </svg>
               </span>
               <input
                  type="email"
                  name="emailCompany"
                  id="email"
                  aria-describedby="email-error-ms"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
                  onBlur={(e)=>{
                     if(messageHandle(e,setEmailError))
                     searchByUserName(e,{param:'email',data:email},setEmailError,setDisable);
                  }}
                  required
                  placeholder={dic.register.email.placeholder}
               />
            </div>
            <span id="email-error-ms"  className="error-message">
               {emailError}
            </span>
         </div>

         <div className="form-group  relative">
            <label htmlFor="password">{dic.register.password.title}</label>
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
                  name="passwordCompany"
                  id="password"
                  minLength={5}
                  maxLength={50}
                  aria-describedby="assword-error-ms"
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
                  onBlur={(e)=>{
                     messageHandle(e,setPasswordError);
                  }}
                  required
                  placeholder={dic.register.password.placeholder}
               />
            </div>
            <span id="password-error-ms"  className="error-message">
               {passwordError}
            </span>
         </div>

         <div className="form-group  relative">
            <label htmlFor="job">{dic.register.job.title}</label>
            <div className="field-group">
               <span>
<svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.25 6H16.5v-.75A2.26 2.26 0 0 0 14.25 3h-4.5A2.26 2.26 0 0 0 7.5 5.25V6H3.75a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5ZM9 5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V6H9v-.75ZM20.25 7.5v3.9A17.213 17.213 0 0 1 12 13.5c-2.882.002-5.72-.72-8.25-2.1V7.5h16.5Zm-10.125 3.75a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75Z"></path>
</svg>
               </span>
               <input
                  type="text"
                  name="jobCompany"
                  id="job"
                  value={job}
                  aria-describedby="job-error-ms"
                  // [jobError, setJobError]
                  onChange={(e) => {
                     setJob(e.target.value);
                  }}
                  onBlur={(e)=>{
                     messageHandle(e,setJobError);
                  }}
                  required
                  placeholder={dic.register.job.placeholder}
               />
            </div>
            <span id="job-error-ms"  className="error-message">
               {jobError}
            </span>
         </div>

         <div className="form-group  relative">
            <label htmlFor="country">{dic.register.country.title}</label>
            <div className="field-group">
               <span>
               <svg className="shrink-0 group-hover:!text-primary" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M19.7165 20.3624C21.143 19.5846 22 18.5873 22 17.5C22 16.3475 21.0372 15.2961 19.4537 14.5C17.6226 13.5794 14.9617 13 12 13C9.03833 13 6.37738 13.5794 4.54631 14.5C2.96285 15.2961 2 16.3475 2 17.5C2 18.6525 2.96285 19.7039 4.54631 20.5C6.37738 21.4206 9.03833 22 12 22C15.1066 22 17.8823 21.3625 19.7165 20.3624Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" fill="currentColor"></path>
               </svg>
               </span>
               <input
                  type="text"
                  name="countryCompany"
                  id="country"
                  list="CompanyCountry"
                  aria-describedby="country-error-ms"
                  value={country}
                  onChange={(e) => {
                     setCountry(e.target.value);
                  }}
                  onBlur={(e)=>{
                     messageHandle(e,setCountryError);
                  }}
                  required
                  // placeholder={dic.register.job.placeholder}
               />
               <datalist id="CompanyCountry">
                  <option value="Edge"/>
                  <option value="Firefox"/>
                  <option value="Chrome"/>
                  <option value="Opera"/>
                  <option value="Safari"/>
               </datalist>
            </div>
            <span id="country-error-ms"  className="error-message">
               {countryError}
            </span>
         </div>
         </div>

         {
            viewnext &&
            <div className="secret-field">
         <div className="form-group  relative">
            <label htmlFor="secret-key">{dic.register.secretKey.title}</label>
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
                  type="text"
                  name="secretKey"
                  id="secret-key"
                  minLength={5}
                  maxLength={50}
                  value={secretKey}
                  aria-describedby="secret-key-error-ms"
                  onChange={(e) => {
                     setSecretKey(e.target.value);
                  }}
                  onBlur={(e)=>{
                     if(messageHandle(e,setSecretKeyError)){
                        console.log('ok key')
                        if(!isSecretKey(commingSecretKey,secretKey)) {
                           console.log('commingSecretKey',commingSecretKey)
                           console.log('secretKey',secretKey)
                           // console.log('ok secretkey')
                           setDisable(true);
                           setErrorMessage(true);
                           setErrorMessageText('please Enter the correct secret Key !'); 
                        } else {
                           setDisable(false);
                           setErrorMessage(false);
                           setErrorMessageText(''); 
                        }
                     }
                  }}
                  required
                  placeholder={dic.register.secretKey.placeholder}
               />
            </div>
            <span id="secret-key-error-ms"  className="error-message">
               {secretKeyError}
            </span>
         </div>
         </div>
         }
         </div>
         <div className="form-group  relative">
            <button type="submit" disabled={disable} className="btn btn-primary btn-lg">SIGN UP</button>
         </div>
      </form>
      </>
   );
}

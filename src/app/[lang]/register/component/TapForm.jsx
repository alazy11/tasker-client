"use client";
// import getDictionary from "../../../_dictionaries/dictionaries";
import PersonalForm from "./PersonalForm";
import CompanyForm from "./CompanyForm";
import { useState } from "react";
import '../style/loader.css';


export default function TapForm({dic}){

  const [personal,setPersonal] = useState(true);
  const [company,setCompany] = useState(false);
  const [disabledPerson,setDisabledPerson] = useState(false);

   return (
      <>
      <div className="tap-container">
      <button className={personal ? "active" : "" } disabled={disabledPerson} onClick={(e)=>{
         setCompany(false);
         setPersonal(true);
      }}>
         Personal Account
      </button>
      <button className={company ? "active" : "" } onClick={(e)=>{
         setPersonal(false);
         setCompany(true);
      }}>
         Company Account
      </button>
   </div>
   <div className="form-tap-container">
      {/* {personal && <PersonalForm dic={dic} classn={personal ? "active" : "" } />} */}
      {personal && <PersonalForm dic={dic}/>}
      {/* <CompanyForm dic={dic} disabledPerson={setDisabledPerson} classn={company ? "active" : "" }/> */}
      {company && <CompanyForm dic={dic} disabledPerson={setDisabledPerson}/>}
   </div>
      </>
   )
}